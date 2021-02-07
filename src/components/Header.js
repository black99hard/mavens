import React from 'react';
import '../App.css';


function Header() {

  return (
	
 
 <header>
		
	 <div >
	 
  	<nav className="navbar navbar-expand-lg  ">
    <h3>Code Mavens</h3>
		
		   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">			
          <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-filter-left" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
       </button>
       
	   <div className="collapse  navbar-collapse " id="navbarNavAltMarkup">
		

		<ul className="navbar-nav ">
      <li className="nav-item "><a className="nav-link" href="#one">Home</a></li>
      <li className="nav-item "><a className="nav-link" href="#two">About</a></li>
      <li className="nav-item "><a className="nav-link" href="#three">Services</a></li>
      <li className="nav-item "><a className="nav-link" href="#four">Reviews</a></li>
      <li className="nav-item "><a className="nav-link" href="#bottom">Contact</a></li>
   </ul>
		</div>
		

	
   </nav>
   
   
 






	
	</div>	   
   </header>

   
    
);

}

export default Header;
