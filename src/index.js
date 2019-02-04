import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppContainer } from 'react-hot-loader'
import main from './pages/main';
import configureStore, { history } from './configureStore'
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

console.log('historyIndex', history);
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