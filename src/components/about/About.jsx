// AboutPage.jsx
import './about.scss';
import house from "../../../public/house.jpeg";

const About = () => {
  const stats = [
    { number: "1000+", text: "Properties Sold" },
    { number: "500+", text: "Happy Clients" },
    { number: "15+", text: "Years Experience" },
    { number: "100+", text: "Expert Agents" }
  ];

  const values = [
    {
      title: "Trust & Reliability",
      description: "Building lasting relationships through honest and transparent service.",
      icon: "🤝"
    },
    {
      title: "Expert Knowledge",
      description: "Deep understanding of local markets and property values.",
      icon: "📊"
    },
    {
      title: "Client Focus",
      description: "Your goals and satisfaction are our top priority.",
      icon: "🎯"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>About NestFinder</h1>
          <p>Your Trusted Partner in Finding the Perfect Home</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Founded in 2008, we&apos;ve been helping people find their dream homes for over 15 years. Our journey began with a simple mission: to make real estate transactions transparent, efficient, and enjoyable.</p>
              <p>Today, we&apos;re proud to be one of the most trusted names in real estate, serving thousands of clients with the same dedication and passion we started with.</p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="story-image">
              <img src={house} alt="Office building" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;