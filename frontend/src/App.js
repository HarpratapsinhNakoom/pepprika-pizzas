import * as React from 'react';
import Carousel from './Carousel'
import Navbar from './Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="p-3 mb-2 bg-dark bg-gradient">
      <Navbar />
      <Carousel />
    </div>
  )
}

export default App;
