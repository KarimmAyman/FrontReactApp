import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";
import { createJob } from "../../../ApiServices/JobService";

const Post = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

   const expiryDate = `${formData.expiryYear}-${formData.expiryMonth.padStart(
     2,
     "0"
   )}-${formData.expiryDay.padStart(2, "0")}`;

   const jobPayload = {
     title: formData.jobTitle,
     description: formData.description,
     responsibilities: formData.requirements,
     minSalary: 0,
     maxSalary: parseInt(formData.salary.replace(/[^0-9]/g, ""), 10),
     location: formData.location,
     experience: formData.experience,
     jobType: formData.workType,
     contractType: formData.educationType,
     expiryDate: expiryDate,
     companyName: "N/A", // You can allow company info if needed
     companyWebsite: "",
     companyPhone: "",
     companyEmail: "",
     category: "General", // Optional default
     salaryPeriod: "Monthly", // Optional default
   };

   try {
     const result = await createJob(jobPayload);
     console.log("✅ Job created successfully:", result);
     navigate("/Dess");
   } catch (err) {
     console.error("❌ Failed to create job:", err);
     alert("Failed to create job. Please check your input or token.");
   }
 };

  return (
    <div className="post-form-container">
      <div className="post-progress-indicator">
        <div className="post-step-container">
          <div
            className={`post-step-circle ${currentStep === 1 ? "active" : ""}`}
          >
            <span>1</span>
          </div>
          <div className="post-step-line"></div>
          <div
            className={`post-step-circle ${currentStep === 2 ? "active" : ""}`}
          >
            <span>2</span>
          </div>
        </div>
        <div className="post-step-labels">
          <div
            className={`post-step-label ${currentStep === 1 ? "active" : ""}`}
          >
            General Information
          </div>
          <div
            className={`post-step-label ${currentStep === 2 ? "active" : ""}`}
          >
            Job Overview
          </div>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="post-form-step">
          <div className="post-step-header">
            <div className="post-step-number">1</div>
            <h2>General Information</h2>
          </div>
          <p className="post-required-note">
            *All fields required unless noted.
          </p>

          <div className="post-form-field">
            <label htmlFor="jobTitle">* Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder="Enter job title"
            />
          </div>

          <div className="post-form-field">
            <label htmlFor="description">* Job Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              placeholder="Describe the job position, responsibilities, and benefits"
            ></textarea>
          </div>

          <div className="post-form-field">
            <label htmlFor="requirements">* Job Requirements</label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              rows="4"
              placeholder="List skills, qualifications, and experience needed"
            ></textarea>
          </div>

          <div className="post-form-actions">
            <button className="post-next-button" onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="post-form-step">
          <div className="post-step-header">
            <div className="post-step-number">1</div>
            <h2>Category</h2>
          </div>

          <div className="post-step-header">
            <div className="post-step-number">2</div>
            <h2>Job Overview</h2>
          </div>

          <p className="post-required-note">
            * All fields required unless noted.
          </p>

          <div className="post-form-field">
            <label htmlFor="salary">* Salary</label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              placeholder="Enter salary range (e.g., $30K-$40K)"
            />
          </div>

          <div className="post-form-field">
            <label htmlFor="location">* Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter job location"
            />
          </div>

          <div className="post-form-field">
            <label>* Experience</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="post-select-field"
            >
              <option value="">Select experience level</option>
              <option value="entry">Entry Level</option>
              <option value="intermediate">Intermediate</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div className="post-form-field">
            <label>* Job type</label>
            <div className="post-radio-group">
              <label className="post-radio-label">
                <input
                  type="radio"
                  name="workType"
                  value="Part time"
                  checked={formData.workType === "Part time"}
                  onChange={handleInputChange}
                />
                Part time
              </label>
              <label className="post-radio-label">
                <input
                  type="radio"
                  name="workType"
                  value="Full time"
                  checked={formData.workType === "Full time"}
                  onChange={handleInputChange}
                />
                Full time
              </label>
              <label className="post-radio-label">
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

          <div className="post-form-field">
            <label>* Education Level</label>
            <div className="post-radio-group">
              <label className="post-radio-label">
                <input
                  type="radio"
                  name="educationType"
                  value="Undergraduate"
                  checked={formData.educationType === "Undergraduate"}
                  onChange={handleInputChange}
                />
                Undergraduate
              </label>
              <label className="post-radio-label">
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

          <div className="post-form-field">
            <label>* Job expires in:</label>
            <div className="post-date-group">
              <select
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleInputChange}
                className="post-date-select"
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                name="expiryDay"
                value={formData.expiryDay}
                onChange={handleInputChange}
                className="post-date-select"
              >
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
                className="post-date-select"
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

          <div className="post-form-actions">
            <button className="post-back-button" onClick={prevStep}>
              Back
            </button>
            <button className="post-submit-button" onClick={handleSubmit}>
              Create Job
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
