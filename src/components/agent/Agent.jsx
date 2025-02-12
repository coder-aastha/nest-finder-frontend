import "./agent.scss"; // Ensure you have the SCSS file linked

// Sample data for the agents
const agents = [
  {
    name: "John Doe",
    specialization: "Residential Real Estate",
    photo: "../../../public/person1.jpeg", // Replace with actual image path
  },
  {
    name: "Jane Smith",
    specialization: "Commercial Real Estate",
    photo: "../../../public/person2.jpg", // Replace with actual image path
  },
  {
    name: "Alex Johnson",
    specialization: "Luxury Homes",
    photo: "../../../public/person3.png", // Replace with actual image path
  },
  {
    name: "Sarah Lee",
    specialization: "Property Management",
    photo: "../../../public/person4.webp", // Replace with actual image path
  },
];

const AgentPage = () => {
  return (
    <div className="agent-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Meet Our Agents</h1>
          <p>
            Our experienced team of professionals is ready to assist you in
            finding your perfect home.
          </p>
        </div>
      </section>

      {/* Agent Cards Wrapper with Flex Property */}
      <section className="agent-cards-wrapper">
        <div className="container">
          <div className="agent-cards">
            {agents.map((agent, index) => (
              <div key={index} className="agent-card">
                <img
                  className="agent-photo"
                  src={agent.photo}
                  alt={agent.name}
                />
                <h3>{agent.name}</h3>
                <p>{agent.specialization}</p>
                <button className="contact-btn">Contact</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentPage;
