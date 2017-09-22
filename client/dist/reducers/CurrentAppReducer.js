import { ON_LOAD, CHANGE_APP_STATUS } from '../actions/index';
export var CurrentAppReducer = function (state, action) {
    if (state === void 0) { state = ON_LOAD; }
    switch (action.type) {
        case CHANGE_APP_STATUS:
            return action.newStatus;
        default:
            return state;
    }
};
//# sourceMappingURL=CurrentAppReducer.js.map