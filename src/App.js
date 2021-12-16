import React from 'react';
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Blog from './Pages/Blog.js'
import Contact from './Pages/Contact.js'
import Course from './Pages/Course.js'
import './App.css';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/course' element={<Course/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
