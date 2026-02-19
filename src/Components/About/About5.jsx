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
        {
            icon: '💡',
            title: 'Founded in 1983'
        },
        {
            icon: '🌟',
            title: 'No.1 Pharma Company in India'
        },
        {
            icon: '🌍',
            title: '$6.2 Billion Global Revenue'
        },
        {
            icon: '👥',
            title: '43000+ Employees Across The Globe'
        }
    ];

    return (
        <div className={`about5-stats-section ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="about5-header">
                    <h5 className="section-sub-title">About TakeSolutions</h5>
                    <h1 className="section-main-title">Company <span>Overview</span></h1>
                    <p className="about5-description">
                        TAKE Solutions is a global healthcare technology company leveraging artificial intelligence, advanced analytics, and deep scientific expertise to accelerate innovation across life sciences and healthcare. The company enables pharmaceutical, biotechnology, and healthcare organizations to improve research efficiency, enhance clinical outcomes, and deliver personalized preventive care through scalable digital platforms.
                        With a strong foundation in healthcare intelligence and AI-driven systems, TAKE Solutions is building next-generation platforms that shift healthcare from reactive treatment to predictive and preventive care.
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
