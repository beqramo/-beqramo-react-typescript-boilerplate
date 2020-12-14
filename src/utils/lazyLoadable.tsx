import React, { lazy, Suspense } from 'react';

type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export default <T extends Promise<any>, U extends React.ComponentType<any>>(
  importFunc: () => T,
  fallback: React.ReactNode = null,
  selectorFunc?: (s: Unpromisify<T>) => U,
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then((module) => ({ default: selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  // eslint-disable-next-line react/display-name
  return (props: React.ComponentProps<U>): React.Element => (
    <Suspense fallback={fallback ?? <></>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
