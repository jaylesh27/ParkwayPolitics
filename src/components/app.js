import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import AllPodcasts from './AllPodcasts';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/about-us" component={AboutUs} />
            <Route path="/episodes" component={AllPodcasts} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}