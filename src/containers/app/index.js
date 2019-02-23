import React from 'react';
<<<<<<< HEAD
import { Route } from 'react-router-dom'
=======
import { Route, Link } from 'react-router-dom'
>>>>>>> f997420a8c883d4171e158ac2017d140073b1bff
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
<<<<<<< HEAD
    
=======
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

>>>>>>> f997420a8c883d4171e158ac2017d140073b1bff
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
