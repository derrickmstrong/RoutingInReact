import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';
import FilmsItem from './components/FilmsItem';
import PeopleItem from './components/PeopleItem';

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='d-flex justify-content-around my-3'>
          <Link to='/'>
            <button className='btn btn-primary'>Go Home</button>
          </Link>
          <Link to='/films'>
            <button className='btn btn-primary'>View Films</button>
          </Link>
          <Link to='/people'>
            <button className='btn btn-primary'>View People</button>
          </Link>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/films' component={Films} />
          <Route exact path='/films/:id' component={FilmsItem} />
          <Route exact path='/people' component={People} />
          <Route exact path='/people/:id' component={PeopleItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
