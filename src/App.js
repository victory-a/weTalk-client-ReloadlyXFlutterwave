import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppLayout from "AppLayout";
import { FullPageSpinner } from "components/Loader";
import ErrorBoundary from "components/errorBoundary";

import routes from "routes/routesList";

function App() {
  return (
    <Router>
      <AppLayout>
        <ErrorBoundary>
          <Suspense fallback={<FullPageSpinner />}>
            <Switch>
              {routes.map(({ component, ...rest }, index) => (
                <Route component={component} {...rest} key={`app-route-${index}`} />
              ))}
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </AppLayout>
    </Router>
  );
}

export default App;
