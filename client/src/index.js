import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

const store = createStore(() => [], {}, applyMiddleware())

root.render(
    <Provider store={store}><App /></Provider>
);