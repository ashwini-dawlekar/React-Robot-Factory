var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _this = this;
import { FETCH_ROBOTS, UPDATE_ROBOT_QA_CATEGORY, ADD_TO_SHIPPING, REMOVE_FROM_SHIPPING, CREATE_SHIPMENT, ADD_TO_EXTINGUISH_API, ADD_TO_RECYCLE_API } from '../actions/index';
export var RobotsReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case FETCH_ROBOTS:
            return action.payload.data.map(function (robot) {
                return __assign({}, robot, { qaCategory: [], shipped: false });
            });
        case UPDATE_ROBOT_QA_CATEGORY:
            return state.map(function (robot, i) {
                if (_this.robot.id !== action.payload.id) {
                    return robot;
                }
                return __assign({}, _this.robot, { qaCategory: _this.robot.qaCategory.concat([action.payload.category]) });
            });
        case ADD_TO_SHIPPING:
            return state.map(function (robot) {
                if (_this.robot.id !== action.robot.id) {
                    return robot;
                }
                return __assign({}, _this.robot, { shipped: true });
            });
        case REMOVE_FROM_SHIPPING:
            return state.map(function (robot) {
                if (_this.robot.id !== action.robot.id) {
                    return robot;
                }
                return __assign({}, _this.robot, { shipped: false });
            });
        case CREATE_SHIPMENT:
            console.log("Response from server: " + action.payload.data + " See shipment.json to confirm new IDs added.");
            return state;
        case ADD_TO_EXTINGUISH_API:
            console.log("Response from server: " + action.payload.data + " See extinguish.json to confirm new IDs added.");
            return state;
        case ADD_TO_RECYCLE_API:
            console.log("Response from server: " + action.payload.data + " See recycle.json to confirm new IDs added.");
            return state;
        default:
            return state;
    }
};
//# sourceMappingURL=RobotsReducer.js.map