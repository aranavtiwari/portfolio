import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const [isMonoTheme, setIsMonoTheme] = useState(false);

    // Check localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('monoTheme');
        if (savedTheme === 'true') {
            setIsMonoTheme(true);
            document.body.classList.add('mono-theme');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isMonoTheme;
        setIsMonoTheme(newTheme);

        if (newTheme) {
            document.body.classList.add('mono-theme');
            localStorage.setItem('monoTheme', 'true');
        } else {
            document.body.classList.remove('mono-theme');
            localStorage.setItem('monoTheme', 'false');
        }
    };

    return (
        <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isMonoTheme ? 'Switch to Color Mode' : 'Switch to Minimal Mode'}
        >
            {isMonoTheme ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;
