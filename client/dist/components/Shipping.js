var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as _ from 'lodash';
import { ADD_TO_FACTORY_SECOND, ADD_TO_QA_PASS } from '../actions/index';
var QAComplete = /** @class */ (function (_super) {
    __extends(QAComplete, _super);
    function QAComplete() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QAComplete.prototype.renderRobotsList = function (category) {
        var _this = this;
        var factorySecondRobots = this.props.robots.filter(function (robot) {
            return _.indexOf(robot.qaCategory, category) > -1 && !robot.shipped;
        });
        return factorySecondRobots.map(function (robot) {
            var config = {
                sentience: robot.configuration.hasSentience ? 'Yes' : 'No',
                wheels: robot.configuration.hasWheels ? 'Yes' : 'No',
                tracks: robot.configuration.hasTracks ? 'Yes' : 'No'
            };
            return (React.createElement("tr", { key: robot.id },
                React.createElement("td", null, robot.id),
                React.createElement("td", null, robot.name),
                React.createElement("td", null, config.sentience),
                React.createElement("td", null, config.wheels),
                React.createElement("td", null, config.tracks),
                React.createElement("td", null, robot.configuration.numberOfRotors),
                React.createElement("td", null, _.capitalize(robot.configuration.Colour)),
                React.createElement("td", null,
                    React.createElement("input", { type: "button", className: "btn btn-success", value: "Add To Shipment", onClick: function () { _this.props.addToShipping(robot); } }))));
        });
    };
    QAComplete.prototype.renderShippingList = function () {
        var _this = this;
        var shippedRobotsList = this.props.robots.filter(function (robot) { return robot.shipped; });
        return shippedRobotsList.map(function (robot) {
            var config = {
                sentience: robot.configuration.hasSentience ? 'Yes' : 'No',
                wheels: robot.configuration.hasWheels ? 'Yes' : 'No',
                tracks: robot.configuration.hasTracks ? 'Yes' : 'No'
            };
            return (React.createElement("tr", { key: robot.id },
                React.createElement("td", null, robot.id),
                React.createElement("td", null, robot.name),
                React.createElement("td", null, config.sentience),
                React.createElement("td", null, config.wheels),
                React.createElement("td", null, config.tracks),
                React.createElement("td", null, robot.configuration.numberOfRotors),
                React.createElement("td", null, _.capitalize(robot.configuration.Colour)),
                React.createElement("td", null,
                    React.createElement("input", { type: "button", className: "btn btn-danger", value: "Remove From Shipment", onClick: function () { _this.props.removeFromShipping(robot); } }))));
        });
    };
    QAComplete.prototype.renderSendShipmentButton = function () {
        var _this = this;
        var shippedRobotsList = this.props.robots.filter(function (robot) { return robot.shipped; });
        if (shippedRobotsList.length > 0) {
            return (React.createElement("input", { type: "button", className: "btn btn-primary", value: "Send Shipment", onClick: function () { _this.sendShipment(); } }));
        }
    };
    QAComplete.prototype.sendShipment = function () {
        var shippedRobotsList = this.props.robots.filter(function (robot) { return robot.shipped; });
        var idOfShippedRobots = shippedRobotsList.map(function (robot) {
            return robot.id;
        });
        this.props.createNewShipment(idOfShippedRobots);
    };
    QAComplete.prototype.render = function () {
        return (React.createElement("div", { className: "shipping-list" },
            React.createElement("h2", null, "Factory Seconds"),
            React.createElement("table", { className: "table table-default" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "ID"),
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "Sentience"),
                        React.createElement("th", null, "Wheels"),
                        React.createElement("th", null, "Tracks"),
                        React.createElement("th", null, "Rotors"),
                        React.createElement("th", null, "Color"),
                        React.createElement("th", null, "Action"))),
                React.createElement("tbody", null, this.renderRobotsList(ADD_TO_FACTORY_SECOND))),
            React.createElement("h2", null, "QA Passed"),
            React.createElement("table", { className: "table table-default" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "ID"),
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "Sentience"),
                        React.createElement("th", null, "Wheels"),
                        React.createElement("th", null, "Tracks"),
                        React.createElement("th", null, "Rotors"),
                        React.createElement("th", null, "Color"),
                        React.createElement("th", null, "Action"))),
                React.createElement("tbody", null, this.renderRobotsList(ADD_TO_QA_PASS))),
            React.createElement("h2", null, "Ready To Ship"),
            React.createElement("table", { className: "table table-default" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "ID"),
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "Sentience"),
                        React.createElement("th", null, "Wheels"),
                        React.createElement("th", null, "Tracks"),
                        React.createElement("th", null, "Rotors"),
                        React.createElement("th", null, "Color"),
                        React.createElement("th", null, "Action"))),
                React.createElement("tbody", null, this.renderShippingList())),
            this.renderSendShipmentButton()));
    };
    return QAComplete;
}(React.Component));
export default QAComplete;
//# sourceMappingURL=Shipping.js.map