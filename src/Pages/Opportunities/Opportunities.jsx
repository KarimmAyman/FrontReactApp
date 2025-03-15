import React from 'react'
import { Link } from "react-router-dom";
import "./Opportunities.css"
import Card from "../../Components/Card/Card";
import ParentFooter from "../../Components/Footer/ParentFooter";
import "bootstrap/js/dist/dropdown"; 
import { useEffect } from "react";







const Opportunities = () => {
  useEffect(() => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 20); 
}, []);

  
  return (
    <>
<section className="house-hero">
        <div className="house-hero Opportunities">
          <h1>Opportunities</h1>
          <div className="breadcrumb">

            <Link to="/">Home</Link> / Activities & Opportunities / Opportunities

          </div>

        </div>
      </section>
      <div className="container">

        <div className="tool-all">


<div className="tool-bar">

      <div className="tool">
      <i class="fas fa-search"></i> <input type="text" placeholder="Job tittle, Keyword..." />
      </div>


      <div className="tool">
      <i class="fa-solid fa-location-dot"></i> <input type="text" placeholder="Location" />
      </div>


      <div className="tool">
      <i class="fa-solid fa-layer-group"></i> <input type="text" placeholder="Select Category" />
      </div>

      <div class="dropdown">
      <i class="fa-solid fa-caret-down"></i><button class="btn">Advance Filter</button>
        <div class="dropdown-content">
            <a href="#">Jop 1</a>
            <a href="#">Jop 2</a>
            <a href="#">Jop 3</a>
        </div>
    </div>


      <div className="tool-button">
        <button>Find Job</button>
      
      </div>
      
      </div>


        </div>
       
    

      
      



      <div className="m-cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
      </div>

    </div>
      <ParentFooter/>
      
      </>
  )
}

export default Opportunities