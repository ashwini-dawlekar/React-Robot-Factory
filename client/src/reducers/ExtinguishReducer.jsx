"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../actions/index");
exports.ExtinguishReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case index_1.ADD_TO_EXTINGUISH:
            return state.concat([action.payload]);
        default:
            return state;
    }
};
