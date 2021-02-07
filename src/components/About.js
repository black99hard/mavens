import React, { useEffect }  from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



function About() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
 return (
 <div >

     <div  className="text-dark  bg-white my-4 py-5" >
        <div className="container " >

            <div className="row h-100 align-items-center " >
                    <div className="col-lg-6 d-none d-lg-block" data-aos="fade-right">
                        <img src={"img/code.svg"} alt="" class="img-fluid py-5"/>
                    </div>
                    <div className="col-lg-6  mx-auto" data-aos="fade-down">
                        <h1 className="display-4">About</h1>
                        
                            <p className="mb-0 " >
                            <h3>We Offer a Wide
                            Variety of  Services.</h3>
                            We have been offering  services including Website designing and development,
                            Software development, mobile app development and digital marketing.
                        </p>
                    </div>
            </div>

       </div>
    </div>


        <div class="bg-white py-5" >
                <div className="container ">
                        <div className="row align-items-center mb-5">
                            <div class="col-lg-6 order-2 order-lg-1" data-aos="zoom-in">
                                    <h2 className="font-weight-light">WEB APPLICATIONS</h2>
                                    <p className="font-italic text-muted mb-4">Need a website? CodeMavens has been creating web applications for over 000 years.
                                     Our clients include large and small companies, and our goal is to satisfy every client.
                                    </p>
                                    <a href="#" className="btn btn-outline-success px-5 rounded-pill shadow-sm">Learn More</a>
                             </div>
                                <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2" data-aos="fade-down-right">
                                    <img src={"img/web.svg"} alt="" className="img-fluid mb-4 mb-lg-0 py-5"/>
                                </div>
                    </div>


                    <div className="row align-items-center my-3 mb-5">
                    <div className="col-lg-5 px-5 mx-auto"  data-aos="zoom-in-right" >
                    <img src={"img/secur.svg"} alt="" className="img-fluid mb-4 mb-lg-0"/>
                </div>
                    <div className="col-lg-6 order-2 order-lg-1" >
                            <h2 className="font-weight-light">MOBILE APPS</h2>
                            <p className="font-italic text-muted mb-4" data-aos="zoom-out-down" style={{width:"90%"}}>Want to get on the mobile bandwagon?
                             CodeMavens can help create your next market-dominating app!
                            </p>
                            <a href="#" className="btn btn-outline-success px-5 rounded-pill shadow-sm">Learn More</a>
                     </div>
                        
            </div>


        




                    <div className="row align-items-center my-5">
                            
                         <div className="col-lg-6" >
                                <h2 className="font-weight-light" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">Why Mavens</h2>
                                <p className="font-italic text-muted " data-aos="zoom-in-down">     In the long run, it is vital to
                                    keep up with the reliable Code Mavens services. There are a bunch of companies 
                                    providing these services, but you must approach the right one for you, which 
                                    can understand or observe your outright products along with the marketing goals.
                                    You can possibly come 
                                    across numerous benefits of Code Mavens by acquiring our potent services.
                                </p>
                              <a href="#" className="btn btn-outline-success px-5 rounded-pill shadow-sm">Learn More</a>
                         </div> 
                         <div className="col-lg-5 px-5 mx-auto"   >
                                <img src={"img/sec.svg"} alt="" className="img-fluid mb-4 mb-lg-0"/>
                            </div>    
                    </div>
             </div>
       </div>



   



        
</div>

 );

}

export default About;
