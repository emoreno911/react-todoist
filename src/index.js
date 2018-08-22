import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import localforage from 'localforage';
import rootReducer from './reducers';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


function init(val) {
  const todos = val !== null ? val : [];
  const initialState = { todos };
  const store = createStore(rootReducer, initialState);

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  registerServiceWorker();
}

localforage.getItem('todos_list').then(init);


