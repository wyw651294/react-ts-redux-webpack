import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as Hello from './containers/Hello';

/** 按需加载 */
function lazyLoadComponent(lazyModule: any): any {
  return (location: any, cb: any) => {
    lazyModule((module: any) => cb(null, module.default));
  }
}

export default (
  <Route path="/">
    <IndexRoute getComponent={lazyLoadComponent(Hello)} />
    <Route path="/demo">
      <IndexRoute getComponent={lazyLoadComponent(Hello)} />
    </Route>
  </Route>
);