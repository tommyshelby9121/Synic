import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Account from "./pages/Account";
import Error404 from "./pages/Error404";

class App extends Component<any> {
  render(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={ Home } />
                <Route path="/account" exact={true} component={ Account } />
                <Route path="*" component={ Error404 } />
            </Switch>
        </Router>
    );
  }
}

export default App;
