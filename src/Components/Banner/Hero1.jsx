import { useEffect, useState, useContext } from "react";
import parse from 'html-react-parser';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { CarouselContext } from "../../Context/CarouselContext";
import featureData from "../../Data/feature.json";

const Hero1 = ({bgImg,SubTitle,Title,Content,BtnText,BtnLink,Image,VideoText}) => {
	const { currentIndex, handlePrev, handleNext } = useContext(CarouselContext);

	const desktopImages = [
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/final_3.jpg?v=1771837871",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/2ndPage.jpg_1.jpg?v=1771931693", //oneminute
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/3rdPage_jpg.jpg?v=1771844239", //clinicResearch
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/4thPage_jpg.jpg?v=1771844239", // biotech
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/5thPage_jpg.jpg?v=1771844238", // lifescience
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/preventive_health_71223d5f-aa86-4b32-8486-36ce9b247889.jpg?v=1771924931" // preventiveHealth
	];

	const mobileImages = [
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/mobile_view.jpg?v=1771918231",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/mobile_view_2.jpg?v=1771933172", //oneminutute
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/clinicle_research.jpg?v=1771923565",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Frame_1000000816.jpg?v=1771933171",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Frame_1000000814.jpg?v=1771933171",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Frame_1000000817.jpg?v=1771933172"
	];

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	const heroImages = isMobile ? mobileImages : desktopImages;

	const textWidth = isMobile ? '60%' : '38%';

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
		// Don't show text on mobile
		if (isMobile) {
			return null;
		}

		// For index 0 (main image), show custom title with white and red colors
		if (currentIndex === 0) {
			return (
				<>
					{/* <h1 style={{ 
						color: '#ffffff',
						// WebkitTextStroke: '1px #2285A3',
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
						// WebkitTextStroke: '1px #2285A3',
						display: 'block',
						textAlign: 'left',
						lineHeight: '1.2',
						margin: '0',
						paddingLeft: '10%'
					}}>
						{textArray[0]}
					</span>
					<span style={{ 
						color: '#2285A3',
						// WebkitTextStroke: '1px #ffffff',
						display: 'block',
						textAlign: 'left',
						lineHeight: '1.2',
						margin: '0',
						paddingLeft: '10%'
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
			<div className="container-fluid">
				<div className="row hero align-items-center">
					<div className="col-lg-6" style={{width: '38% !important'}}>
						<div className="hero-contant">
							{/* <h5>{SubTitle}</h5> */}
							<h1 key={currentIndex}>{getBannerText()}</h1>
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


