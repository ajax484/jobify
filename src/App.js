import React from 'react';
import Home from './Pages/HomePage';
import Register from './Pages/Register/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Pages/LoginPage/Login';
import GlobalContext from './Context/GlobalContext';
import Layout from './Components/Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import FindJobs from './Pages/FindJobs/FindJobs';
import NoPage from './Pages/NoPage/NoPage';
import Profile from './Pages/Profile/Profile';


const App = () => (
  <>
    <Router>
      <GlobalContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="jobs" element={<FindJobs />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </GlobalContext>
    </Router>
  </>
)

export default App;
