import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is', process.env.NODE_ENV);