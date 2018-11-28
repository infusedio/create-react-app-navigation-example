import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { map } from 'lodash'

import { Viewport } from './ui/Viewport'
import { View } from './ui/View'

//
export const VIEWS = {
  Home: {
    path: '/',
    render: () => (
      <View>
        <h1>Home</h1>
        <p>Welcome</p>
      </View>
    ),
  },

  About: {
    path: '/about',
    render: () => (
      <View>
        <h1>About</h1>
        <p>We are humans</p>
      </View>
    ),
  },
}

//
const App = () => (
  <div className="App">
    <Router>
      <Viewport>
        <Switch>
          {map(VIEWS, view => (
            <Route exact {...view} />
          ))}

          <Redirect to="/" />
        </Switch>
      </Viewport>
    </Router>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
