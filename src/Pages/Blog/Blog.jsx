import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Blog.css";

// Import your blog images
import Rectangle from "../../assets/Rectangle.svg";

const Blog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const blogPosts = [
    {
      id: 1,
      title: "How Aoun Makes Student Housing Search Easier",
      image:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=500&fit=crop",
      excerpt:
        "Discover how Aoun's platform simplifies finding the perfect student accommodation. Learn about our verification system, smart filters, and how we connect students with trusted housing options.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Platform Guide",
    },
    {
      id: 2,
      title: "Success Stories: Finding Housing Through Aoun",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
      excerpt:
        "Real stories from students who found their ideal accommodation using Aoun. From Cairo University to Ain Shams, hear how students transformed their university housing experience.",
      date: "March 14, 2024",
      readTime: "4 min read",
      category: "Success Stories",
    },
    {
      id: 3,
      title: "Safety First: Aoun's Verification Process",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=500&fit=crop",
      excerpt:
        "Understanding how Aoun verifies listings and landlords to ensure student safety. Learn about our security measures and tips for safe housing searches.",
      date: "March 13, 2024",
      readTime: "6 min read",
      category: "Safety",
    },
    {
      id: 4,
      title: "Finding Roommates Through Aoun",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop",
      excerpt:
        "Tips for using Aoun's roommate matching features effectively. How to create an attractive profile and connect with compatible roommates for shared housing.",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Roommates",
    },
    {
      id: 5,
      title: "Budget-Friendly Housing Options on Aoun",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=500&fit=crop",
      excerpt:
        "Guide to finding affordable student housing using Aoun's platform. Learn about different price ranges, shared options, and how to filter listings within your budget.",
      date: "March 11, 2024",
      readTime: "5 min read",
      category: "Budgeting",
    },
    {
      id: 6,
      title: "Aoun's Guide to Different Housing Types",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop",
      excerpt:
        "Compare different housing options available on Aoun: private apartments, shared rooms, university dorms, and more. Find what suits your needs and preferences.",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Housing Types",
    },
    {
      id: 7,
      title: "Using Aoun's Advanced Search Features",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
      excerpt:
        "Master Aoun's search tools to find your perfect student housing. Learn about filters, sorting options, and how to save your favorite listings for later.",
      date: "March 9, 2024",
      readTime: "5 min read",
      category: "Platform Tips",
    },
    {
      id: 8,
      title: "Housing Near Top Egyptian Universities",
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=500&fit=crop",
      excerpt:
        "Explore Aoun's listings near major universities. Find accommodation options near Cairo University, Ain Shams, Alexandria University, and other institutions.",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Location Guide",
    },
    {
      id: 9,
      title: "From Search to Move-In: Complete Guide",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=500&fit=crop",
      excerpt:
        "Step-by-step guide to using Aoun: from creating your profile to finalizing your housing agreement. Everything you need to know about the process.",
      date: "March 7, 2024",
      readTime: "6 min read",
      category: "Process Guide",
    },
  ];

  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  if (isLoading) {
    return (
      <div className="blog-container">
        <div className="blog-header">
          <h1>Blog</h1>
        </div>
        <div className="blog-grid">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="blog-card skeleton"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link> /Blog
        </div>
        <h1>Blog</h1>
      </div>

      <div className="blog-grid">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="blog-card"
            onClick={() => handleBlogClick(post.id)}
          >
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span className="date">{post.date}</span>
                <span className="dot">•</span>
                <span className="read-time">{post.readTime}</span>
              </div>
            </div>
          </article>
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
            className={currentPage === index + 1 ? "active" : ""}
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
  );
};

export default Blog;
