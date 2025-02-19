import { Link } from "react-router-dom";
import ParentFooter from "../../Components/Footer/ParentFooter";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jane Cooper",
      position: "Production Artist",
      image: "/path-to-image.jpg",
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      position: "Art Director",
      image: "/path-to-image.jpg",
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      position: "Art Director",
      image: "/path-to-image.jpg",
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      position: "Art Director",
      image: "/path-to-image.jpg",
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      position: "Art Director",
      image: "/path-to-image.jpg",
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      position: "Art Director",
      image: "/path-to-image.jpg",
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      position: "Art Director",
      image: "/path-to-image.jpg",
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      position: "Art Director",
      image: "/path-to-image.jpg",
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      position: "Art Director",
      image: "/path-to-image.jpg",
    },
    // Add more team members...
  ];

  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="team-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Team
          </div>
          <h1>Team</h1>
        </div>
      </section>

      <section className="team-section">
        <div className="team-container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                  <button className="more-info-btn">
                    <i className="fas fa-plus"></i>
                  </button>
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

export default Team;
