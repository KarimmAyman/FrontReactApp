"use client"

import { useState } from "react"
import "./ProfileCard.css"
import Expert from "../../assets/Expert.svg"

const ProfileCard = () => {
  const [copied, setCopied] = useState(false)
  const phoneNumber = "+20 010 1337 9651"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-image-container">
          {/* Leave this empty for user to add their own image */}
          <div className="profile-image-placeholder">
            <img src={Expert} alt="Expert" />
          </div>
        </div>
        <div className="profile-info">
          <h1 className="profile-name">Mohamed Sokar</h1>
          <p className="profile-title">Real Estate Specialist</p>
        </div>
      </div>

      <div className="contact-info">
        <div className="phone-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
        <span className="phone-number">{phoneNumber}</span>
      </div>

      <button className="copy-button" onClick={copyToClipboard}>
        {copied ? "COPIED!" : "COPY PHONE"}
      </button>
    </div>
  )
}

export default ProfileCard

