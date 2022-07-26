import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';


import App from './App';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'),
);

