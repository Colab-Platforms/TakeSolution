import About1 from "../Components/About/About1";
import About3 from "../Components/About/About3";
import Hero1 from "../Components/Banner/Hero1";
import Blog1 from "../Components/Blog/Blog1";
import Brand from "../Components/Brand/Brand";
import Contact1 from "../Components/Contact/Contact1";
import Faq from "../Components/Faq/Faq";
import Features from "../Components/Features/Features";
import Pricing from "../Components/Pricing/Pricing";
import Project1 from "../Components/Project/Project1";
import Project2 from "../Components/Project/Project2";
import Project4 from "../Components/Project/Project4";
import Services1 from "../Components/Services/Services1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const Home = () => {
    return (
        <div className="home-page">
            <Hero1
                // bgImg="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Third.png?v=1771070060"
                bgImg="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WebsiteHomePage_02_jpg.jpg?v=1771312434"
                // SubTitle="TakeSolution IT SERVICES"
                // Title="Powering the Future of Healthcare with<br>Artificial Intelligence."
                // Content="TAKE Solutions is a global AI-driven deep tech company transforming life sciences, clinical research, biotechnology, and preventive healthcare."
                BtnText="EXPLORE MORE"
                BtnLink="/about"
                // Image="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_6sas3c6sas3c6sas-Photoroom.png?v=1771225818"
                // VideoText="WATCH VIDEO"
            ></Hero1>
            <Features></Features>
            {/* <About1
                MainImg="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/02.png?v=1771072606"
                // ImgTitle="BEST IT SOLUTION"
                SubTitle="TakeSolution COMPANY"
                Title="Transforming Healthcare Through<br> Intelligence & <span>Innovation.</span>"
                Content="For over two decades, Take Solutions has been at the forefront of delivering domain-intensive technology solutions across life sciences, clinical research, and biosciences. Today, the Company is entering a new era of transformation by integrating artificial intelligence across its core businesses while expanding into AI-driven diagnostics and preventive healthcare."
                // listTitle="Cloud Based Solution"
                BottomText="By combining deep scientific expertise with advanced AI, analytics, and digital platforms, Take Solutions is building scalable solutions that enhance research efficiency, enable predictive insights, and improve access to preventive healthcare."
                BtnUrl="/about"
                BtnText="EXPLORE MORE"
            ></About1> */}
            <About3
                bgImg="/assets/images/home-3/about3-bg.png"
                MainImg="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Website_TakeSolution_IntroPost03.png?v=1771409451"
                SubTitle="about company"
                Title="Transforming Healthcare Through<br> Intelligence & <span>Innovation.</span>"
                Content="For over two decades, Take Solutions has been at the forefront of delivering domain-intensive technology solutions across life sciences, clinical research, and biosciences. Today, the Company is entering a new era of transformation by integrating artificial intelligence across its core businesses while expanding into AI-driven diagnostics and preventive healthcare."
                img2="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/88192b4696b2f489c9697bea7f055c293def5b84.png?v=1771851732"
                img1="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/cedc1147320d3dd22ad8dee3240c180ddcef5228.png?v=1771851732"
                img3="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Frame_1000000807.jpg?v=1771915778"
                img4="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Frame_1000000808.jpg?v=1771915778"
                // BoxTitle1="Cloud Based Solution"
                // BoxTitle2="Best Services"  
                // listTitle1="Sed non odio non elit porttitor tinc"
                // listTitle2="Sed non odio non elit porttitor tincidunt donec"                         
           ></About3>
            <Services1></Services1>
            {/* <Project4></Project4> */}
            <Project4/>
            {/* <Project2 
                bgImage="/assets/images/project-bg.png"
                ClassAdd="project-area"
            ></Project2> */}
            {/* <Brand></Brand> */}
            {/* <Pricing></Pricing> */}
            <Faq></Faq>
            {/* <Testimonial1></Testimonial1> */}
            {/* <Contact1></Contact1> */}
            {/* <Blog1></Blog1> */}
        </div>
    );
};

export default Home;


