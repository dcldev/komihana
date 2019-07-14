import React from 'react';
import './App.css';
import Loadinganimation from './components/loadinganimation';
import Landing from './components/landing';

function App() {
  return (
  <div className="grid-container">
    
    <Landing/>
    
    <Loadinganimation/>
    
  </div>

  );
}

export default App;
