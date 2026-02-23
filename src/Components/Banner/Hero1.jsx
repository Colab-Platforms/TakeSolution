import { useEffect, useState, useContext } from "react";
import parse from 'html-react-parser';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { CarouselContext } from "../../Context/CarouselContext";
import featureData from "../../Data/feature.json";

const Hero1 = ({bgImg,SubTitle,Title,Content,BtnText,BtnLink,Image,VideoText}) => {
	const { currentIndex, handlePrev, handleNext } = useContext(CarouselContext);

	const desktopImages = [
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/final_3.jpg?v=1771837871",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/2ndPage_jpg.jpg?v=1771844239", //oneminute
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/3rdPage_jpg.jpg?v=1771844239", //clinicResearch
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/4thPage_jpg.jpg?v=1771844239", // biotech
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/5thPage_jpg.jpg?v=1771844238", // lifescience
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/preventive_health.jpg?v=1771832251" // preventiveHealth
	];

	const mobileImages = [
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/main_intro.png?v=1771669891",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/One_Minute_clinic.png?v=1771669600",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/clnicle_research.png?v=1771669354",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BioTech.png?v=1771668674",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Life_science.png?v=1771668896",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Preventive_health.png?v=17716690875"
	];

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	const heroImages = isMobile ? mobileImages : desktopImages;

	useEffect(() => {
        loadBackgroudImages();
      }, []);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const getBannerText = () => {
		// For index 0 (main image), show custom title with white and red colors
		if (currentIndex === 0) {
			return (
				<>
					{/* <h1 style={{ 
						color: '#ffffff',
						// WebkitTextStroke: '1px #ff3c00',
						fontSize: '40px',
						lineHeight: '70px',
						fontWeight: '700',
						fontFamily: '"Poppins"',
						margin: '0',
						textAlign: isMobile ? 'center' : 'left'
					}}>
						Powering the Future of<br />Healthcare with Artificial Intelligence.
					</h1> */}
					{/* <p style={{
						color: '#ffffff',
						fontSize: '19px',
						lineHeight: '30px',
						fontWeight: '400',
						fontFamily: '"Fira Sans"',
						opacity: '0.9',
						margin: '13px 0 43px 0',
						width: isMobile ? '100%' : '91%',
						marginLeft: isMobile ? '0' : 'auto',
						textAlign: isMobile ? 'center' : 'right'
					}}>
						TAKE Solutions is a global AI-driven deep tech company transforming life sciences, clinical research, biotechnology, and preventive healthcare.
					</p> */}
				</>
			);
		}
		
		// For feature banners (index 1-5), show banner text with white and red colors with thin outlines
		const featureIndex = currentIndex - 1;
		if (featureData[featureIndex] && featureData[featureIndex].bannerText) {
			const textArray = featureData[featureIndex].bannerText;
			return (
				<>
					<span style={{ 
						color: '#ffffff',
						// WebkitTextStroke: '1px #ff3c00',
						display: 'block',
						textAlign: isMobile ? 'center' : 'right',
						lineHeight: '1.2',
						margin: '0'
					}}>
						{textArray[0]}
					</span>
					<span style={{ 
						color: '#ff3c00',
						// WebkitTextStroke: '1px #ffffff',
						display: 'block',
						textAlign: isMobile ? 'center' : 'right',
						lineHeight: '1.2',
						margin: '0'
					}}>
						{textArray[1]}
					</span>
				</>
			);
		}
		return Title ? parse(Title) : '';
	};

    return (
        <div className="hero-area d-flex align-items-center" style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}>
			<button className="hero-carousel-btn hero-prev" onClick={handlePrev}>
				<i className="bi bi-chevron-left"></i>
			</button>
			<button className="hero-carousel-btn hero-next" onClick={handleNext}>
				<i className="bi bi-chevron-right"></i>
			</button>
			<div className="container">
				<div className="row hero align-items-center">
					<div className="col-lg-6">
						<div className="hero-contant">
							{/* <h5>{SubTitle}</h5> */}
							<h1>{getBannerText()}</h1>
							{/* <p>{Content}</p> */}
						</div>
					</div>
					<div className="col-lg-6">
					</div>
				</div>
			</div>
        </div>
    );
};

export default Hero1;
