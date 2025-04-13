import { Link } from "react-router-dom";
import "./SuccessStory.css";
import ParentFooter from "../../Components/Footer/ParentFooter";
import { useState } from "react";

const SuccessStory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;

  const stories = [
    {
      id: 1,
      name: "Mostafa El-Sayed",
      role: "Engineering Student at Cairo University",
      location: "Giza",
      content:
        "Aoun helped me find the perfect shared apartment near Cairo University. I'm now living with fellow engineering students, and we're just a 10-minute walk from campus. The location is perfect for late-night study sessions!",
      avatar: `https://ui-avatars.com/api/?name=M+E&background=034833&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 2,
      name: "Mariam Hassan",
      role: "Medical Student at Ain Shams",
      location: "Abbassia",
      content:
        "Finding accommodation near Ain Shams Medical School was challenging until I discovered Aoun. Now I share a wonderful apartment with other medical students in Abbassia, making those early morning rounds much easier to manage.",
      avatar: `https://ui-avatars.com/api/?name=M+H&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 3,
      name: "Karim Mahmoud",
      role: "GUC Student",
      location: "New Cairo",
      content:
        "The commute to GUC was exhausting until I found housing through Aoun. Now I live in a modern apartment in New Cairo with other GUC students. The app made finding trustworthy roommates so simple!",
      avatar: `https://ui-avatars.com/api/?name=K+M&background=034833&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 4,
      name: "Nada Ibrahim",
      role: "Pharmacy Student at MSA",
      location: "6th of October",
      content:
        "Moving from Alexandria to study at MSA was daunting, but Aoun made finding safe housing in 6th of October City straightforward. My roommates are amazing, and the apartment is perfect for studying.",
      avatar: `https://ui-avatars.com/api/?name=N+I&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 5,
      name: "Omar Ashraf",
      role: "Commerce Student at Helwan University",
      location: "Helwan",
      content:
        "Thanks to Aoun, I found affordable housing near Helwan University. The verification system made me feel secure about my choice of roommates, and the location is perfect for my daily routine.",
      avatar: `https://ui-avatars.com/api/?name=O+A&background=034833&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 6,
      name: "Salma Adel",
      role: "Fine Arts Student",
      location: "Zamalek",
      content:
        "As a Fine Arts student, I needed a space that could accommodate my art supplies. Aoun helped me find a shared apartment in Zamalek with other artists. The natural lighting is perfect for my work!",
      avatar: `https://ui-avatars.com/api/?name=S+A&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 7,
      name: "Youssef Hany",
      role: "AAST Student",
      location: "Alexandria",
      content:
        "Found an amazing place in Miami, Alexandria through Aoun. The app's filters helped me find roommates from AAST who share similar interests and study schedules.",
      avatar: `https://ui-avatars.com/api/?name=Y+H&background=034833&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 8,
      name: "Rana Mahmoud",
      role: "Computer Science Student at AUC",
      location: "5th Settlement",
      content:
        "The housing options near AUC were overwhelming until I used Aoun. Found a great apartment in the 5th Settlement with fellow CS students. We even started a study group!",
      avatar: `https://ui-avatars.com/api/?name=R+M&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 9,
      name: "Ahmed Tamer",
      role: "Law Student at Alexandria University",
      location: "Smouha",
      content:
        "Aoun's platform made it easy to find housing in Smouha, close to Alexandria University. The roommate matching feature helped me find peers from the law faculty.",
      avatar: `https://ui-avatars.com/api/?name=A+T&background=034833&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 10,
      name: "Malak Sherif",
      role: "Mass Communication Student",
      location: "Maadi",
      content:
        "Living in Maadi while studying was a dream come true! Aoun helped me find the perfect shared apartment with other media students. The commute to university is now so convenient.",
      avatar: `https://ui-avatars.com/api/?name=M+S&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 11,
      name: "Ziad Khaled",
      role: "Architecture Student",
      location: "Dokki",
      content:
        "Found a spacious apartment in Dokki that's perfect for my architecture projects. My roommates are also architecture students, so we've created a great collaborative space.",
      avatar: `https://ui-avatars.com/api/?name=Z+K&background=034833&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 12,
      name: "Nour Essam",
      role: "Dentistry Student",
      location: "Nasr City",
      content:
        "Aoun helped me find a convenient place in Nasr City near my faculty. The apartment is modern, clean, and I share it with other dental students. It's been a great experience!",
      avatar: `https://ui-avatars.com/api/?name=N+E&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
    {
      id: 12,
      name: "Nour Essam",
      role: "Dentistry Student",
      location: "Nasr City",
      content:
        "Aoun helped me find a convenient place in Nasr City near my faculty. The apartment is modern, clean, and I share it with other dental students. It's been a great experience!",
         avatar: `https://ui-avatars.com/api/?name=N+E&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },

    {
      id: 12,
      name: "Nour Essam",
      role: "Dentistry Student",
      location: "Nasr City",
      content:
        "Aoun helped me find a convenient place in Nasr City near my faculty. The apartment is modern, clean, and I share it with other dental students. It's been a great experience!",
         avatar: `https://ui-avatars.com/api/?name=N+E&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },

    {
      id: 12,
      name: "Nour Essam",
      role: "Dentistry Student",
      location: "Nasr City",
      content:
        "Aoun helped me find a convenient place in Nasr City near my faculty. The apartment is modern, clean, and I share it with other dental students. It's been a great experience!",
         avatar: `https://ui-avatars.com/api/?name=N+E&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },

    {
      id: 12,
      name: "Nour Essam",
      role: "Dentistry Student",
      location: "Nasr City",
      content:
        "Aoun helped me find a convenient place in Nasr City near my faculty. The apartment is modern, clean, and I share it with other dental students. It's been a great experience!",
         avatar: `https://ui-avatars.com/api/?name=N+E&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },

    {
      id: 12,
      name: "Nour Essam",
      role: "Dentistry Student",
      location: "Nasr City",
      content:
        "Aoun helped me find a convenient place in Nasr City near my faculty. The apartment is modern, clean, and I share it with other dental students. It's been a great experience!",
         avatar: `https://ui-avatars.com/api/?name=N+E&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },

    {
      id: 12,
      name: "Nour Essam",
      role: "Dentistry Student",
      location: "Nasr City",
      content:
        "Aoun helped me find a convenient place in Nasr City near my faculty. The apartment is modern, clean, and I share it with other dental students. It's been a great experience!",
         avatar: `https://ui-avatars.com/api/?name=N+E&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },

    {
      id: 12,
      name: "Nour Essam",
      role: "Dentistry Student",
      location: "Nasr City",
      content:
        "Aoun helped me find a convenient place in Nasr City near my faculty. The apartment is modern, clean, and I share it with other dental students. It's been a great experience!",
         avatar: `https://ui-avatars.com/api/?name=N+E&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },

    {
      id: 12,
      name: "Nour Essam",
      role: "Dentistry Student",
      location: "Nasr City",
      content:
        "Aoun helped me find a convenient place in Nasr City near my faculty. The apartment is modern, clean, and I share it with other dental students. It's been a great experience!",
         avatar: `https://ui-avatars.com/api/?name=N+E&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },

    {
      id: 12,
      name: "Nour Essam",
      role: "Dentistry Student",
      location: "Nasr City",
      content:
        "Aoun helped me find a convenient place in Nasr City near my faculty. The apartment is modern, clean, and I share it with other dental students. It's been a great experience!",
         avatar: `https://ui-avatars.com/api/?name=N+E&background=83cd20&color=fff&size=150&bold=true&rounded=true&font-size=0.5`,
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(stories.length / storiesPerPage);

  // Get current page stories
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="success-page">
      <section className="success-hero">
        <div className="success-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Success Stories
          </div>
          <h1>Student Success Stories</h1>
          <p className="hero-description">
            Discover how Egyptian students found their perfect accommodation
            with Aoun
          </p>
        </div>
      </section>

      <section className="stories-section">
        <div className="stories-container">
          <div className="stories-grid">
            {currentStories.map((story) => (
              <div key={story.id} className="story-card">
                <div className="story-content">
                  <p>{story.content}</p>
                  <div className="story-author">
                    <div className="author-avatar">
                      <img src={story.avatar} alt={story.name} />
                    </div>
                    <div className="author-info">
                      <h3>{story.name}</h3>
                      <span>{story.role}</span>
                      <p className="location-tag">{story.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button
              className="arrow-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`page-btn ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="arrow-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      <ParentFooter />
    </div>
  );
};

export default SuccessStory;
