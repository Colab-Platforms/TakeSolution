import { useState, useEffect } from 'react';
import './About5.css';

const About5 = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.querySelector('.about5-stats-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const stats = [
        // {
        //     icon: '💡',
        //     title: 'Founded in 1983'
        // },
        // {
        //     icon: '🌟',
        //     title: 'No.1 Pharma Company in India'
        // },
        // {
        //     icon: '🌍',
        //     title: '$6.2 Billion Global Revenue'
        // },
        // {
        //     icon: '👥',
        //     title: '43000+ Employees Across The Globe'
        // }
    ];

    return (
        <div className={`about5-stats-section ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="about5-header">
                    <h5 className="section-sub-title">About TakeSolutions</h5>
                    <h1 className="section-main-title">Company <span>Overview</span></h1>
                    <p className="about5-description">
                        Take Solutions Limited is a globally recognized technology and analytics company, delivering comprehensive solutions across the Life Sciences and Supply Chain sectors. With a strong focus on digital transformation, regulatory compliance, and operational excellence, we enable organizations worldwide to achieve sustainable growth and long-term competitiveness.
Listed on the NSE and BSE, Take Solutions has built a reputation for domain-driven innovation, robust governance, and consistent value creation for all stakeholders. Our strategic investments in data sciences, artificial intelligence, and automation strengthen our ability to deliver intelligent business outcomes and accelerate our clients’ success.

                        <br />
                        Headquartered in Chennai with a global footprint, the company’s multidisciplinary teams bring together deep industry expertise, advanced technologies, and strong execution capabilities. This integrated approach ensures precision, transparency, and scalability across every engagement.

Our Vision: To be a trusted global enterprise driving transformation and value through innovation, data integrity, and sustainable growth.

Our Mission: To create enduring stakeholder value by leveraging technology, domain expertise, and responsible business practices that empower industry advancement and human progress.

                    </p>

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


