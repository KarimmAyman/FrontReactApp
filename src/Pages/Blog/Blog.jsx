import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Blog.css"

// Import your blog images
import Rectangle from "../../assets/Rectangle.svg";

const Blog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const blogPosts = [
    {
      id: 1,
      title: "Wonders of Ancient Civilizations: A Journey Through Egypt",
      image: Rectangle,
      excerpt:
        "Explore the magnificent pyramids, mysterious hieroglyphs, and rich cultural heritage of ancient Egypt. Discover how this remarkable civilization shaped human history and continues to fascinate modern minds.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "History",
    },
    {
      id: 2,
      title: "The Future of Transportation: Flying Cars and Beyond",
      image: Rectangle,
      excerpt:
        "From autonomous vehicles to flying taxis, discover how transportation technology is evolving rapidly. Learn about the innovations that will revolutionize how we move in the coming decades.",
      date: "March 14, 2024",
      readTime: "4 min read",
      category: "Technology",
    },
    {
      id: 3,
      title: "Sustainable Living: Small Changes, Big Impact",
      image: Rectangle,
      excerpt:
        "Learn practical ways to reduce your environmental footprint while maintaining a modern lifestyle. From energy conservation to waste reduction, discover how small changes add up to significant impact.",
      date: "March 13, 2024",
      readTime: "6 min read",
      category: "Lifestyle",
    },
    {
      id: 4,
      title: "Digital Nomads: Working from Paradise",
      image: Rectangle,
      excerpt:
        "Explore the growing trend of digital nomadism and how technology enables professionals to work from anywhere in the world. Get tips on remote work and maintaining work-life balance.",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Work",
    },
    {
      id: 5,
      title: "The Art of Mindful Living in a Digital Age",
      image: Rectangle,
      excerpt:
        "Navigate the challenges of staying present and mindful in our increasingly connected world. Discover practical techniques for digital wellness and mental health.",
      date: "March 11, 2024",
      readTime: "5 min read",
      category: "Wellness",
    },
    {
      id: 6,
      title: "Urban Farming: Growing Food in the City",
      image: Rectangle,
      excerpt:
        "Learn how urban dwellers are transforming rooftops and small spaces into productive gardens. Get started with your own urban farming project and join the local food movement.",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Sustainability",
    },
    {
      id: 7,
      title: "Artificial Intelligence in Everyday Life",
      image: Rectangle,
      excerpt:
        "Discover how AI is quietly revolutionizing our daily routines, from smart home devices to personalized recommendations. Understand the benefits and challenges of this transformative technology.",
      date: "March 9, 2024",
      readTime: "5 min read",
      category: "Technology",
    },
    {
      id: 8,
      title: "The Rise of Virtual Reality Tourism",
      image: Rectangle,
      excerpt:
        "Experience world wonders from your living room through VR technology. Learn how virtual tourism is making travel more accessible and environmentally friendly.",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Travel",
    },
    {
      id: 9,
      title: "Traditional Crafts in the Modern World",
      image: Rectangle,
      excerpt:
        "Explore how artisans are preserving ancient crafts while adapting to contemporary markets. Discover the intersection of tradition and innovation in craftsmanship.",
      date: "March 7, 2024",
      readTime: "6 min read",
      category: "Culture",
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
