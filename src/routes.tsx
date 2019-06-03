import * as React from 'react';
import { Route, Switch, Redirect } from "react-router";
import Education from "./components/education/education";
import ExperiencePage from "./container/experiencePage/experiencePage";
import HomePage from "./components/homepage/homepage";
import Summary from "./components/summary/summary";
import Skills from "./components/skills/skills";

export interface IProps { }

export interface IState { }

class Routes extends React.Component<IProps, IState> {
    // state = { :  }
    render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/summary" component={Summary} />
                <Route path="/experience" component={ExperiencePage} />
                <Route path="/skills" component={Skills} />
                <Route path="/education" component={Education} />
                <Redirect to="/" />
            </Switch>
        );
    }
}

export default Routes;