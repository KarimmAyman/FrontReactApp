import "./Details.css"
import ParentFooter from "../../Components/Footer/ParentFooter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";





const Details = () => {
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
              <h1>Opportunities details </h1>
              <div className="breadcrumb">
    
                <Link to="/">Home</Link> / Activities & Opportunities / Opportunities / Opportunities details 
    
              </div>
    
            </div>
          </section>

    <div className="job-posting">
      <div className="job-card">
        <div className="logo-container">
          <div className="instagram-logo">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>
        </div>

        <div className="job-details">
          <div className="job-title-container">
            <h2 className="job-title">Senior UX Designer</h2>
            <div className="job-tags">
              <span className="tag featured">Featured</span>
              <span className="tag full-time">Full Time</span>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
              <a href="https://instagram.com" className="link">
                https://instagram.com
              </a>
            </div>

            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(406) 555-0120</span>
            </div>

            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:career@instagram.com" className="link">
                career@instagram.com
              </a>
            </div>
          </div>
        </div>

        <div className="apply-section">
          <button className="apply-button" onClick={() => navigate("/Post")}>
            Apply Now
            <svg className="arrow-icon" viewBox="0 0 24 24" width="16" height="16">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <p className="expiry">
            Job expire in <span className="expiry-date">June 30, 2021</span>
          </p>
        </div>
      </div>
      

      <div className="look">

      
      <div className="peak">

      

      <div className="job-section">
        <h3 className="section-title">Job Description</h3>
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

      <div className="job-section">
        <h3 className="section-title">Responsibilities</h3>
        <div className="section-content">
          <ul className="responsibilities-list">
            <li>Quisque semper gravida est et consectetur.</li>
            <li>Curabitur blandit lorem velit, vitae pretium leo placerat eget.</li>
            <li>Morbi mattis in ipsum ac tempus.</li>
            <li>Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.</li>
            <li>vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.</li>
            <li>lobortis vel lectus. Nulla at risus ut diam.</li>
            <li>commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.</li>
            <li>odio metus posuere lorem, id condimentum erat velit nec neque.</li>
            <li>dui sodales ut. Curabitur tempus augue.</li>
          </ul>
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

    <div className="poom">
    <div class="stark-card">
            <h2 class="thor-title">Job Overview</h2>
            
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
                    <div class="widow-label">SALARY:</div>
                    <div class="fury-value">$50k-80k/month</div>
                </div>
                
                {/* <!-- Education --> */}
                <div class="hulk-item">
                    <div class="hawkeye-icon "><i class="fa-solid fa-briefcase"></i></div>
                    <div class="widow-label">EDUCATION:</div>
                    <div class="fury-value">Graduation</div>
                </div>
                
                {/* <!-- Job Type --> */}
                <div class="hulk-item">
                    <div class="hawkeye-icon "><i class="fa-solid fa-briefcase"></i></div>
                    <div class="widow-label">JOB TYPE:</div>
                    <div class="fury-value">Full Time</div>
                </div>
                
                {/* <!-- Experience --> */}
                <div class="hulk-item">
                    <div class="hawkeye-icon "><i class="fa-solid fa-briefcase"></i></div>
                    <div class="widow-label">EXPERIENCE:</div>
                    <div class="fury-value">10-15 Years</div>
                </div>
            </div>
        </div>
     
    </div>
     </div>
</div>
    <ParentFooter/>
    </>
  )
}

export default Details

