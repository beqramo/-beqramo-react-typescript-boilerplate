import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from 'containers';
import { GlobalStyles } from 'components/styles';
import { themePrimary } from 'utils';
import { Helmet } from 'react-helmet';
import useApp from 'useApp';
function App() {
  const { shouldRender } = useApp();

  if (shouldRender)
    return (
      <Suspense fallback={() => <div>asdfasfasdasf</div>}>
        <ThemeProvider theme={themePrimary}>
          <GlobalStyles />
          <Helmet titleTemplate="%s -boilerplate" defaultTitle="boilerplate">
            <meta
              name="description"
              content="A React Boilerplate application"
            />
          </Helmet>
          <Routes />
        </ThemeProvider>
      </Suspense>
    );
  else return <></>;
}

export default App;
