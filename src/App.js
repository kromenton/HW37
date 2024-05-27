import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
