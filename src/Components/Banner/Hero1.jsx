import { useEffect, useState, useContext } from "react";
import parse from 'html-react-parser';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { CarouselContext } from "../../Context/CarouselContext";

const Hero1 = ({bgImg,SubTitle,Title,Content,BtnText,BtnLink,Image,VideoText}) => {
	const { currentIndex, handlePrev, handleNext } = useContext(CarouselContext);

	const desktopImages = [
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/OneMinuteClinic_jpg.jpg?v=1771578487",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Clinical_Research_jpg.jpg?v=1771578571",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Biotechnology_jpg.jpg?v=1771579252",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/LifeScience_jpg.jpg?v=1771579252",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ProactiveHealth_jpg.jpg?v=1771579252"
	];

	const mobileImages = [
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/02.1MV.png?v=1771326474",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/02.2MV.png?v=1771326474",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WebsiteHomePage_01Mobile_jpg.jpg?v=1771401281",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2026-02-17_at_6.18.02_PM.jpg?v=1771332641",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/02.1MV.png?v=1771326474"
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
							<h1>{Title ? parse(Title) : ''}</h1>
							<p>{Content}</p>
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
