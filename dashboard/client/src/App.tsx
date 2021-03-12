import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

class App extends Component<any> {
  render(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={ Home } />
                <Route path="*" component={ Error404 } />
            </Switch>
        </Router>
    );
  }
}

export default App;
