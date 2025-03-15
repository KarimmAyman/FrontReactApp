import React from 'react'
import "./Dess.css"
import UP from "../../assets/UP.svg"
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ParentFooter from "../../Components/Footer/ParentFooter";


const Dess = () => {
  useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 20); 
    }, []);
  const navigate = useNavigate();
  return (
    <>
    <section className="house-hero">
        <div className="house-hero Opportunities">
          <h1>Activities</h1>
          <div className="breadcrumb">

            <Link to="/">Home</Link> / Activities & Opportunities / Activities

          </div>

        </div>
      </section>
      <div className="container">
        <div className="bla">
          <div className="icony">
            <img src={logo} alt="logo" />

          </div>
          <div className="iconyy">
          <h3>IEEE</h3>
          <p>Kafrelsheikh University</p>

          </div>
        </div>

     <div className=" lame">

      <div className="singlell">
                            <div className="cardll-info">
        
                            <div className="cardll-img">
                                <img src={UP} alt="UP" />
                            </div>
        
                            <div className="cardll-des">
                                <div className="cdll-1">
                                <h3>Senior UX Designer</h3>
                                <p>Live</p>
                                </div>
                                <div className="cdll-2">
                                    <p><i className="fa-solid fa-location-dot"></i>Australia</p>
                                    <p><i className="fa-solid fa-dollar"></i>$30K-$35K</p>
                                    <p><i className="fa-solid fa-calendar"></i>4 Days Remaining</p>
                                </div>
                            </div>
        
                            </div>
                            <div className="cardll-button">
                                <button onClick={() => navigate("/Last")}>Apply Now <i className="fa-solid fa-arrow-right"></i></button>
        
                            </div>
                            
                        </div>
     <div className="singlell">
                            <div className="cardll-info">
        
                            <div className="cardll-img">
                                <img src={UP} alt="UP" />
                            </div>
        
                            <div className="cardll-des">
                                <div className="cdll-1">
                                <h3>Senior UX Designer</h3>
                                <p>Live</p>
                                </div>
                                <div className="cdll-2">
                                    <p><i className="fa-solid fa-location-dot"></i>Australia</p>
                                    <p><i className="fa-solid fa-dollar"></i>$30K-$35K</p>
                                    <p><i className="fa-solid fa-calendar"></i>4 Days Remaining</p>
                                </div>
                            </div>
        
                            </div>
                            <div className="cardll-button">
                                <button onClick={() => navigate("/Last")}>Apply Now <i className="fa-solid fa-arrow-right"></i></button>
        
                            </div>
                            
                        </div>
     <div className="singlell">
                            <div className="cardll-info">
        
                            <div className="cardll-img">
                                <img src={UP} alt="UP" />
                            </div>
        
                            <div className="cardll-des">
                                <div className="cdll-1">
                                <h3>Senior UX Designer</h3>
                                <p>Live</p>
                                </div>
                                <div className="cdll-2">
                                    <p><i className="fa-solid fa-location-dot"></i>Australia</p>
                                    <p><i className="fa-solid fa-dollar"></i>$30K-$35K</p>
                                    <p><i className="fa-solid fa-calendar"></i>4 Days Remaining</p>
                                </div>
                            </div>
        
                            </div>
                            <div className="cardll-button">
                                <button onClick={() => navigate("/Last")}>Apply Now <i className="fa-solid fa-arrow-right"></i></button>
        
                            </div>
                            
                        </div>
     <div className="singlell">
                            <div className="cardll-info">
        
                            <div className="cardll-img">
                                <img src={UP} alt="UP" />
                            </div>
        
                            <div className="cardll-des">
                                <div className="cdll-1">
                                <h3>Senior UX Designer</h3>
                                <p>Live</p>
                                </div>
                                <div className="cdll-2">
                                    <p><i className="fa-solid fa-location-dot"></i>Australia</p>
                                    <p><i className="fa-solid fa-dollar"></i>$30K-$35K</p>
                                    <p><i className="fa-solid fa-calendar"></i>4 Days Remaining</p>
                                </div>
                            </div>
        
                            </div>
                            <div className="cardll-button">
                                <button onClick={() => navigate("/Last")}>Apply Now <i className="fa-solid fa-arrow-right"></i></button>
        
                            </div>
                            
                        </div>
     <div className="singlell">
                            <div className="cardll-info">
        
                            <div className="cardll-img">
                                <img src={UP} alt="UP" />
                            </div>
        
                            <div className="cardll-des">
                                <div className="cdll-1">
                                <h3>Senior UX Designer</h3>
                                <p>Live</p>
                                </div>
                                <div className="cdll-2">
                                    <p><i className="fa-solid fa-location-dot"></i>Australia</p>
                                    <p><i className="fa-solid fa-dollar"></i>$30K-$35K</p>
                                    <p><i className="fa-solid fa-calendar"></i>4 Days Remaining</p>
                                </div>
                            </div>
        
                            </div>
                            <div className="cardll-button">
                                <button onClick={() => navigate("/Last")}>Apply Now <i className="fa-solid fa-arrow-right"></i></button>
        
                            </div>
                            
                        </div>
     
     </div>
     </div>
     <ParentFooter/>
     
    </>
  )
}

export default Dess