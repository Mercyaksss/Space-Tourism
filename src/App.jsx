import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import Destination from './components/destination/destination';
import Crew from './components/crew/crew';
import Technology from './components/technology/technology';
import data from './components/data.json';

function App() {
  const [activeLink, setActiveLink] = useState('HOME'); 

  return (
    <BrowserRouter>
      <Nav activeLink={activeLink} setActiveLink={setActiveLink} /> 
      <Routes>
        <Route path="/" element={<Home setActiveLink={setActiveLink} />} />
        <Route path="/destination" element={<Destination destinations={data.destinations} />} />
        <Route path="/crew" element={<Crew crew={data.crew} />} />
        <Route path="/technology" element={<Technology technology={data.technology} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
