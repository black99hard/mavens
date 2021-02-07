import React from 'react';
import ReactDOM, { render } from 'react-dom';

import  Header  from './components/Header.js';
import  Content  from './components/Content.js';
import  About  from './components/About.js';
import  Contact  from './components/Contact.js';
import  Footer  from './components/Footer.js';



import './App.css';

function App() {
  
  return (
    <div  >
        <Header />
        <Content />
        <About />
        <Contact />
        <Footer />
     
    </div>
    
);
}

export default App;
