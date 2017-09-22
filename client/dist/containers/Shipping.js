import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Shipping from '../components/Shipping';
import { addToShipping, removeFromShipping, createNewShipment } from '../actions/index';
var mapStateToProps = function (state) {
    return {
        robots: state.robots
    };
};
var mapDisplatchToProps = function (dispatch) {
    return bindActionCreators({ addToShipping: addToShipping, removeFromShipping: removeFromShipping, createNewShipment: createNewShipment }, dispatch);
};
export default connect(mapStateToProps, mapDisplatchToProps)(Shipping);
//# sourceMappingURL=Shipping.js.map