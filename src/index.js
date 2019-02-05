import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './configureStore'
import main from './pages/main';
import 'moment/locale/es.js';
import './index.css';

const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <main.Container />
            </ConnectedRouter>
        </Provider>
    </AppContainer>
    , document.getElementById('root'));


if (module.hot) {
    module.hot.accept('./pages/main/Container', () => {
        render(
            <AppContainer>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <main.Container />
                    </ConnectedRouter>
                </Provider>
            </AppContainer>,
            document.getElementById('app')
        );
    });
}