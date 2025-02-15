import { Link } from "react-router-dom";
import "./SuccessStory.css";
import ParentFooter from "../../Components/Footer/ParentFooter";

const SuccessStory = () => {
  const stories = [
    {
      id: 1,
      name: "James Davis",
      role: "Business Manager",
      content:
        "We have been operating for over 40 years providing top-notch services to our clients and build strong track record in this industry. We have been operating in for over a decade provide this",
    },
    {
      id: 2,
      name: "Eleanor Pena",
      role: "Trip Partner",
      content:
        "We have been operating for over 40 years providing top-notch services to our clients and build strong track record in this industry. We have been operating in for over a decade provide this",
    },
    {
      id: 3,
      name: "Ronald Richards",
      role: "Business Manager",
      content:
        "We have been operating for over 40 years providing top-notch services to our clients and build strong track record in this industry. We have been operating in for over a decade provide this",
    },
    {
      id: 4,
      name: "Savannah Nguyen",
      role: "Trip Partner",
      content:
        "We have been operating for over 40 years providing top-notch services to our clients and build strong track record in this industry. We have been operating in for over a decade provide this",
    },
    {
      id: 5,
      name: "Jerome Bell",
      role: "Business Manager",
      content:
        "We have been operating for over 40 years providing top-notch services to our clients and build strong track record in this industry. We have been operating in for over a decade provide this",
    },
    {
      id: 6,
      name: "Annette Black",
      role: "Trip Partner",
      content:
        "We have been operating for over 40 years providing top-notch services to our clients and build strong track record in this industry. We have been operating in for over a decade provide this",
    },
  ];

  return (
    <div className="success-page">
      {/* Hero Section */}
      <section className="success-hero">
        <div className="success-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Success Story
          </div>
          <h1>Success Story</h1>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="stories-section">
        <div className="stories-container">
          <div className="stories-grid">
            {stories.map((story) => (
              <div key={story.id} className="story-card">
                <div className="story-content">
                  <p>{story.content}</p>
                  <div className="story-author">
                    <div className="author-avatar">
                      {/* Placeholder for avatar */}
                    </div>
                    <div className="author-info">
                      <h3>{story.name}</h3>
                      <span>{story.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn next">→</button>
          </div>
        </div>
      </section>

      <ParentFooter />
    </div>
  );
};

export default SuccessStory;
