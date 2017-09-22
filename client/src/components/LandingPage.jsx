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
var index_1 = require("../actions/index");
var categorizeRobots_1 = require("../util/categorizeRobots");
exports.ROBOT_STATUS = {
    ON_FIRE: "on fire",
    RUSTY: "rusty",
    LOOSE_SCREWS: "loose screws",
    PAINT_SCRATHCED: "paint scratched"
};
var LandingPage = /** @class */ (function (_super) {
    __extends(LandingPage, _super);
    function LandingPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderMessage = function () {
            switch (_this.props.currentAppState) {
                case index_1.ON_LOAD:
                    return "Batch has been loaded with " + _this.props.robots.length + " robots. Click button to continue.";
                case index_1.QA_IN_PROGRESS:
                    return "Please wait. Your batch is being processed";
                case index_1.QA_COMPLETE:
                    return "QA complete. Click button start shipping";
                default:
                    return "App state out of sync";
            }
        };
        return _this;
    }
    LandingPage.prototype.componentDidMount = function () {
        this.props.fetchRobots();
    };
    LandingPage.prototype.renderBatchLoadedRobots = function () {
        if (!this.props.robots.length) {
            return (<div>Loading robots from batch..</div>);
        }
        var robotsInBatch = this.props.robots[0].data;
        return (robotsInBatch.map(function (robot) { return <div key={robot.id}>{robot.id}</div>; }));
    };
    ;
    LandingPage.prototype.startQA = function () {
        this.props.changeAppStatus(index_1.QA_IN_PROGRESS);
        categorizeRobots_1.categorizeRobots(this.props.robots, this.props.addToRecycle, this.props.addToExtinguish, this.props.updateRobotQaCategory, this.props.addApiToExtinguishFile, this.props.addApiToRecycleFile);
        this.props.changeAppStatus(index_1.QA_COMPLETE);
    };
    LandingPage.prototype.renderButton = function () {
        var _this = this;
        var label = "Start QA";
        if (this.props.currentAppState !== index_1.QA_COMPLETE) {
            return (<input className="btn btn-danger" type="button" value={label} onClick={this.startQA.bind(this)}/>);
        }
        else {
            return (<input className="btn btn-primary" type="button" value="Start Shipping" onClick={function () { _this.props.history.push('/shipping'); }}/>);
        }
    };
    LandingPage.prototype.render = function () {
        return (<div className="landing-page">
        <h2>Robot Factory</h2>
        <div className="alert alert-success">
          {this.renderMessage()}
        </div>
        <p></p>
        <div>
          {this.renderButton()}
        </div>
      </div>);
    };
    return LandingPage;
}(React.Component));
exports.default = LandingPage;
