import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const initialState = { 
  todos: [
    {id:1534308748708, text:'Do homework', completed: false},
    {id:1534328648709, text:'Do breakfast', completed: true}
  ] 
};
const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
