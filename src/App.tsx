import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteComponent from 'Routes'
import HttpInterceptors from 'utils/http/interceptors'

HttpInterceptors()

function App() {
  return (
    <Router>
      <RouteComponent />
    </Router>
  )
}

export default App
