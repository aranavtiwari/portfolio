import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'


import App from './components/App';

// Modular CSS imports
import "./styles/base.css";
import "./styles/Nav.css";
import "./styles/Home.css";
import "./styles/Skill.css";
import "./styles/Projects.css";
import "./styles/Resume.css";
import "./styles/ThemeToggle.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
)
// basename={process.env.PUBLIC_URL}