import { useState } from 'react';
import './About6.css';

const About6 = () => {
  const [openSection, setOpenSection] = useState(0);

  const sections = [
    {
      title: 'Our Vision',
      subtitle: 'To transform global healthcare through artificial intelligence and intelligent digital innovation.',
      content: 'TAKE Solutions envisions a connected, data-driven healthcare ecosystem where life sciences and clinical research are accelerated, regulations streamlined, risks predicted early, and decisions guided by real-time insights.\n\nBy bridging science and technology, we enable smarter innovation, safer outcomes, and more proactive, precise, and sustainable healthcare worldwide.'
    },
    {
      title: 'Our Values',
      subtitle: 'Our values define how we innovate, operate, and create lasting impact.',
      content: '',
      values: [
        {
          name: 'Quality',
          description: 'Delivering precision-driven solutions with the highest standards of scientific, technological, and operational excellence.'
        },
        {
          name: 'Consistency',
          description: 'Continuously enhancing capabilities to deliver sustained value to customers, partners, and stakeholders.'
        },
        {
          name: 'Innovation',
          description: 'Leveraging AI, advanced technology, and data science to solve complex healthcare challenges and build future-ready solutions.'
        },
        {
          name: 'Trust',
          description: 'Building transparent, ethical, and long-term relationships grounded in integrity and accountability.'
        },
        {
          name: 'Reliability',
          description: 'Ensuring consistency, accuracy, and trust across platforms, empowering healthcare and life sciences partners with dependable outcomes.'
        }
      ]
    }
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? -1 : index);
  };

  return (
    <div className="about6-section">
      <div className="container">
        <div className="about6-accordion">
          {sections.map((section, index) => (
            <div key={index} className={`about6-accordion-item ${openSection === index ? 'active' : ''}`}>
              <button 
                className="about6-accordion-header"
                onClick={() => toggleSection(index)}
              >
                <h3 className="about6-accordion-title">{section.title}</h3>
                <span className="about6-accordion-icon">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    style={{
                      transform: openSection === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              
              <div className={`about6-accordion-content ${openSection === index ? 'open' : ''}`}>
                <div className="about6-accordion-inner">
                  {section.content ? (
                    <div className="about6-vision-layout">
                      <div className="about6-vision-left">
                        <h4 className="about6-content-subtitle">{section.subtitle}</h4>
                      </div>
                      <div className="about6-vision-right">
                        <p className="about6-content-text">{section.content}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h4 className="about6-values-subtitle">{section.subtitle}</h4>
                      <div className="about6-values-grid">
                        {section.values.map((value, vIndex) => (
                          <div key={vIndex} className="about6-value-card">
                            <h5 className="about6-value-name">{value.name}</h5>
                            <p className="about6-value-description">{value.description}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About6;
