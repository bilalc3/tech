import foodxpress from "./assets/images/foodxpress.png" 
import project from "./assets/images/projectlogo.png"
import worklogo from "./assets/images/work.png"
import nasheedify from "./assets/images/nasheedifylogo.png"
import emegle from "./assets/images/emegle3.png"
import chess from "./assets/images/chess.png"
import mips from "./assets/images/mips.jpeg"
import orglink from "./assets/images/orglink.png"
import './assets/css/Projects.css'; 
import studyhub from "./assets/images/studyhubImage.png"


const projects =[
    {
        name: "Food Xpress", 
        description: "A web application providing over 4500+ multicultural recipes along with their respective ingredients. Aimed to promote cooking culture within university community.", 
        image: foodxpress, 
        type: project,
        tools2: "React, Node.js, Python, Mongodb", 
        tools: ["React", "Node,js", "Python", "Mongodb"], 
        link: "https://github.com/bilalc3/cooking-project-program", 
        id: 1
    }, 
    {
        name: "Nasheedify", 
        description: "A buisness site for the Nasheedify youtube channel, featuring the channel's key metrics and content. Live email connection between the website and buisness's email", 
        image: nasheedify, 
        type: worklogo,
        tools2: "React, Bootstap, EmailJs", 
        tools: ["React", "Bootstap", "EmailJs"], 
        link: "https://nasheedifylive.firebaseapp.com/", 
        id: 2
    }, 
    {
        name: "Emegle", 
        description: "Education meets Omegle, Emegle allows you to virtually connect with  students in your grade level that are studying similar subjects.",  
        image: emegle, 
        type: project,
        tools2: "React, Node.js, Socket.io", 
        tools: ["React", "Node.js", "Socket.io"], 
        link: "https://emegle-76079.firebaseapp.com/",
        id: 3
    }, 
    {
        name: "StudyHub", 
        description: "An ALL-IN-ONE web application that offers various student-related support including bult-in calculators, timers, games, and more.",  
        image: studyhub, 
        type: project,
        tools2: "React, Node.js, Socket.io", 
        tools: ["React", "Boostrap", "JQuery"], 
        link: "https://github.com/bilalc3/studyhub",
        id: 4
    }, {
        name: "Chess", 
        description: "Chess game featuring advanced Object-Oriented principles, diverse gameplay modes, adaptive AI, and a visual interface created with XWindow and the Observer pattern.",  
        image: chess, 
        type: project,
        tools2: "C++, XWindow, XBitMap", 
        tools: ["C++", "XWindow", "XBitMap"], 
        link: "https://github.com/bilalc3/Chess",
        id: 5
    } , {
        name: "WLP4 Compiler", 
        description: "WLP4 compiler employing LR(1) scanning, bottom-up parsing, and context-sensitive analysis techniques to classify well-formed code syntactically and semantically via exception handling.",  
        image: mips, 
        type: project,
        tools2: "C++, WLP4, MIPS", 
        tools: ["C++", "WLP4", "MIPS"], 
        link: "/",
        id: 6
    }, {
        name: "OrgLink", 
        description: "Leading backend development and introduced a RESTful API for an Ontario awareness organization. Implenting features such as optimizing recurring requests through caching and enhancing authentication using JWT",  
        image: orglink, 
        type: project,
        tools2: "Java, SpringBoot, Postgresql", 
        tools: ["Java","Spring Boot", "Postgresql"], 
        link: "https://github.com/bilalc3/orglink-client",
        id: 7
    }

]




const Projects = () => {
    return ( 
        <div className="projectContainer">
           <div className="projectHeading">
                <h1>Projects/Work Experience</h1>
            </div>

            <div className="projectsInfo">

                {projects.map((project) => (
                         
                       <div className="projectpreview" key = {project.id}>
                            {project.link != "/" ?
                                (<a href={project.link} className="projectlink" target="_blank" rel="noreferrer">  
                                <div className="projecttop">
                                    <img className= "projectimage" src={project.image} alt="ProjectImage" /> 
                                </div>
                                </a> )
                                : (
                                    <span>  
                                    <div className="projecttop">
                                        <img className= "projectimage" src={project.image} alt="ProjectImage" /> 
                                    </div>
                                    </span> 
                                    )}
                           
                            <div className="projectinfo">
                                <div className="projectTop">
                                    <div className="projectName">
                                        <p className="theprojectName">
                                            {project.name}
                                        </p>
                                    </div>
                                    <div className="projectType">
                                        <img src={project.type} alt="" className="projectstyle" />
                                    </div>
                                </div>
                                <div className="projectMiddle">
                                    {project.tools.map((tool) => (
                                        <div className="returnTools">
                                            <p className="indvTool">{tool}</p>
                                        </div>
                                    ))}                            
                                </div>
                                <div className="projectBottom">
                                    {project.description}
                                </div>
                            </div>
                        </div>
                        
                    ))}
                
            </div>
        </div>
     );
}
 
export default Projects;