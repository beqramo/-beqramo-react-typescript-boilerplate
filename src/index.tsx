import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from 'state/appContext';

import 'utils/localization/i18';
import 'utils/sentry';

ReactDOM.render(
  <Suspense fallback={<div>loading</div>}>
    <AppProvider>
      <App />
    </AppProvider>
  </Suspense>,
  document.getElementById('root'),
);

serviceWorker.unregister();
