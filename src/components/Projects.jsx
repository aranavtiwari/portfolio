import React, { useEffect, useRef } from "react";
import Nav from './Nav'
import imgone from '../img/worldaffairlogo.svg';
import imgtwo from '../img/webpandlogo.svg';
import imgthree from '../img/eventlogo.svg';
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  


const Projects = () => {

    const options = {
        speed: 7000,
      scale: 2.4,
      max: 30,
      gyroscope: false, 

 }

 const projectName = [
    {   weblink:"https://www.fisglobal.com/", 
        link:"linkweb", 
        iconweb:"fas fa-globe", 
        nameweb:"Website" ,
        class:"float-left", 
        direction:"reverse",
        rolecss:"role", 
        img:imgthree,
        role:"Software Engineer l", 
        heading:"CROSS-ASSET TRADING AND RISK PLATFORM", 
        description:"Formerly known as Front Arena, it is a product of FIS where financial \
                        institutions perform trading and other asset management activities. \
                        Delivered multi-asset FIX integrations across Repo, FX, CDS, and IRS, \
                        optimizing order flows, ensuring compliance, enhancing security, resolving issues, \
                        and earning FIS Star Award recognition through robust trading platform enhancements."
    },
    {   weblink:"https://aranavtiwari.github.io/WA/", 
        gitlink:"https://github.com/aranavtiwari/WA", 
        link:"linkweb", 
        iconweb:"fas fa-globe", 
        nameweb:"Web App" ,
        icongit:"fab fa-github",
        gitname:"Github Org" , 
        class:"float-right", 
        img:imgone, 
        heading:"World Affair", 
        description:`World Affair is Webapp where you can find most underrated news around the world.\
                    I designed and developed the frontend with React/Sass from scratch `
    },
                                                                             
    {iconweb:"fas fa-globe", 
        nameweb:"Web App", 
        weblink:"https://webpanda.netlify.app/" ,
        icongit:"fab fa-github",
        gitname:"Github Org", 
        gitlink:"https://github.com/aranavtiwari/ast-website",
        link:"linkweb", 
        rolecss:"role",   
        role:"Freelance Frontend",  
        direction:"reverse", 
        class:"float-left", 
        img:imgtwo, 
        heading:"Web Panda", 
        description:"Web Panda was a startup which offers web development service to their client with source code.\
        I worked on the landing page and the entire website from scratch. I utilized react-static to generate \
        static pages with instant navigation. I also organized Design Sprints to target specific audiences, started \
        from scratch with UI/UX to develop a unique brand identity for the company. Made personalized icons. illustrations, animations, etc." 
    }

   
 ];


 const projectShow = () => {
  return projectName.map((data) => {
      return (
        <div className="project" id={data.direction}>
        <div className="project-left">
            <h1 className={data.class}>{data.heading}</h1>
            <h2 className={data.rolecss}>{data.role}</h2>
            <p className={`${data.class} description`}>{data.description}</p>
            <div className="link">
                <a href={data.weblink} className={data.link} target="_blank"><i class={data.iconweb}/>{data.nameweb}</a>
                <a href={data.gitlink} className={data.link} target="_blank"><i class={data.icongit}/>{data.gitname}</a>
            </div>
        </div>
        <div className="project-right">
            <img src={data.img} className="img" />
        </div>
        </div>
      )
  })
}

return (
  <div>
      <Nav/>
      <div className="project-container">
          <div className="img-skill">
          <Tilt className="box" options={options} >
             <h1 className="logo">Experience <span>{}</span> </h1>
             <p className="logo-des">The work stuff!</p>
          </Tilt> 
          </div>
          <div className="project-outer">
              {projectShow()}
          </div>

      </div>
  </div>
)
    
}

export default Projects;




