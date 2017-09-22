import { ADD_TO_EXTINGUISH } from '../actions/index';
export var ExtinguishReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case ADD_TO_EXTINGUISH:
            return state.concat([action.payload]);
        default:
            return state;
    }
};
//# sourceMappingURL=ExtinguishReducer.js.map