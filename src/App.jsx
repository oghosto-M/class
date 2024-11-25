import React from 'react';

// router
import { Route,Routes } from 'react-router-dom';

// components

import Body from './pages/Body';
import About from './pages/About'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  );
};

export default App;