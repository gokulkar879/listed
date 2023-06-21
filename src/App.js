import React from 'react';
import './App.css';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUserContext } from './UserContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const {user} = useUserContext();
  return (
     <Router>
       <Routes>
          <Route exact path="/" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>}/>
          <Route path="/signin" element={<AuthPage />}/>
       </Routes>
     </Router>
  );
}

export default App;
