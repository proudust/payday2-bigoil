import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BigOilContextProvider } from './BigOilContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BigOilContextProvider>
    <App />
  </BigOilContextProvider>,
  document.getElementById('root'),
);

serviceWorker.register();
