"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var index_1 = require("../actions/index");
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
            return (<tr key={robot.id}>
          <td>{robot.id}</td>
          <td>{robot.name}</td>
          <td>{config.sentience}</td>
          <td>{config.wheels}</td>
          <td>{config.tracks}</td>
          <td>{robot.configuration.numberOfRotors}</td>
          <td>{_.capitalize(robot.configuration.Colour)}</td>
          <td><input type="button" className="btn btn-success" value="Add To Shipment" onClick={function () { _this.props.addToShipping(robot); }}/></td>
        </tr>);
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
            return (<tr key={robot.id}>
          <td>{robot.id}</td>
          <td>{robot.name}</td>
          <td>{config.sentience}</td>
          <td>{config.wheels}</td>
          <td>{config.tracks}</td>
          <td>{robot.configuration.numberOfRotors}</td>
          <td>{_.capitalize(robot.configuration.Colour)}</td>
          <td><input type="button" className="btn btn-danger" value="Remove From Shipment" onClick={function () { _this.props.removeFromShipping(robot); }}/></td>
        </tr>);
        });
    };
    QAComplete.prototype.renderSendShipmentButton = function () {
        var _this = this;
        var shippedRobotsList = this.props.robots.filter(function (robot) { return robot.shipped; });
        if (shippedRobotsList.length > 0) {
            return (<input type="button" className="btn btn-primary" value="Send Shipment" onClick={function () { _this.sendShipment(); }}/>);
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
        return (<div className="shipping-list">
        <h2>Factory Seconds</h2>
        <table className="table table-default">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Sentience</th>
              <th>Wheels</th>
              <th>Tracks</th>
              <th>Rotors</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRobotsList(index_1.ADD_TO_FACTORY_SECOND)}
          </tbody>
        </table>

        <h2>QA Passed</h2>
        <table className="table table-default">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Sentience</th>
              <th>Wheels</th>
              <th>Tracks</th>
              <th>Rotors</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRobotsList(index_1.ADD_TO_QA_PASS)}
          </tbody>
        </table>

        <h2>Ready To Ship</h2>
        <table className="table table-default">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Sentience</th>
              <th>Wheels</th>
              <th>Tracks</th>
              <th>Rotors</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderShippingList()}
          </tbody>
        </table>
        {this.renderSendShipmentButton()}
      </div>);
    };
    return QAComplete;
}(React.Component));
exports.default = QAComplete;
