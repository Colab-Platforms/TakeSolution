import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/faq.json';
import { useEffect, useRef, useState } from "react";
import parse from 'html-react-parser';

const Faq = () => {

    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
    const contentRefs = useRef([]);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);

    useEffect(() => {
      contentRefs.current.forEach((content, index) => {
        if (content) {
          if (index === openItemIndex) {
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            content.style.maxHeight = "0px";
          }
        }
      });
    }, [openItemIndex]);

    const FaqContent = {
        img1:'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/LastImage_jpg.jpg?v=1771916201',
        Title:'AI-Driven <span>Healthcare Evolution.</span>',
        Content:'We build next-generation digital platforms that power innovation across research, clinical development, biotechnology, and proactive health management. Our mission is simple to enable faster discoveries, smarter decisions, and healthier outcomes at a global scale.'
      }

    return (
            <div className="faq-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title text-left">
                                <SectionTitle
                                    SubTitle="TAKESOLUTION COMPANY"
                                    Title="Empowering Healthcare <br> Innovation for a <span>Healthier World.</span>"
                                ></SectionTitle>
                            </div>
                            <div className="faq-thumb">
                                <img src={FaqContent.img1} alt="faq1" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="tab_container">
                                <div className="feq-content">
                                    <h3 className="faq-title">{parse(FaqContent.Title)}</h3>
                                    <p className="faq-description">{FaqContent.Content}</p>
                                </div>
                                <div id="tab1" className="tab_content">
                                    <ul className="accordion">
                                    {data.map((item, index)=>(
                                        <li key={index} className={`cs_accordian ${index === openItemIndex ? "active" : "" }`}>
                                            <a onClick={() => handleItemClick(index)}><span>{item.title}</span></a>
                                            <p ref={el => contentRefs.current[index] = el}>{item.desc}</p>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="faq-shape">
                        <img src="/assets/images/faq2.png" alt="faq2" />
                    </div>
                    <div className="faq-shape2">
                         <img src="/assets/images/faq3.png" alt="faq2" />
                    </div> */}
                </div>
            </div>
    );
};

export default Faq;


