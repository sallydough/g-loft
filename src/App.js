// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Entertainment from './components/Entertainment/Entertainment';
import Calendar from './components/Calendar/Calendar';
import Contacts from './components/Contacts/Contacts';
import Settings from './components/Settings/Settings';
import Controls from './components/iot/Controls/Controls';
import Lights from './components/iot/Lights/Lights';
import Temperature from './components/iot/Temperature/Temperature';
import Lock from './components/iot/Lock/Lock';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
 
    <Router>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/controls" element={<Controls />} />
        <Route path="/lights" element={<Lights />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/lock" element={<Lock />} />
        <Route path="/home" element={<Home />} />
        

      </Routes>
    </Router>
    </>
  );
};

export default App;
