/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/rootReducer';
import AppRoute from './Routes/AppRoute';

const store = createStore(rootReducer);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppRoute />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);
