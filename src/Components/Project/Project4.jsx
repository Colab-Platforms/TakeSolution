import { useState, useEffect } from 'react';
import './Project4.css';

const Project4 = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projects = [
        {
            id: 1,
            image: "https://res.cloudinary.com/dtupa1lfb/image/upload/v1785148485/Creating_change_that_truly_matters_1_bahciz.png",
            alt: "Mobile App Development",
            title: "Preventive Healthcare",
            subtitle: "Software"
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dtupa1lfb/image/upload/v1785148486/Creating_change_that_truly_matters_2_iw1qz9.png",
            alt: "Smart Technology Solutions",
            title: "One-Minute Clinic",
            subtitle: "Hardware"
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dtupa1lfb/image/upload/v1785148485/Creating_change_that_truly_matters_3_gm8mvx.png",
            alt: "Business Collaboration",
            title: "Marketplace",
            subtitle: "Software"
        }
    ];

    return (
        <div className="project4-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project4-header">
                            <h6 className="section-sub-title">Upcoming Project</h6>
                            <h2 className="project4-title">
                                Creating change that <span className="highlight">truly matters</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`project4-grid ${isMobile ? 'mobile-scroll' : ''}`}>
                            {projects.map((project) => (
                                <div key={project.id} className="project4-card">
                                    <img 
                                        src={project.image} 
                                        alt={project.alt}
                                        className="project4-image"
                                    />
                                    <div className="project4-overlay">
                                        <div className="project4-overlay-content">
                                            <h3 className="project4-overlay-title">{project.title}</h3>
                                            <p className="project4-overlay-subtitle">{project.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project4;
