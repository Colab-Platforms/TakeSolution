import { useContext } from 'react';
import data from '../../Data/feature.json'
import { CarouselContext } from '../../Context/CarouselContext';
import './Features.css';

const Features = () => {
    const { currentIndex, setIndex } = useContext(CarouselContext);

    const handleCardClick = (cardIndex) => {
        // Set banner index to cardIndex + 1 (because index 0 is main image)
        setIndex(cardIndex + 1);
    };

    return (
        <div className="feature-area">
            <div className="container">
                <div className="row about align-items-center">
                    <div className="feature-box">
                        {data.map((item, i) => (
                            <div 
                                key={i}
                                className={`feature-sinble-single-box ${currentIndex === i + 1 ? 'animate-up' : ''}`}
                                onClick={() => handleCardClick(i)}
                                style={{ cursor: 'pointer' }}
                            >

                                <div className='cardbg'>
                                    <img src={item.cardbg} alt={item.title} />

                                </div>
                                {/* <div className="feature-icon">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{item.title}</h3>
                                    <p className="feature-text">{item.desc}</p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>	
        </div>
    );
};

export default Features;


