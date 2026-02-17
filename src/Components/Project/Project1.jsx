import data from '../../Data/project1.json';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Project1 = ({ bgImage, ClassAdd }) => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className={ClassAdd} data-background={bgImage}>
      <div className="container-fluid">
        <div className="row project align-items-center">
          <div className="col-lg-6">
            <div className="section-title text-left">
              <SectionTitle
                SubTitle="TAKESOLUTION PROJECT"
                Title="Our Upcoming <span>Projects.</span>"
              ></SectionTitle>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-right">
              {/* Navigation arrows removed */}
            </div>
          </div>
        </div>
        <div className="row carousel">
          <div className="project_list" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', width: '100%' }}>
            {data.map((item, i) => (
              <div key={i} style={{ flex: '0 0 calc(50% - 15px)', maxWidth: '500px' }}>
                <div className="project-single-box">
                  <div className="project-thumb">
                    <img src={item.img} alt="project1" />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title"><Link>{item.title}</Link></h3>
                    <p className="project-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
