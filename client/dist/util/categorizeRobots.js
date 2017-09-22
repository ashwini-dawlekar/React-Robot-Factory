import * as _ from 'lodash';
import { ADD_TO_RECYCLED, ADD_TO_EXTINGUISH, ADD_TO_FACTORY_SECOND, ADD_TO_QA_PASS } from '../actions/index';
import STORE from '../index';
var ROBOT_STATUS = {
    ON_FIRE: "on fire",
    RUSTY: "rusty",
    LOOSE_SCREWS: "loose screws",
    PAINT_SCRATCHED: "paint scratched"
};
var COLOR = {
    RED: "red",
    BLUE: "blue",
    GREEN: "green"
};
var filterToCategory = function (robotItem, addToExtinguish, addToRecycle, updateRobotQaCategory, addApiToExtinguishFile, addApiToRecycleFile) {
    var configuration = robotItem.configuration, statuses = robotItem.statuses, id = robotItem.id;
    if (configuration.hasSentience && (_.indexOf(statuses, ROBOT_STATUS.ON_FIRE) > -1)) {
        addToExtinguish(robotItem);
        updateRobotQaCategory(id, ADD_TO_EXTINGUISH);
        addApiToExtinguishFile(id);
    }
    if (hasFewerThan3GreaterThan8Rotors(configuration) ||
        hasAnyRotorAndBlue(configuration) ||
        hasBothWheelsAndTracks(configuration) ||
        hasWheelsAndIsRusty(configuration, statuses) ||
        hasSentienceAndLooseScrews(configuration, statuses) ||
        isOnFire(statuses)) {
        addToRecycle(robotItem);
        updateRobotQaCategory(id, ADD_TO_RECYCLED);
        addApiToRecycleFile(id);
    }
};
var hasFewerThan3GreaterThan8Rotors = function (configuration) {
    return configuration.numberOfRotors < 3 || configuration.numberOfRotors > 8;
};
var hasAnyRotorAndBlue = function (configuration) {
    return configuration.numberOfRotors > 0 && configuration.colour === COLOR.BLUE;
};
var hasBothWheelsAndTracks = function (configuration) {
    return configuration.hasWheels && configuration.hasTracks;
};
var hasWheelsAndIsRusty = function (configuration, statuses) {
    return configuration.hasWheels && _.indexOf(statuses, ROBOT_STATUS.RUSTY) > -1;
};
var hasSentienceAndLooseScrews = function (configuration, statuses) {
    return configuration.hasSentience && _.indexOf(statuses, ROBOT_STATUS.LOOSE_SCREWS) > -1;
};
var isOnFire = function (statuses) {
    return _.indexOf(statuses, ROBOT_STATUS.ON_FIRE) > -1;
};
var isRusty = function (statuses) {
    return _.indexOf(statuses, ROBOT_STATUS.RUSTY) > -1;
};
var hasLooseScrews = function (statuses) {
    return _.indexOf(statuses, ROBOT_STATUS.LOOSE_SCREWS) > -1;
};
var hasScratchedPaint = function (statuses) {
    return _.indexOf(statuses, ROBOT_STATUS.PAINT_SCRATCHED) > -1;
};
var sortForShipping = function (robot, updateRobotQaCategory) {
    var id = robot.id, statuses = robot.statuses;
    if (isRusty(statuses) || hasLooseScrews(statuses) || hasScratchedPaint(statuses)) {
        updateRobotQaCategory(id, ADD_TO_FACTORY_SECOND);
    }
    else {
        updateRobotQaCategory(id, ADD_TO_QA_PASS);
    }
};
export var categorizeRobots = function (robotsArray, addToRecycle, addToExtinguish, updateRobotQaCategory, addApiToExtinguishFile, addApiToRecycleFile) {
    robotsArray.forEach(function (robot) {
        filterToCategory(robot, addToRecycle, addToExtinguish, updateRobotQaCategory, addApiToExtinguishFile, addApiToRecycleFile);
    });
    var robotsForShipping = STORE.getState().robots.filter(function (robot) {
        return !(robot.qaCategory.length > 0);
    });
    robotsForShipping.forEach(function (robot) {
        sortForShipping(robot, updateRobotQaCategory);
    });
};
//# sourceMappingURL=categorizeRobots.js.map