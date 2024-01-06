import React from 'react';

const GlowingBall = () => {
    return (
        <>
            {/* Glowing ball css effect  */}
            <div className='absolute top-0 left-0 bottom-0 right-0'>
                <div className="glowing">
                    <span style={{ '--i': 1 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 3 }}></span>
                    <span style={{ '--i': 3 }}></span>
                </div>
                <div className="glowing">
                    <span style={{ '--i': 1 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 3 }}></span>
                    <span style={{ '--i': 3 }}></span>
                </div>

                <div className="glowing">
                    <span style={{ '--i': 1 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 3 }}></span>
                    <span style={{ '--i': 3 }}></span>
                </div>

                <div className="glowing">
                    <span style={{ '--i': 1 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 3 }}></span>
                    <span style={{ '--i': 3 }}></span>
                </div>
            </div></>
    );
};

export default GlowingBall;