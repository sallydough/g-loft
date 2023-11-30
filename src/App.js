// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Entertainment from './components/Entertainment/Entertainment';
import Calendar from './components/Calendar/Calendar';
import Contacts from './components/Contacts/Contacts';
import Settings from './components/Settings/Settings';
import Controls from './components/iot/Controls/Controls';

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

      </Routes>
    </Router>
    </>
  );
};

export default App;
