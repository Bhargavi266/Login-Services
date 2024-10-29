import React from 'react';

const ThemeSelector = ({ toggleTheme }) => {
    return (
        <div className="theme-selector">
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeSelector;