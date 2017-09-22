import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LandingPage from '../components/LandingPage';
import { fetchRobots, changeAppStatus, addToRecycle, addToExtinguish, updateRobotQaCategory, addApiToExtinguishFile, addApiToRecycleFile } from '../actions/index';
var mapStateToProps = function (state) {
    return {
        robots: state.robots,
        currentAppState: state.currentAppState,
        recycled: state.recycled,
        extinguished: state.extinguished
    };
};
var mapDispatchToProps = function (dispatch) {
    return bindActionCreators({ fetchRobots: fetchRobots, changeAppStatus: changeAppStatus, addToRecycle: addToRecycle, addToExtinguish: addToExtinguish, updateRobotQaCategory: updateRobotQaCategory, addApiToExtinguishFile: addApiToExtinguishFile, addApiToRecycleFile: addApiToRecycleFile }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
//# sourceMappingURL=LandingPage.js.map