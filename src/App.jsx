import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatchHistory from './components/matches/MatchHistory';
import Navbar from './components/Navbar';
import CreateMatch from './components/matches/CreateMatch';
import RequireAuth from './components/authentication/RequireAuth';
import AuthLanding from './components/authentication/AuthLanding';
import Home from './components/Home';
import Teams from './components/teams/Teams';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <>
      <Router>
        <div className='bg-gray-400 h-auto overflow-hidden'>
          <div className='flex justify-center'>
            <Navbar />
          </div>
          <div className='flex items-center justify-center flex-col'>
            <ScrollToTop />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/matchhistory' element={<RequireAuth><MatchHistory /></RequireAuth>}></Route>
                <Route path='/creatematch' element={<RequireAuth><CreateMatch /></RequireAuth>}></Route>
                <Route path='/teams' element={<RequireAuth><Teams /></RequireAuth>}></Route>
                <Route path='/login' element={<AuthLanding />}></Route>
              </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
