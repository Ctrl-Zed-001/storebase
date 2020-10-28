import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// COMPONENTS
import Dashboard from "./Admin/Dashboard"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin/dashboard"><Dashboard /></Route>
            </Switch>
        </Router>
    )
}

export default App
