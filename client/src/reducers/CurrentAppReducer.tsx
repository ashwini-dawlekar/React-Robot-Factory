import {
  ON_LOAD,
  QA_COMPLETE,
  CHANGE_APP_STATUS
} from '../actions/index';

export const CurrentAppReducer = (state=ON_LOAD, action) => {
  switch (action.type) {
    case CHANGE_APP_STATUS:
      return action.newStatus;
    default:
      return state;
  }
};
