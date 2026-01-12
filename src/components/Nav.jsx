import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation(); // Get current route
  let scrollTimeout;

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
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
          <Link to="/" className={`link ${location.pathname === '/' ? 'active' : ''}`}>
            {isScrolling ? <FaHome className="nav-icon" /> : 'Home'}
          </Link>
          <Link to="/projects" className={`link ${location.pathname === '/projects' ? 'active' : ''}`}>
            {isScrolling ? <FaProjectDiagram className="nav-icon" /> : 'Experience'}
          </Link>
          <Link to="/skill" className={`link ${location.pathname === '/skill' ? 'active' : ''}`}>
            {isScrolling ? <FaCode className="nav-icon" /> : 'Skills'}
          </Link>
          <Link to="/resume" className={`link ${location.pathname === '/resume' ? 'active' : ''}`}>
            {isScrolling ? <FaFileDownload className="nav-icon" /> : 'Resume'}
          </Link>
          <Link to="/random" className={`link ${location.pathname === '/random' ? 'active' : ''}`}>
            {isScrolling ? <FaRandom className="nav-icon" /> : 'Projects'}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;