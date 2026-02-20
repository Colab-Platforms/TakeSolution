import About4 from "../Components/About/About4";
import About5 from "../Components/About/About5";
import About6 from "../Components/About/About6";
import Blog1 from "../Components/Blog/Blog1";
import Brand from "../Components/Brand/Brand";
import BreadCumb from "../Components/Common/BreadCumb";
import Project1 from "../Components/Project/Project1";

const About = () => {
    return (
        <div className="about-page">
            <BreadCumb Title="About Us"></BreadCumb>
            <About4
                MainImg="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ChatGPT_Image_Feb_19_2026_05_51_58_PM.png?v=1771504924"
                SubTitle="TakeSolution COMPANY"
                Title="Redefining the Future of <br>Healthcare <span>with AI.</span>"
                Content="TAKE Solutions is a global AI-driven deep technology company transforming life sciences, clinical research, biotechnology, and preventive healthcare through intelligent platforms and scientific expertise."
                listTitle1="Best IT Solutions & Service"
                listTitle2="24 Hour's Customer Service"
            ></About4>
            <About5></About5>
            <About6></About6>
        </div>
    );
};

export default About;