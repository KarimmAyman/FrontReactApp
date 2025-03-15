import React from 'react'
import logo from "../../assets/logo.svg"
import "./Last.css"
import { Link } from "react-router-dom";
import ParentFooter from "../../Components/Footer/ParentFooter";
import { useEffect } from "react";




const Last = () => {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 20); 
    }, []);

  return (
    <>

    <section className="house-hero">
            <div className="house-hero Opportunities">
              <h1 >Activities details  </h1>
              <div className="breadcrumb">
    
                <Link to="/">Home</Link> / Activities & Opportunities / Activities / Activities details  
    
              </div>
    
            </div>
          </section>

    <div className='container mahmoud'>
        <div className="mostafa">
        <div className="job-card">
        <div className="logo-container">
          <div className="mall">
          <img src={logo} alt="logo" />
            
          </div>
        </div>

        <div className="job-details">
          <div className="job-title-container">
            <h2 className="job-title">IEEE</h2>
            
          </div>

          <div className="contact-info">
            <div className="contact-item">
              
              <i class="fa-solid fa-link"></i>  
                         
              <a href="https://instagram.com" className="link">
                https://instagram.com
              </a>
            </div>

            <div className="contact-item">
            <i class="fa-solid fa-phone"></i>
              <span>(406) 555-0120</span>
            </div>

            <div className="contact-item">
            <i class="fa-regular fa-envelope"></i>
            
              <a href="mailto:career@instagram.com" className="link">
                career@instagram.com
              </a>
            </div>
          </div>
        </div>

        
      </div>

      <div className="job-section">
        <h3 className="section-title">Activities Description</h3>
        <div className="section-content">
          <p>
            Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et
            est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet
            arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper,
            pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales
            finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque
            blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat
            euismod at id magna. Sed ut arcu. Suspendisse sollicitudin faucibus aliquet.
          </p>
          <p>
            Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet
            nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in neque sit amet
            orci interdum tincidunt.
          </p>
        </div>
      </div>

      <div className="job-section share-section">
        <span className="share-label">Share this job:</span>
        <div className="social-buttons">
          <a href="#" className="social-button facebook">
            <svg className="social-icon" viewBox="0 0 24 24" width="16" height="16">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
          <a href="#" className="social-button twitter">
            <svg className="social-icon" viewBox="0 0 24 24" width="16" height="16">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            twitter
          </a>
          <a href="#" className="social-button pinterest">
            <svg className="social-icon" viewBox="0 0 24 24" width="16" height="16">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
            Pinterest
          </a>
        </div>
      </div>
        </div>
       <div className="badr">
       <div class="stark-card">
            
            
            <div class="avengers-grid">
                {/* <!-- Job Posted --> */}
                <div class="hulk-item">
                    <div class="hawkeye-icon "><i class="fa-regular fa-calendar"></i></div>
                    <div class="widow-label">JOB POSTED:</div>
                    <div class="fury-value">14 June, 2021</div>
                </div>
                
                {/* <!-- Job Expire --> */}
                <div class="hulk-item">
                    <div class="hawkeye-icon "><i class="fa-solid fa-stopwatch"></i></div>
                    <div class="widow-label">JOB EXPIRE IN:</div>
                    <div class="fury-value">14 July, 2021</div>
                </div>
                
                {/* <!-- Location --> */}
                <div class="hulk-item">
                    <div class="hawkeye-icon "> <i class="fa-solid fa-location-dot"></i></div>
                    <div class="widow-label">LOCATION:</div>
                    <div class="fury-value">New York, USA</div>
                </div>
                
                {/* <!-- Salary --> */}
                <div class="hulk-item">
                    <div class="hawkeye-icon "><i class="fa-solid fa-wallet"></i></div>
                    <div class="widow-label">Activities types:</div>
                    <div class="fury-value">Technology</div>
                </div>
                
               
            </div>
        </div>
       <div class="stark-card">
            <p>Follow us on:</p>
            
            <div class="avengers">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
                
                
               
            </div>
        </div>

       </div>
    </div>

    <ParentFooter/>
    
    </>
  )
}

export default Last