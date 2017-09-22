"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../actions/index");
exports.RobotsReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case index_1.FETCH_ROBOTS:
            return action.payload.data.map(function (robot) {
                return __assign({}, robot, { qaCategory: [], shipped: false });
            });
        case index_1.UPDATE_ROBOT_QA_CATEGORY:
            return state.map(function (robot, i) {
                if (_this.robot.id !== action.payload.id) {
                    return robot;
                }
                return __assign({}, _this.robot, { qaCategory: _this.robot.qaCategory.concat([action.payload.category]) });
            });
        case index_1.ADD_TO_SHIPPING:
            return state.map(function (robot) {
                if (_this.robot.id !== action.robot.id) {
                    return robot;
                }
                return __assign({}, _this.robot, { shipped: true });
            });
        case index_1.REMOVE_FROM_SHIPPING:
            return state.map(function (robot) {
                if (_this.robot.id !== action.robot.id) {
                    return robot;
                }
                return __assign({}, _this.robot, { shipped: false });
            });
        case index_1.CREATE_SHIPMENT:
            console.log("Response from server: " + action.payload.data + " See shipment.json to confirm new IDs added.");
            return state;
        case index_1.ADD_TO_EXTINGUISH_API:
            console.log("Response from server: " + action.payload.data + " See extinguish.json to confirm new IDs added.");
            return state;
        case index_1.ADD_TO_RECYCLE_API:
            console.log("Response from server: " + action.payload.data + " See recycle.json to confirm new IDs added.");
            return state;
        default:
            return state;
    }
};
