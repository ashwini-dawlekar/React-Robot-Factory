import * as axios from 'axios';
export var FETCH_ROBOTS = 'FETCH_ROBOTS';
export var ON_LOAD = 'onLoad';
export var QA_IN_PROGRESS = 'qaInProgress';
export var QA_COMPLETE = 'qaComplete';
export var CHANGE_APP_STATUS = 'changeAppStatus';
export var ADD_TO_RECYCLED = "ADD_TO_RECYCLED";
export var ADD_TO_EXTINGUISH = "ADD_TO_EXTINGUISH";
export var UPDATE_ROBOT_QA_CATEGORY = "UPDATE_ROBOT_QA_CATEGORY";
export var ADD_TO_FACTORY_SECOND = "ADD_TO_FACTORY_SECOND";
export var ADD_TO_QA_PASS = "ADD_TO_QA_PASS";
export var ADD_TO_SHIPPING = "ADD_TO_SHIPPING";
export var REMOVE_FROM_SHIPPING = "REMOVE_FROM_SHIPPING";
export var CREATE_SHIPMENT = "CREATE_SHIPMENT";
export var ADD_TO_EXTINGUISH_API = "ADD_TO_EXTINGUISH_API";
export var ADD_TO_RECYCLE_API = "ADD_TO_RECYCLE_API";
var FETCH_BATCH_URL = 'http://localhost:3000/api/robots';
var CREATE_SHIPMENT_URL = 'http://localhost:3000/api/shipment/create';
var EXTINGUISH_URL = 'http://localhost:3000/api/robots/extinguish';
var RECYCLE_URL = 'http://localhost:3000/api/robots/recycle';
export var fetchRobots = function () {
    var request = axios.default.get(FETCH_BATCH_URL);
    return {
        type: FETCH_ROBOTS,
        payload: request
    };
};
export var changeAppStatus = function (newStatus) {
    return {
        type: CHANGE_APP_STATUS,
        newStatus: newStatus
    };
};
export var addToRecycle = function (robot) {
    return {
        type: ADD_TO_RECYCLED,
        payload: robot
    };
};
export var addToExtinguish = function (robot) {
    return {
        type: ADD_TO_EXTINGUISH,
        payload: robot
    };
};
export var updateRobotQaCategory = function (id, category) {
    return {
        type: UPDATE_ROBOT_QA_CATEGORY,
        payload: {
            id: id,
            category: category
        }
    };
};
export var addToShipping = function (robot) {
    return {
        type: ADD_TO_SHIPPING,
        robot: robot
    };
};
export var removeFromShipping = function (robot) {
    return {
        type: REMOVE_FROM_SHIPPING,
        robot: robot
    };
};
export var createNewShipment = function (arrayOfIds) {
    var URL = CREATE_SHIPMENT_URL + "?array=" + JSON.stringify(arrayOfIds);
    var request = axios.default.post(URL);
    return {
        type: CREATE_SHIPMENT,
        payload: request
    };
};
export var addApiToExtinguishFile = function (id) {
    var URL = EXTINGUISH_URL + "/" + JSON.stringify(id);
    var request = axios.default.post(URL);
    return {
        type: ADD_TO_EXTINGUISH_API,
        payload: request
    };
};
export var addApiToRecycleFile = function (id) {
    var URL = RECYCLE_URL + "/" + JSON.stringify(id);
    var request = axios.default.post(URL);
    return {
        type: ADD_TO_RECYCLE_API,
        payload: request
    };
};
//# sourceMappingURL=index.js.map