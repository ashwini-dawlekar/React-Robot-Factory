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
import { ON_LOAD, QA_IN_PROGRESS, QA_COMPLETE } from '../actions/index';
import { categorizeRobots } from '../util/categorizeRobots';
export var ROBOT_STATUS = {
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
                case ON_LOAD:
                    return "Batch has been loaded with " + _this.props.robots.length + " robots. Click button to continue.";
                case QA_IN_PROGRESS:
                    return "Please wait. Your batch is being processed";
                case QA_COMPLETE:
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
            return (React.createElement("div", null, "Loading robots from batch.."));
        }
        var robotsInBatch = this.props.robots[0].data;
        return (robotsInBatch.map(function (robot) { return React.createElement("div", { key: robot.id }, robot.id); }));
    };
    ;
    LandingPage.prototype.startQA = function () {
        this.props.changeAppStatus(QA_IN_PROGRESS);
        categorizeRobots(this.props.robots, this.props.addToRecycle, this.props.addToExtinguish, this.props.updateRobotQaCategory, this.props.addApiToExtinguishFile, this.props.addApiToRecycleFile);
        this.props.changeAppStatus(QA_COMPLETE);
    };
    LandingPage.prototype.renderButton = function () {
        var _this = this;
        var label = "Start QA";
        if (this.props.currentAppState !== QA_COMPLETE) {
            return (React.createElement("input", { className: "btn btn-danger", type: "button", value: label, onClick: this.startQA.bind(this) }));
        }
        else {
            return (React.createElement("input", { className: "btn btn-primary", type: "button", value: "Start Shipping", onClick: function () { _this.props.history.push('/shipping'); } }));
        }
    };
    LandingPage.prototype.render = function () {
        return (React.createElement("div", { className: "landing-page" },
            React.createElement("h2", null, "Robot Factory"),
            React.createElement("div", { className: "alert alert-success" }, this.renderMessage()),
            React.createElement("p", null),
            React.createElement("div", null, this.renderButton())));
    };
    return LandingPage;
}(React.Component));
export default LandingPage;
//# sourceMappingURL=LandingPage.js.map