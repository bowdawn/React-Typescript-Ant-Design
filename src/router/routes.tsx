import React, { FC } from 'react';
import {
  MyManager,
  CustomerInput,
  ConfirmPlan,
  AddPlan,
  ProductDetail,
  NotAuthorized,
  PageNotFound,
} from 'src/screens/index';
import {
  ScrollToTop,
  ScreenResize,
  PrivateRoute,
} from 'src/components/router/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const MainNavigator: FC<any> = (props: any) => {
  return (
    <Router>
      <ScrollToTop />
      <ScreenResize>
        <Switch>
          <Redirect
            exact
            from='/'
            to={screenPath1 + '?serviceName=test&key=test'}
          />
          <Route exact path={screenPath1} component={MyManager} />
          <PrivateRoute exact path={screenPath2} component={CustomerInput} />
          <PrivateRoute
            exact
            path={screenPath3}
            component={ConfirmPlan}
            state={['name', 'age', 'gender', 'designId']}
          />
          <PrivateRoute
            exact
            path={screenPath4}
            component={AddPlan}
            state={['name', 'age', 'gender', 'designId']}
          />
          <PrivateRoute
            exact
            path={screenPath5}
            component={ProductDetail}
            state={['item']}
          />
          <Route exact path={screenPath6} component={NotAuthorized} />
          <Route component={PageNotFound} />
        </Switch>
      </ScreenResize>
    </Router>
  );
};

export default MainNavigator;
