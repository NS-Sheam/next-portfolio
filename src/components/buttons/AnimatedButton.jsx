import React from 'react';

const AnimatedButton = ({ children, className, ...props }) => {
    return (
        <label
            {...props}
            className={`btn button-container-dark transform duration-300 ${className}`}
        >
            {children}
        </label>
    );
};

export default AnimatedButton;