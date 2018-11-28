import React from 'react'
import { Link } from 'react-router-dom'
import { map } from 'lodash'

import { VIEWS } from '..'

//
export const Nav = () => (
  <div className="Nav">
    <ul>
      {map(VIEWS, ({ path }, name) => (
        <li>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
)
