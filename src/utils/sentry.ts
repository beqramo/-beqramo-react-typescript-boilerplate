import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  debug:
    process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
});
