import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Repo from '../components/repo/Repo'


export default props =>
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/repository' component={Repo} />
        <Redirect from="*" to='/' />
    </Switch>