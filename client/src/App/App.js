import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from 'layout/MainLayout';
import { Spinner } from 'ui';
import 'styles/main.scss';

const ItemsList = lazy(() => import('_components/ItemsList'));
const ItemDetail = lazy(() => import('_components/ItemsList/ItemDetail'));

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route component={ItemsList} exact path='/items' />
            <Route component={ItemDetail} exact path='/items/:id' />
          </Suspense>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
