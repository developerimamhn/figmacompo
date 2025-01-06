"use client";

import React from 'react'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
// import CopyFigmaComponentButton from '../clipbutton/copyFigmaToClipboard';




const Body = () => {
    return (
        <div>
            <Page1/>
            <Page2/>
            <Page3/>
            {/* <CopyFigmaComponentButton /> */}
        </div>
    );
};

export default Body;