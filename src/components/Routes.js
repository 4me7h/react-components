import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
}   from 'react-router-dom';

import Inicio from './components/Inicio';
import Bla from './components/Bla';
import Parametros from './components/Parametros';
import User from './components/User';

const App = () => {
    return(
        <Router>
            <div>
                <div>
                    <Link to="/">Inicio</Link>
                    <Link to="/bla">Bla bla bla</Link>
                    <NavLink to="/users" activeClassName="active">Users</NavLink>
                </div>
                <br />
                <Switch>
                    <Route path="/" exact>
                        <Inicio />
                    </Route>
                    <Route path="/bla">
                        <Bla />
                    </Route>
                    <Route path="/users/:id">
                        <User />
                    </Route>
                    <Route path="/users">
                        <Parametros />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;