
import React from 'react';
import { Provider } from 'react-redux';
import store from './pages/store';
import Counter from './Counter';
import './style.css'


const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;