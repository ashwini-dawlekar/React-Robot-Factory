"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require("axios");
exports.FETCH_ROBOTS = 'FETCH_ROBOTS';
exports.ON_LOAD = 'onLoad';
exports.QA_IN_PROGRESS = 'qaInProgress';
exports.QA_COMPLETE = 'qaComplete';
exports.CHANGE_APP_STATUS = 'changeAppStatus';
exports.ADD_TO_RECYCLED = "ADD_TO_RECYCLED";
exports.ADD_TO_EXTINGUISH = "ADD_TO_EXTINGUISH";
exports.UPDATE_ROBOT_QA_CATEGORY = "UPDATE_ROBOT_QA_CATEGORY";
exports.ADD_TO_FACTORY_SECOND = "ADD_TO_FACTORY_SECOND";
exports.ADD_TO_QA_PASS = "ADD_TO_QA_PASS";
exports.ADD_TO_SHIPPING = "ADD_TO_SHIPPING";
exports.REMOVE_FROM_SHIPPING = "REMOVE_FROM_SHIPPING";
exports.CREATE_SHIPMENT = "CREATE_SHIPMENT";
exports.ADD_TO_EXTINGUISH_API = "ADD_TO_EXTINGUISH_API";
exports.ADD_TO_RECYCLE_API = "ADD_TO_RECYCLE_API";
var FETCH_BATCH_URL = 'http://localhost:3000/api/robots';
var CREATE_SHIPMENT_URL = 'http://localhost:3000/api/shipment/create';
var EXTINGUISH_URL = 'http://localhost:3000/api/robots/extinguish';
var RECYCLE_URL = 'http://localhost:3000/api/robots/recycle';
exports.fetchRobots = function () {
    var request = axios.default.get(FETCH_BATCH_URL);
    return {
        type: exports.FETCH_ROBOTS,
        payload: request
    };
};
exports.changeAppStatus = function (newStatus) {
    return {
        type: exports.CHANGE_APP_STATUS,
        newStatus: newStatus
    };
};
exports.addToRecycle = function (robot) {
    return {
        type: exports.ADD_TO_RECYCLED,
        payload: robot
    };
};
exports.addToExtinguish = function (robot) {
    return {
        type: exports.ADD_TO_EXTINGUISH,
        payload: robot
    };
};
exports.updateRobotQaCategory = function (id, category) {
    return {
        type: exports.UPDATE_ROBOT_QA_CATEGORY,
        payload: {
            id: id,
            category: category
        }
    };
};
exports.addToShipping = function (robot) {
    return {
        type: exports.ADD_TO_SHIPPING,
        robot: robot
    };
};
exports.removeFromShipping = function (robot) {
    return {
        type: exports.REMOVE_FROM_SHIPPING,
        robot: robot
    };
};
exports.createNewShipment = function (arrayOfIds) {
    var URL = CREATE_SHIPMENT_URL + "?array=" + JSON.stringify(arrayOfIds);
    var request = axios.default.post(URL);
    return {
        type: exports.CREATE_SHIPMENT,
        payload: request
    };
};
exports.addApiToExtinguishFile = function (id) {
    var URL = EXTINGUISH_URL + "/" + JSON.stringify(id);
    var request = axios.default.post(URL);
    return {
        type: exports.ADD_TO_EXTINGUISH_API,
        payload: request
    };
};
exports.addApiToRecycleFile = function (id) {
    var URL = RECYCLE_URL + "/" + JSON.stringify(id);
    var request = axios.default.post(URL);
    return {
        type: exports.ADD_TO_RECYCLE_API,
        payload: request
    };
};
