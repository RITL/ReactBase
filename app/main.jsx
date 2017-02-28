import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

/* 组件加载 */
import App from './components/index/App.jsx'
render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
), document.getElementById('app'))
