"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../actions/index");
exports.CurrentAppReducer = function (state, action) {
    if (state === void 0) { state = index_1.ON_LOAD; }
    switch (action.type) {
        case index_1.CHANGE_APP_STATUS:
            return action.newStatus;
        default:
            return state;
    }
};
