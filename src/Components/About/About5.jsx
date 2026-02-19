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
                        TAKE Solutions Limited is a global healthcare technology and analytics company driving digital transformation across life sciences, biotechnology, clinical research, and preventive healthcare. By leveraging artificial intelligence, advanced analytics, and deep scientific expertise, the Company enables pharmaceutical, biotechnology, and healthcare organizations to accelerate innovation, improve research efficiency, and enhance clinical and patient outcomes through scalable, intelligent platforms.
                        <br />
                        With a strong foundation in healthcare intelligence, regulatory expertise, and data-driven systems, TAKE Solutions is building next-generation digital platforms that shift healthcare from reactive treatment to predictive and preventive care. Listed on the NSE and BSE, the Company is recognized for its domain-led innovation, robust governance, and consistent value creation, while its strategic focus on AI, automation, and advanced analytics positions it at the forefront of the evolving global healthcare ecosystem.
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
