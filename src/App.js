import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

class App extends React.Component {

    // Verwijderen van de makeApiCall naar SearchBar
    // State wordt bijgehouden in de 
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <main>
                          <h1>Dit is een lege pagina.</h1>
                        </main>
                    </Route>
                </Switch>
            </Router>
        );
    };
}

export default App;
