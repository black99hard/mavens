import React, { useEffect }  from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
 return (
  
    <div className="container">
  
    <div className="row align-items-center  mb-4  ">
        <div className="col-lg-5 px-3 mx-auto ml-5"  data-aos="fade-up-right" >
        <p>
        What Are You Waiting For? <b>Contact us now! </b>
        
        </p>
            <img src={"img/contact.svg"} alt="" className="img-fluid mb-4 mb-lg-0"/>
        </div>

        <div className="col-lg-5 order-2 order-lg-1" data-aos="zoom-in-up">
        <form>
     
        <div className="form-outline mb-4">
          <input type="text" id="form4Example1" className="form-control" />
          <label className="form-label" htmlFor="form4Example1">Name</label>
        </div>
      
      
        <div className="form-outline mb-4">
          <input type="email" id="form4Example2" class="form-control" />
          <label className="form-label" htmlFor="form4Example2">Email address</label>
        </div>
      
       
        <div className="form-outline mb-4">
          <textarea className="form-control" id="form4Example3" rows="4"></textarea>
          <label className="form-label" htmlFor="form4Example3">Message</label>
        </div>
      
       
      
       
        <a href="#" className="btn btn-outline-success px-5 rounded-pill shadow-sm">Send</a>
      </form>
        </div>
        
  </div>
  
    
    </div>




 );
}

export default Contact;
