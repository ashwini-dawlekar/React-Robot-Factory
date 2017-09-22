import { UPDATE_ROBOT_QA_CATEGORY } from '../actions/index';
export var UpdateRobotQaCategoryReducer = function (state, action) {
    switch (action.type) {
        case UPDATE_ROBOT_QA_CATEGORY:
            return state.map(function (robot) {
                if (robot.id !== action.payload.id) {
                    return robot;
                }
                return robot.qaCategory = action.payload.category;
            });
        default:
            return state;
    }
};
//# sourceMappingURL=UpdateRobotQaCategoryReducer.js.map