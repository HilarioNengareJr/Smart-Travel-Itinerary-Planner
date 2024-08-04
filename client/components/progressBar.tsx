import React, { useState, useEffect } from 'react';

interface progressBarProps {
    sharedProgress: number
};

const ProgressBar: React.FC<progressBarProps> = ({ sharedProgress }) => {


    return (
        <div className='border-t border-gray-300 w-full h-3'>
            <div className='bg-gray-300 h-3' style={{ width: `${sharedProgress}%` }}>
            </div>
        </div>
    );
};

export default ProgressBar;
