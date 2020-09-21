import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
// eslint-disable-next-line import/extensions
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return <div className="App">My App</div>;
};

export default App;
