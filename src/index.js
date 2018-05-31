import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import Login from './components/Login';
import Header from './components/Header';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
   <Route path="/" component={App } exact={true}/>
   <Route path="/login" component={Login } exact={true}/>
    </Switch>
    </div>
    
    </BrowserRouter>
        
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

