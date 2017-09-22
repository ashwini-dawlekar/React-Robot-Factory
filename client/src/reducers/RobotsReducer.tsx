import { FETCH_ROBOTS, UPDATE_ROBOT_QA_CATEGORY, ADD_TO_SHIPPING, REMOVE_FROM_SHIPPING, CREATE_SHIPMENT, ADD_TO_EXTINGUISH_API, ADD_TO_RECYCLE_API } from '../actions/index';

export const RobotsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROBOTS:
      return action.payload.data.map(robot => {
        return {
          ...robot,
          qaCategory: [],
          shipped: false
        }
      });
    case UPDATE_ROBOT_QA_CATEGORY:
        return state.map( (robot, i) => {
        if (this.robot.id !== action.payload.id) {
          return robot;
        }

        return {
          ...this.robot,
          qaCategory: [...this.robot.qaCategory, action.payload.category]
        }
      });
    case ADD_TO_SHIPPING:
      return state.map(robot => {
        if (this.robot.id !== action.robot.id) {
          return robot;
        }

        return {
          ...this.robot,
          shipped: true
        }
      });
    case REMOVE_FROM_SHIPPING:
      return state.map(robot => {
        if (this.robot.id !== action.robot.id) {
          return robot;
        }

        return {
          ...this.robot,
          shipped: false
        }
      });
    case CREATE_SHIPMENT:
      console.log(`Response from server: ${action.payload.data} See shipment.json to confirm new IDs added.`);
      return state;
    case ADD_TO_EXTINGUISH_API:
      console.log(`Response from server: ${action.payload.data} See extinguish.json to confirm new IDs added.`);
      return state;
    case ADD_TO_RECYCLE_API:
      console.log(`Response from server: ${action.payload.data} See recycle.json to confirm new IDs added.`);
      return state;
    default:
      return state;
  }
}
