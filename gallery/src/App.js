import React from 'react';
import Gallery from './components/Gallery/Gallery';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewAlbum from './components/Gallery/Album/ViewAlbum';
import AddAlbums from './components/Gallery/Album/AddAlbums';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route path="/album/:id">
          <ViewAlbum />
        </Route>
        <Route path="/addAlbum/">
          <AddAlbums />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
