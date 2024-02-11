import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="border border-gray-300 rounded-xl mb-4">
            <div
                className="flex justify-between items-center px-4 py-2 cursor-pointer select-none"
                onClick={() => setIsActive(!isActive)}
            >
                <div className="flex items-center">
                    <span className="mr-2">{isActive ? '×' : '+'}</span>
                    <span className="font-semibold">{title}</span>
                </div>
            </div>
            {isActive && (
                <div className={` border-gray-300 px-4 py-2`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
