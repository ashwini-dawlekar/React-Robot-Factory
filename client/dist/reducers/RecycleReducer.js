import { ADD_TO_RECYCLED } from '../actions/index';
export var RecycleReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case ADD_TO_RECYCLED:
            return state.concat([action.payload]);
        default:
            return state;
    }
};
//# sourceMappingURL=RecycleReducer.js.map