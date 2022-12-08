import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'


class App extends Component {
    render() {
        return (
            <div>
              <Routes>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/Main" component={About}/>
                <Route path="/Camera" component={About}/>
              </Routes>
            </div>
        );
    }
}

export default App;