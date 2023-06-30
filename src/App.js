import React from 'react';
import Home from './components/Pages/Home';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';


const App = () => {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
</Router>
      
    
  )
}

export default App