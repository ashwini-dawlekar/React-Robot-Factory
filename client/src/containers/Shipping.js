"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var Shipping_1 = require("../components/Shipping");
var index_1 = require("../actions/index");
var mapStateToProps = function (state) {
    return {
        robots: state.robots
    };
};
var mapDisplatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({ addToShipping: index_1.addToShipping, removeFromShipping: index_1.removeFromShipping, createNewShipment: index_1.createNewShipment }, dispatch);
};
exports.default = react_redux_1.connect(mapStateToProps, mapDisplatchToProps)(Shipping_1.default);
