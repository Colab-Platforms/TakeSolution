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
                MainImg="/assets/images/inner/about-us-thu.png"
                SubTitle="TakeSolution COMPANY"
                Title="Redefining the Future of <br>Healthcare <span>with AI.</span>"
                Content="TAKE Solutions is a global AI-driven deep technology company transforming life sciences, clinical research, biotechnology, and preventive healthcare through intelligent platforms and scientific expertise."
                listTitle1="Best IT Solutions & Service"
                listTitle2="24 Hour's Customer Service"  
                // BoxTitle1="826"
                // BoxTitle2="Satisfied Clients"                  
            ></About4>
            <About5></About5>
            <About6></About6>
            {/* <Project1 
                bgImage="/assets/images/inner/project-bg-3.png"
                ClassAdd="project-area style-two"
            ></Project1> */}
            {/* <Brand></Brand> */}
            {/* <Blog1></Blog1> */}
        </div>
    );
};

export default About;