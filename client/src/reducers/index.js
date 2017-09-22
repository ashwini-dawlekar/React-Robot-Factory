"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var RobotsReducer_1 = require("./RobotsReducer");
var CurrentAppReducer_1 = require("./CurrentAppReducer");
var RecycleReducer_1 = require("./RecycleReducer");
var ExtinguishReducer_1 = require("./ExtinguishReducer");
var rootReducer = redux_1.combineReducers({
    robots: RobotsReducer_1.RobotsReducer,
    currentAppState: CurrentAppReducer_1.CurrentAppReducer,
    recycled: RecycleReducer_1.RecycleReducer,
    extinguished: ExtinguishReducer_1.ExtinguishReducer
});
exports.default = rootReducer;
