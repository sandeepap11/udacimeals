import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers';


const logger = store => next => action => {

  console.group(action.type)
  console.info('Dispatching ', action)

  let result = next(action)
  console.log('Next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer, composeEnhancers(applyMiddleware(logger))

)

ReactDOM.render(<Provider store={ store }><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
