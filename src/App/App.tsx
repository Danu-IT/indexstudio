import React from 'react'

import Router from '../components/Router'
import { HashRouter } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Router />
      </HashRouter>
    </div>
  )
}

export default App
