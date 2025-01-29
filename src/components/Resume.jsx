import React, { useEffect, useRef, useState } from "react";
import Nav from './Nav'
import img from "../img/resumelogo.png";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  
const Resume = () => {

  const [iframeHeight, setIframeHeight] = useState(1120);

  useEffect(() => {
    const handleResize = () => {
      setIframeHeight(window.innerWidth > 768 ? 1120 : window.innerHeight * 1.4);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const options = {
      speed: 7000,
    scale: 1.5,
    max: 30, 
    gyroscope: false, 
    }

  return (
    <div>
      <Nav />
      <div className="project-container">
        <div className="img-skill">
          <Tilt className="box" options={options}>
            <h1 className="logo">Resume <span>{}</span></h1>
            <p className="logo-des">The 1 document that (apparently) matters</p>
          </Tilt>
        </div>

        {/* PDF Viewer Section */}
        <div className="pdf-viewer-container">
          <iframe
            src="https://drive.google.com/file/d/1cCiQCLvLAgLkNJ5ZfsZU8wW1OjtZ6qep/preview"
            width="80%"
            height={iframeHeight}
            title="Resume PDF Viewer"
            allow="autoplay"
          >
            Your browser does not support PDF embeds. 
            <a href="https://drive.google.com/file/d/1cCiQCLvLAgLkNJ5ZfsZU8wW1OjtZ6qep/view">
              View PDF directly
            </a>
          </iframe>
        </div>

        <div className="resume-botton">
          <div className="resume-link">
            <a href="https://drive.google.com/file/d/1cCiQCLvLAgLkNJ5ZfsZU8wW1OjtZ6qep/view?usp=sharing">
              <i className="fas fa-download"></i>Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
