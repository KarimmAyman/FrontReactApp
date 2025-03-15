import React from 'react'
import "./Activities.css"
import ParentFooter from "../../Components/Footer/ParentFooter";
import Card from "../../Components/Card/Card";
import Illustration from "../../assets/Illustration.svg"
import asana from "../../assets/asana.svg"
import airTasker from "../../assets/airTasker.svg"
import splunk from "../../assets/splunk.svg"
import segment from "../../assets/segment.svg"
import hubSpot from "../../assets/hubSpot.svg"
import left from "../../assets/left.svg"
import right from "../../assets/right.svg"
import UP from "../../assets/UP.svg"
import logo from "../../assets/logo.svg"
import "bootstrap/dist/css/bootstrap-grid.min.css";  // ده بيجيب الجريد بس
import { useNavigate } from "react-router-dom";



const Activities = () => {
    const navigate = useNavigate();
  return (
    <>

    
    
    <div className="container">
        {/* first-sction */}
        <div className="F-section ">
            <div className="F-des">
             <h1>Find the Perfect Job or Activity for You!</h1>
            <p>Discover opportunities that match your interests and skills.
                Easily browse, apply, or post job listings and activities with confidence.
                Seamless connections, verified listings, and hassle-free experiences—all in one place!</p>
            </div>

            <div className="F-img">
            <img src={Illustration} alt="Illustration" />

            </div>




            
        </div>


     

        <div className="F-section-d space">
        
        <div className="cardoo">
        <i class="fa-solid fa-briefcase"></i>
        <div className="details">
            <h3>1,75,324</h3>
            <p>Active Activities & Job Listings</p>
        </div>
        </div>
        <div className="cardoo op">
        <i class="fa-solid fa-building"></i>
        <div className="details">
            <h3>97,354</h3>
            <p>Verified Providers & Companies</p>
        </div>
        </div>
        <div className="cardoo ">
        <i class="fa-solid fa-user-group"></i>
        <div className="details">
            <h3>38,47,154</h3>
            <p>Registered Users</p>
        </div>
        </div>
        
        </div>




        {/* second-section */}
        <div className="SEC-sectoin space">
            <div className="title">
                <h2> <img src={left} alt="left" /> SOME OF OUR PARTNERS <img src={right} alt="right" /></h2>
                </div>
                <div className="partners">
                <img src={segment} alt="segment" />
                <img src={splunk} alt="splunk" />
                <img src={hubSpot} alt="hubSpot" />
                <img src={asana} alt="asana" />
                <img src={airTasker} alt="airTasker" />
                
            </div>
        </div>




        {/* third section */}
        <div className="THI-section space">
            <div className="title-2">
                <h2>FEATURED JOB <img src={right} alt="right" /></h2>
                <button onClick={() => navigate("/opportunities")} className='btn btn-success'>View All <i class="fa-solid fa-arrow-right"></i> </button>
            </div>

            <div className="m-cards">
                

                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

                

            </div>


        </div>



        {/* fourth-section */}

        <div className="Fth-section">
            <div className="Fth-title">
                <h2>BEST COMMUNITIES <img src={right} alt="right" /></h2>


                <div className="Fth-buttons">
                <button><i class="fa-solid fa-arrow-left"></i></button>
                <button><i class="fa-solid fa-arrow-right"></i></button>
                </div>

            </div>


            <div className="bags ">
                

                <div className="comment">
                    <div className="co-des">
                    <div className="co-img">
                        <img src={logo} alt="logo" />

                    </div>

                    <div className="co-de">
                        <h3>IEEE</h3>
                        <p><i class="fa-solid fa-location-dot"></i>Kafrelsheikh University</p>

                    </div>
                    </div>


                    <div className="card-button">
                        <button>View Activities</button>

                   </div>
                </div>
                
                
                <div className="comment">
                    <div className="co-des">
                    <div className="co-img">
                        <img src={logo} alt="logo" />

                    </div>

                    <div className="co-de">
                        <h3>IEEE</h3>
                        <p><i class="fa-solid fa-location-dot"></i>Kafrelsheikh University</p>

                    </div>
                    </div>


                    <div className="card-button">
                        <button>View Activities</button>

                   </div>
                </div>
                
                <div className="comment">
                    <div className="co-des">
                    <div className="co-img">
                        <img src={logo} alt="logo" />

                    </div>

                    <div className="co-de">
                        <h3>IEEE</h3>
                        <p><i class="fa-solid fa-location-dot"></i>Kafrelsheikh University</p>

                    </div>
                    </div>


                    <div className="card-button">
                        <button>View Activities</button>

                   </div>
                </div>
                
                <div className="comment">
                    <div className="co-des">
                    <div className="co-img">
                        <img src={logo} alt="logo" />

                    </div>

                    <div className="co-de">
                        <h3>IEEE</h3>
                        <p><i class="fa-solid fa-location-dot"></i>Kafrelsheikh University</p>

                    </div>
                    </div>


                    <div className="card-button">
                        <button>View Activities</button>

                   </div>
                </div>

                
                



            </div>

            


            <div className="bags ">
                

                <div className="comment">
                    <div className="co-des">
                    <div className="co-img">
                        <img src={logo} alt="logo" />

                    </div>

                    <div className="co-de">
                        <h3>IEEE</h3>
                        <p><i class="fa-solid fa-location-dot"></i>Kafrelsheikh University</p>

                    </div>
                    </div>


                    <div className="card-button">
                        <button>View Activities</button>

                   </div>
                </div>
                
                
                <div className="comment">
                    <div className="co-des">
                    <div className="co-img">
                        <img src={logo} alt="logo" />

                    </div>

                    <div className="co-de">
                        <h3>IEEE</h3>
                        <p><i class="fa-solid fa-location-dot"></i>Kafrelsheikh University</p>

                    </div>
                    </div>


                    <div className="card-button">
                        <button>View Activities</button>

                   </div>
                </div>
                
                <div className="comment">
                    <div className="co-des">
                    <div className="co-img">
                        <img src={logo} alt="logo" />

                    </div>

                    <div className="co-de">
                        <h3>IEEE</h3>
                        <p><i class="fa-solid fa-location-dot"></i>Kafrelsheikh University</p>

                    </div>
                    </div>


                    <div className="card-button">
                        <button>View Activities</button>

                   </div>
                </div>
                
                <div className="comment">
                    <div className="co-des">
                    <div className="co-img">
                        <img src={logo} alt="logo" />

                    </div>

                    <div className="co-de">
                        <h3>IEEE</h3>
                        <p><i class="fa-solid fa-location-dot"></i>Kafrelsheikh University</p>

                    </div>
                    </div>


                    <div className="card-button">
                        <button>View Activities</button>

                   </div>
                </div>

                
                



            </div>

            


        </div>


        
    </div>
    <ParentFooter/>
    


    </>
  ) 
}

export default Activities