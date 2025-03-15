import React from 'react'
import "./Card.css"
import UP from "../../assets/UP.svg"
import { useNavigate } from "react-router-dom";
import Details from '../../Pages/Details/Details';



const Card = () => {
     const navigate = useNavigate();
  return (
  <>
    <div className="singlell">
                        <div className="cardll-info">
    
                        <div className="cardll-img">
                            <img src={UP} alt="UP" />
                        </div>
    
                        <div className="cardll-des">
                            <div className="cdll-1">
                            <h3>Senior UX Designer</h3>
                            <p>Contract Base</p>
                            </div>
                            <div className="cdll-2">
                                <p><i class="fa-solid fa-location-dot"></i>Australia</p>
                                <p><i class="fa-solid fa-dollar"></i>$30K-$35K</p>
                                <p><i class="fa-solid fa-calendar"></i>4 Days Remaining</p>
                            </div>
                        </div>
    
                        </div>
                        <div className="cardll-button">
                            <button onClick={() => navigate("/Details")}>Apply Now <i class="fa-solid fa-arrow-right"></i></button>
    
                        </div>
                        
                    </div>

  </>
  )
}

export default Card