import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Hero1 = ({bgImg,SubTitle,Title,Content,BtnText,BtnLink,Image,VideoText}) => {
	const desktopImages = [
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WebsiteHomePage_02_3_jpg.jpg?v=1771325925",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WebsiteHomePage_02.1.jpg_1.jpg?v=1771323244",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WebsiteHomePage_02_2_jpg.jpg?v=1771323244"
	];

	const mobileImages = [
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/02.1MV.png?v=1771326474",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/02.2MV.png?v=1771326474",
		"https://cdn.shopify.com/s/files/1/0636/5226/6115/files/02.3MV.png?v=1771326474"
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const [iframeSrc, setIframeSrc] = useState('about:blank');
	const [toggle, setToggle] = useState(false);

	const heroImages = isMobile ? mobileImages : desktopImages;

	useEffect(() => {
        loadBackgroudImages();
      }, []);

	// Handle window resize
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Auto-slide every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [heroImages.length]);

	const handlePrev = () => {
		setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
	};

	const handleNext = () => {
		setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
	};
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };

    return (
        <div className="hero-area d-flex align-items-center" style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}>
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
							<h5>{SubTitle}</h5>
							<h1>{parse(Title)}</h1>
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