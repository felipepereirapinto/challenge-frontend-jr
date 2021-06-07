import React from 'react';

import GlobalStyle from './styles/global'
import Home from './Home';
import Characters from './Characters';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      {/* <Home/> */}
      <Characters/>
      
    </div>
  );
}

export default App;
