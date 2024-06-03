import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Layout from './components/Layout';
import ContentSpace from './components/ContentSpace';
import EmptySpace from './components/EmptySpace';
import SocialAuth from './authentication/SocialAuth';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/'>
          <Route index element={<Login />} />
          <Route path='google' element={SocialAuth} />
          </Route>
          <Route path='home'>
            <Route element={<Layout/>}>
                <Route element={<Home/>}>
                  <Route index element={<EmptySpace/>}/>
                  <Route path="chat/:chatName" element={<ContentSpace />} />
                </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
