import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';



import Routes from './Routes'

import Nav from '../components/template/Nav'

import Footer from '../components/template/Footer'

const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

export default props =>

    <Router history={history} basename={process.env.PUBLIC_URL}>
        <div className="app">
            <Nav />
            <Routes />
            <Footer />
        </div>

    </Router>
