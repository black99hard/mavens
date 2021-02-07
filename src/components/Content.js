import React from 'react';
import '../App.css';

function Content() {
  
 return (
  <div>
  
        <div  className="text-black" id="mainse" >
        <div className="container py-5 mb-3" >
            <div className="row h-100 align-items-center ">
                
                    <div className="col-lg-6  py-5" >
                        <h1 className="display-4">Mavens</h1>
                            <p className="lead mb-0 my-4 ">
                            CREATING CUSTOM APPLICATIONS SINCE 2019.
                            WE STRIVE TO KEEP OUR CUSTOMERS HAPPY AND DELIVER QUALITY APPLICATIONS ON TIME AND ON BUDGET.
                        </p>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block my-5">
                    <img src={"img/mavens.svg"} alt="" class="img-fluid py-5"/>
                </div>
            </div>
        </div>
        </div>

  
  </div>

 );
}

export default Content;
