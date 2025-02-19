import { Link } from "react-router-dom";
import { useState } from "react";
import ParentFooter from "../../Components/Footer/ParentFooter";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      question: "What is the purpose of a visa?",
      answer:
        "Lorem ipsum is simply dummy text the printing and typeset Lorem ipsum has been the industry's standard dummy text ever",
    },
    {
      question: "How long does it take to process a visa application?",
      answer:
        "Lorem ipsum is simply dummy text the printing and typeset Lorem ipsum has been the industry's standard dummy text ever",
    },
    {
      question: "Is there an age limit for applying for a visa?",
      answer:
        "Lorem ipsum is simply dummy text the printing and typeset Lorem ipsum has been the industry's standard dummy text ever",
    },
    {
      question: "Can I apply for a visa if I have a criminal record?",
      answer:
        "Lorem ipsum is simply dummy text the printing and typeset Lorem ipsum has been the industry's standard dummy text ever",
    },
    {
      question: "What happens if my visa application is denied?",
      answer:
        "Lorem ipsum is simply dummy text the printing and typeset Lorem ipsum has been the industry's standard dummy text ever",
    },
    {
      question: "How long does it take for you to complete a project?",
      answer:
        "Lorem ipsum is simply dummy text the printing and typeset Lorem ipsum has been the industry's standard dummy text ever",
    },
  ];

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="faq-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / FAQ
          </div>
          <h1>FAQ</h1>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  <span className="icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ParentFooter />
    </div>
  );
};

export default FAQ;
