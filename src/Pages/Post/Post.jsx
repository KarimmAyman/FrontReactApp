"use client"

import { useState } from "react"
import "./Post.css"
import { useNavigate } from "react-router-dom";


const Post = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    experience: "",
    workType: "Part time",
    educationType: "Undergraduate",
    expiryMonth: "",
    expiryDay: "",
    expiryYear: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    navigate("/Dess"); // هنا نستخدمه عادي
  };

  return (
    <div className="form-container">
      <div className="progress-indicator">
        <div className="step-container">
          <div className={`step-circle ${currentStep === 1 ? "active" : ""}`}>
            <span>1</span>
          </div>
          <div className="step-line"></div>
          <div className={`step-circle ${currentStep === 2 ? "active" : ""}`}>
            <span>2</span>
          </div>
        </div>
        <div className="step-labels">
          <div className={`step-label ${currentStep === 1 ? "active" : ""}`}>General Information</div>
          <div className={`step-label ${currentStep === 2 ? "active" : ""}`}>Job Overview</div>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="form-step">
          <div className="step-header">
            <div className="step-number">1</div>
            <h2>General Information</h2>
          </div>
          <p className="required-note">*All fields required unless noted.</p>

          <div className="form-field kkk">
            <label htmlFor="jobTitle">* Job Title</label>
            <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} />
          </div>

          <div className="form-field kkk">
            <label htmlFor="description">* Job Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
            ></textarea>
          </div>

          <div className="form-field kkk">
            <label htmlFor="requirements">* Job Requirements</label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              rows="4"
            ></textarea>
          </div>

          <div className="formm-actions">
            <button className="next-button" onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="form-step">
          <div className="step-header">
            <div className="step-number">1</div>
            <h2>Category</h2>
          </div>

          <div className="step-header">
            <div className="step-number">2</div>
            <h2>Job Overview</h2>
          </div>

          <p className="required-note">* All fields required unless noted.</p>

          <div className="form-field kkk">
            <label htmlFor="salary">* Salary</label>
            <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleInputChange} />
          </div>

          <div className="form-field kkk">
            <label htmlFor="location">* Location</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} />
          </div>

          <div className="form-field kkk">
            <label>* Experience</label>
            <select name="experience" value={formData.experience} onChange={handleInputChange} className="select-field">
              <option value="">Select experience</option>
              <option value="entry">Entry Level</option>
              <option value="intermediate">Intermediate</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div className="form-field ">
            <label>*Job type</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="workType"
                  value="Part time"
                  checked={formData.workType === "Part time"}
                  onChange={handleInputChange}
                />
                Part time
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="workType"
                  value="Full time"
                  checked={formData.workType === "Full time"}
                  onChange={handleInputChange}
                />
                Full time
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="workType"
                  value="Remote"
                  checked={formData.workType === "Remote"}
                  onChange={handleInputChange}
                />
                Remote
              </label>
            </div>
          </div>

          <div className="form-field">
            <label>*Job type</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="educationType"
                  value="Undergraduate"
                  checked={formData.educationType === "Undergraduate"}
                  onChange={handleInputChange}
                />
                Undergraduate
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="educationType"
                  value="Graduate"
                  checked={formData.educationType === "Graduate"}
                  onChange={handleInputChange}
                />
                Graduate
              </label>
            </div>
          </div>

          <div className="form-field">
            <label>*Job expire in:</label>
            <div className="date-group">
              <select
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleInputChange}
                className="date-select"
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select name="expiryDay" value={formData.expiryDay} onChange={handleInputChange} className="date-select">
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleInputChange}
                className="date-select"
              >
                <option value="">Year</option>
                {Array.from({ length: 5 }, (_, i) => (
                  <option key={i} value={new Date().getFullYear() + i}>
                    {new Date().getFullYear() + i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="formm-actions">
            <button className="back-button" onClick={prevStep}>
              Back
            </button>
            <button className="submittt-button create-job" onClick={handleSubmit}>
              Create Job
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post

