import React from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import UserPage from "./UserPage";
import ProductPage from './ProductPage';
import Sidebar from './Sidebar';

class App extends React.Component {

  render() {
    return(
        <Switch>

          <Route path='/'>
            <section>
              <Sidebar className="Sidebar" />
              <UserPage className="u-grid-area-content" UserButtonClicked={this.UserButtonClicked} />
              <ProductPage className="u-grid-area-content"/>
            </section>
          </Route>

          <Route path='/products'>
            <section>
              <Sidebar className="Sidebar" />
              <ProductPage className="u-grid-area-content"/>
            </section>
          </Route>
          
          <Route path='/users'>
            <section>
              <Sidebar className="Sidebar" />
              <UserPage className="u-grid-area-content" UserButtonClicked={this.UserButtonClicked} />
            </section>
          </Route>

        </Switch>

    )
};
}
export default App;
