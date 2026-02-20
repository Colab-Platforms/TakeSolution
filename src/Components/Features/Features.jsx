import { useContext } from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/feature.json'
import { CarouselContext } from '../../Context/CarouselContext';
import './Features.css';

const Features = () => {
    const { currentIndex } = useContext(CarouselContext);

    return (
        <div className="feature-area">
            <div className="container">
                <div className="row about align-items-center">
                    <div className="feature-box">
                        {data.map((item, i) => (
                            // <Link to={item.BtnUrl} key={i}>
                                <div 
                                    className={`feature-sinble-single-box ${currentIndex === i + 1 ? 'animate-up' : ''}`}
                                >
                                    <div className="feature-icon">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">{item.title}</h3>
                                        <p className="feature-text">{item.desc}</p>
                                    </div>
                                </div>
                            // </Link>
                        ))}
                    </div>
                </div>
            </div>	
        </div>
    );
};

export default Features;
