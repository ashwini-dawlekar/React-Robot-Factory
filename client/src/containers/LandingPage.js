"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var LandingPage_1 = require("../components/LandingPage");
var index_1 = require("../actions/index");
var mapStateToProps = function (state) {
    return {
        robots: state.robots,
        currentAppState: state.currentAppState,
        recycled: state.recycled,
        extinguished: state.extinguished
    };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ fetchRobots: index_1.fetchRobots, changeAppStatus: index_1.changeAppStatus, addToRecycle: index_1.addToRecycle, addToExtinguish: index_1.addToExtinguish, updateRobotQaCategory: index_1.updateRobotQaCategory, addApiToExtinguishFile: index_1.addApiToExtinguishFile, addApiToRecycleFile: index_1.addApiToRecycleFile }, dispatch);
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LandingPage_1.default);
