import { Link } from "react-router-dom";
import ParentFooter from "../../Components/Footer/ParentFooter";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Michael Anderson",
      position: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 3,
      name: "David Wilson",
      position: "Backend Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 4,
      name: "Emma Thompson",
      position: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 5,
      name: "James Mitchell",
      position: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 6,
      name: "Rachel Chen",
      position: "App Developer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 7,
      name: "Rachel Chen",
      position: "App Developer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 8,
      name: "Rachel Chen",
      position: "App Developer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="team-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Team
          </div>
          <h1>Our Team</h1>
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
