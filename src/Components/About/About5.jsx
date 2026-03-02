import { useState, useEffect } from "react";
import "./About5.css";

const About5 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.querySelector(".about5-stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [];

  return (
    <div className={`about5-stats-section ${isVisible ? "visible" : ""}`}>
      <div className="container">
        <div className="about5-header">
          <div className="about5-header-left">
            <h5 className="section-sub-title">ABOUT TAKESOLUTION</h5>
            <h1 className="section-main-title">
              Company <span>Overview</span>
            </h1>
          </div>
          <div className="about5-header-right">
            <p className="about5-description">
              Take Solutions Limited is a global technology and analytics
              company serving the Life Sciences and Supply Chain sectors.
              Focused on digital transformation, compliance, and operational
              excellence, we help organizations achieve sustainable growth and
              competitiveness.
            </p>

            <p className="about5-description">
              Listed on the NSE and BSE, we are known for domain-driven
              innovation, strong governance, and consistent stakeholder value.
              Our investments in data science, AI, and automation enable
              intelligent outcomes and accelerate client success.
            </p>

            <p className="about5-description-p3">
              Headquartered in Chennai with a global presence, we combine deep
              industry expertise, advanced technology, and strong execution to
              deliver precise, transparent, and scalable solutions.
            </p>
          </div>
        </div>

        <div className="about5-stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="about5-stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="about5-stat-icon">
                <span>{stat.icon}</span>
              </div>
              <div className="about5-stat-content">
                <p>{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About5;
