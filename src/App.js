import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import HomePage from './pages/HomePage'

import configureStore from './store/configureStore'
import rootSaga from './sagas'

const store = configureStore()
store.runSaga(rootSaga)


store.subscribe(() => {
 store.getState()
})

function App() {
  return (
      <Provider store={store}>
        <HomePage />
      </Provider>
  );
}

export default App;
