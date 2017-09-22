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
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import Shipping from './containers/Shipping';
import RootReducer from './reducers/index';
import './styles/style.css';
//let store = createStore(rootReducer);
var connectWithReduxMiddleWare = applyMiddleware(ReduxPromise)(createStore);
var store = connectWithReduxMiddleWare(RootReducer);
export default store; //TEST only.
var Root = /** @class */ (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.render = function () {
        return (React.createElement(Provider, { store: store },
            React.createElement(BrowserRouter, null,
                React.createElement("div", null,
                    React.createElement(Switch, null,
                        React.createElement(Route, { path: "/shipping", component: Shipping }),
                        React.createElement(Route, { path: "/", component: LandingPage }))))));
    };
    return Root;
}(React.Component));
;
ReactDOM.render(React.createElement(Root, null), document.getElementById('root'));
// class Root extends React.Component{
//   render() {
//     return(
//
//     );
//   }
// };
// ReactDOM.render(
//   // <Root store={store} />, document.getElementById('root'));
//     <Provider store={store}>
//     <BrowserRouter>
//         <div>
//             <Switch>
//                 <Route path="/shipping" component={ Shipping } />
// <Route path="/" component={ LandingPage } />
// </Switch>
// </div>
// </BrowserRouter>
// </Provider>,
// document.getElementById('root')
// ) 
//# sourceMappingURL=index.js.map