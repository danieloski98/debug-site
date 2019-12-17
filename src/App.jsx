import React from 'react';
import Navbar from './components/navbar/index.jsx';
import Banner from './components/banner/index.jsx';
import Services from './components/services/index.jsx';
import Portfolio from './components/portfolio/index.jsx';
import Partners from './components/partners/index.jsx';

function App() {
  return (
    <div className="App overflow-x-hidden bg-white">
      <Navbar />
      <Banner />
      <Services />
      <Portfolio />
      <Partners />
    </div>
  );
}

export default App;
