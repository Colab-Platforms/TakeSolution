import { useState } from 'react';
import './About6.css';

const About6 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Our Vision',
      title: 'To transform global healthcare through artificial intelligence and intelligent digital innovation.',
      subtitle: '',
      description: 'TAKE Solutions envisions a connected healthcare ecosystem where life sciences, clinical research, biotechnology, and preventive health are powered by intelligent, data-driven platforms. We aspire to create a future where research is accelerated, regulatory processes are streamlined, risks are predicted early, and healthcare decisions are guided by real-time insights.\n\nOur vision is to bridge science and technology, enabling organizations to innovate faster, operate smarter, and deliver safer, more effective outcomes for patients worldwide. By combining advanced analytics, secure digital infrastructure, and deep domain expertise, we aim to redefine how healthcare systems function — making them more proactive, precise, and sustainable for generations to come.',
      image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2026-02-19_at_6.48.46_PM.jpg?v=1771507157',
      type: 'image'
    },
    // {
    //   label: 'Synology',
    //   title: 'Synergistic Excellence',
    //   subtitle: 'Combining Expertise And Innovation',
    //   description: 'Through strategic partnerships and collaborative efforts, we create synergies that drive innovation. Our integrated approach combines cutting-edge research with practical healthcare solutions to address global health challenges.',
    //   image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/about-synology.jpg?v=1771067701',
    //   type: 'image'
    // },
    {
      label: 'Our values',
      title: 'Our values define how we innovate, operate, and create lasting impact.',
      subtitle: '',
      description: '',
      image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Layer_0.png?v=1771506255',
      type: 'values',
      values: [
        {
          name: 'Quality',
          description: 'Delivering precision-driven solutions that meet the highest standards of scientific, technological, and operational excellence.'
        },
        {
          name: 'Consistency',
          description: 'Continuously advancing capabilities and delivering sustained value to customers, partners, and stakeholders.'
        },
        {
          name: 'Innovation',
          description: 'Harnessing artificial intelligence, deep technology, and data science to solve complex healthcare challenges and create future-ready solutions.'
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

  const currentTab = tabs[activeTab];

  return (
    <div className="about6-section">
      <div className="container">
        {/* Tabs Navigation */}
        <div className="about6-tabs-nav">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`about6-tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {currentTab.type === 'image' ? (
          <div className="about6-content-wrapper">
            <div className="about6-content-left">
              <div className="about6-content-inner">
                {currentTab.subtitle && (
                  <p className="about6-content-subtitle">{currentTab.subtitle}</p>
                )}
                <h3 className="about6-content-title">{currentTab.title}</h3>
                <p className="about6-content-description" style={{whiteSpace: 'pre-line'}}>{currentTab.description}</p>
              </div>
            </div>

            <div className="about6-content-right">
              <div className="about6-image-wrapper">
                <img 
                  src={currentTab.image} 
                  alt={currentTab.label}
                  className="about6-image"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="about6-values-full-wrapper">
            <div className="about6-values-content">
              <h3 className="about6-values-title">{currentTab.title}</h3>
              <div className="about6-values-grid">
                {currentTab.values.map((value, index) => (
                  <div key={index} className="about6-value-item">
                    <h4 className="about6-value-name">{value.name}</h4>
                    <p className="about6-value-description">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about6-values-image">
              <div className="about6-image-wrapper">
                <img 
                  src={currentTab.image} 
                  alt={currentTab.label}
                  className="about6-image"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About6;
