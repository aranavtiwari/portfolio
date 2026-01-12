import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaProjectDiagram, 
  FaCode, 
  FaFileDownload,
  FaRandom 
} from 'react-icons/fa';

function Nav() {
  const [select, setSelect] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout;

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // 1 second delay after scrolling stops
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      <div className="name" onClick={() => setSelect(!select)}>
        <div className="name-a">
          <i className="fa fa-bars"/> S<span className="y">Y</span>NOX
        </div>
      </div>
      
      <div className={`nav ${isScrolling ? 'scrolling' : ''}`}>
        <div className={select ? "nav-link" : "hide nav-link"}>
          <Link to="/" className="link">
            {isScrolling ? <FaHome className="nav-icon" /> : 'Home'}
          </Link>
          <Link to="/projects" className="link">
            {isScrolling ? <FaProjectDiagram className="nav-icon" /> : 'Experience'}
          </Link>
          <Link to="/skill" className="link">
            {isScrolling ? <FaCode className="nav-icon" /> : 'Skills'}
          </Link>
          <Link to="/resume" className="link">
            {isScrolling ? <FaFileDownload className="nav-icon" /> : 'Resume'}
          </Link>
          <Link to="/random" className="link">
            {isScrolling ? <FaRandom className="nav-icon" /> : 'Projects'}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;

// import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
// function Nav() {

//     const [select, setSelect] =useState(false);

//     const click = () => {
//         return setSelect(!select)
//     }

//     return (
//         < >
//             <div className="name" onClick={() => click()}>
//                 <div className="name-a">
//                     <i className="fa fa-bars"/> S<span className="y">Y</span>NOX
//                 </div>
//             </div>
//         <div className="nav">
//             <div className={select ? "nav-link" : "hide nav-link"}>
//                 <Link to="/" className="link">Home</Link>
//                 <Link to="/projects" className="link">Projects</Link>
//                 <Link to="/skill" className="link">Skills</Link>
//                 <Link to="/resume" className="link">Resume</Link>
//                 <Link to="/random" className="link">Random</Link>
//             </div>
            
//         </div>
//         </>
//     )
// }

// export default Nav

