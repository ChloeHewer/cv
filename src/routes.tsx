import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import HomePage from "../src/container/homepage/homepage";
import Summary from "./container/personal/personal";
import Experience from "./container/Experience/experience";

export interface IProps {}

export interface IState {}

class Routes extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/summary" component={Summary} />
        <Route path="/experience" component={Experience} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
