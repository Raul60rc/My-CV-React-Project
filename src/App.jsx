import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { CV } from './cv';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Abilities from './components/Abilities';
import { useState } from 'react';

const {hero} = CV

// Use the <Home/> style to show up more components on front the page 
// Use capital letters! 
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <Hero hero={hero}/>
      <AboutMe AboutMe={hero.aboutMe}/>
      <Education Education={CV.education}/>
      <Experience Experience={CV.experience}/>
      <Languages Languages={CV.languages}/>
      <Abilities Abilities={CV.abilities}/>

      

    </div>
  )}

export default App