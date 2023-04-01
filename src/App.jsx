import React from 'react';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Redirect to="/" />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
