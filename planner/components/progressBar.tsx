import React, { useState, useEffect } from 'react';

interface progressBarProps {
    sharedProgress: number
};

const ProgressBar: React.FC<progressBarProps> = ({ sharedProgress }) => {


    return (
        <div className='border-t border-gray-300 w-full h-2'>
            <div className='bg-green-500 h-1' style={{ width: `${sharedProgress}%` }}>
            </div>
        </div>
    );
};

export default ProgressBar;
