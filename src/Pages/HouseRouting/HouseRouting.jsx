import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./HouseRouting.css";
import "../../Components/ProfileCard/ProfileCard"
import apartment from "../../assets/apartment.svg"
import Map from "../../assets/Map.svg"
import ParentFooter from "../../Components/Footer/ParentFooter";
import ProfileCard from '../../Components/ProfileCard/ProfileCard';

const HouseRouting = () => {
    useEffect(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 10); 
        }, []);
  return (
    <div className="house-page">
<section className="house-hero">
        <div className="house-hero-Housing Details">
          <h1>Housing Details</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Housing Details
          </div>
        </div>
      </section> 
      <div className="sticky-wrapper">
        <ProfileCard/>
        
        </div>     


       
      <div className="container">
      <section className='apartment'>
        <div className="location">
            <div className="located">
                
            <h2>Apartment for sale</h2>
            <div className="location-1">
                
            <i class="fa-solid fa-location-dot"></i>
            <p> London, John Ruskin St.</p>
            </div>
            </div>

        <div className="price">
         <h2>$1.200<span>/mo</span></h2>
        </div>
        </div>
        
        <div className="img-sec">
        <img src={apartment} alt="apartment"/>
            <div className="arrow">
             <a href=""><i class="fa-solid fa-circle-chevron-left"></i></a>  
           <a href=""><i class="fa-solid fa-circle-chevron-right"></i></a> 
            </div> 
            
        </div>
        <div className="card">

        </div>
        <div className="des">

        <div className="des-1">
        <i class="fa-regular fa-user"></i>
        <p>Mohamed Sokar </p>
        </div>

        <div className="des-2">
        <i class="fa-solid fa-calendar-days"></i>
        <p>November 26, 2024</p>
        </div>
        </div>
      </section>

      <section className='info'>
      <div class="general-information">
        <h2>General Information</h2>
        <div class="info-grid">
            <div class="info-column">
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Advertise No</span>
                    <span class="info-value sp-1">0-1234</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Published Date</span>
                    <span class="info-value">26 November 2024</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Advertise Status</span>
                    <span class="info-value">Sale</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Housing Shape</span>
                    <span class="info-value">Apartment</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Room + Living Number</span>
                    <span class="info-value">3 + 1</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Gross / Net M²</span>
                    <span class="info-value">150 M² / 135 M²</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Warming Type</span>
                    <span class="info-value">Natural Gas</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Building Age</span>
                    <span class="info-value">5</span>
                </div>
            </div>
            <div class="info-column">
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Floor Location</span>
                    <span class="info-value">10</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Available for Loan</span>
                    <span class="info-value">Appropriate</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Furnished</span>
                    <span class="info-value">Not</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Dues</span>
                    <span class="info-value">1.200 $</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Swap</span>
                    <span class="info-value">Not</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Front</span>
                    <span class="info-value">Northwest</span>
                </div>
                <div class="info-item">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="info-label">Rental Income</span>
                    <span class="info-value">3.000 $</span>
                </div>
            </div>
        </div>
        </div>

      </section>

      <section class="explanation">
        <h2>Explanation</h2>
        <p>
            Aliquam eros justo, posuere lobortis viverra blandit non id diam congue posuere viverra. Aliquam eros justo, posuere lobortis viverra blandit augue mattis finibus ullamcorper. Aliquam eros justo, posuere lobortis viverra blandit non id diam congue posuere viverra mattis finibus ullamcorper. Aliquam eros justo, posuere lobortis viverra blandit non id diam congue posuere viverra mattis finibus ullamcorper. Aliquam eros justo, posuere lobortis viverra blandit augue mattis finibus ullamcorper.
        </p>
    </section>

    <div class="features-container">
        <section class="feature-section">
            <div className="ex-1">
            <h2>Interior Features</h2>
            <div class="feature-tags">
                <span class="feature-tag">ADSL</span>
                <span class="feature-tag">Alarm</span>
                <span class="feature-tag">Shower</span>
                <span class="feature-tag">Sauna</span>
                <span class="feature-tag">Panel Door</span>
                <span class="feature-tag">Balcony</span>
                <span class="feature-tag">Balcony</span>
                <span class="feature-tag">Blinds</span>
                <span class="feature-tag">Laminate</span>
                <span class="feature-tag">Steel Color</span>
                <span class="feature-tag">Ceramic Floor</span>
            </div>
            </div>
        </section>

        <section class="feature-section">
            <div className="ex">
            <h2>External Features</h2>
            <div class="feature-tags">
                <span class="feature-tag">Elevator</span>
                <span class="feature-tag">Gardened</span>
                <span class="feature-tag">Fitness</span>
                <span class="feature-tag">Security</span>
                <span class="feature-tag">Thermal Insulation</span>
                <span class="feature-tag">Decorative</span>
                <span class="feature-tag">PVC</span>
                <span class="feature-tag">Laminate</span>
                <span class="feature-tag">Market</span>
                <span class="feature-tag">Car Park</span>
                <span class="feature-tag">Basketball Field</span>
            </div>
            </div>
        </section>
    </div>



    <div className="location-img">
        <h2>Location Information</h2>
        <img src={Map} alt="map"/>

      </div>
      </div>

      
      <ParentFooter/>
      
      
    </div>

        )
}

export default HouseRouting
