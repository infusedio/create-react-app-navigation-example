import React from 'react'

import { Nav } from '../nav/Nav'
import { Top } from './Top'
import { Middle } from './Middle'

//
export const Viewport = ({ children }) => (
  <div className="Viewport">
    <Top>
      <Nav />
    </Top>
    <Middle>{children}</Middle>
  </div>
)
