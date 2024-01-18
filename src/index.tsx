import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  store, {persister}  from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persister}>
      <App />
    </PersistGate>
    </BrowserRouter>
  </Provider>
);

