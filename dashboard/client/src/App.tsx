import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";

class App extends Component<any> {
  render(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </Router>
    );
  }
}

export default App;
