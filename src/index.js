import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store } from './components/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import  App  from 'components/App';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <App />
      <PersistGate />
    </Provider>,
  </React.StrictMode>
);
