import React, { useState } from "react";

import { Link } from 'react-router-dom';

interface Selector {
    selector: String
}

const Academic = () => {

    const [ academicData, setAcademicData] = useState<Selector>({selector: 'master'})

    return(
        <>
        <br/>
        <br/>
        <div className={"App-academic-title"} style={{fontSize: '4vh', fontWeight: 'bolder', display: 'flex', justifyContent:'left', marginLeft:'27vh' }} > <code> Academic Formation </code></div>
            <br/>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <img src={ academicData.selector === 'master' ? 'https://yt3.ggpht.com/ytc/AKedOLSMEoFIUvq8u7RnjnwtbMb2JLOiV1CXkYAKLABE=s900-c-k-c0x00ffffff-no-rj' : 'https://lh3.googleusercontent.com/proxy/SigmqJCWz3ma6f6tTxXsMAY9fYToUjMOegNHpHnScYtaE5LuUpbvluvcdim1mMqX_xLiWvJomZoPK07sdrbQWWCqjIiAw35glBiqXOn6-OQZoSmBvR1xN7t990NjxJkqusSFS1dE'} className="Academic-logo" alt="logo"/>
                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'start', fontSize: '2vh', fontWeight: 'bold', height: '6vh', justifyContent: 'space-between', marginRight: '3vh', width: '7vh'}}>
                        <div onMouseEnter={() => setAcademicData({selector: 'master'})} style={{ fontWeight: academicData.selector === 'master' ? 'bolder' : 'normal' }}>MSC</div>
                        <div onMouseEnter={() => setAcademicData({selector: 'bachelor'})} style={{ fontWeight: academicData.selector === 'bachelor' ? 'bolder' : 'normal' }}>Bachelor</div>
                    </div>
                <div style={{width: '100vh', fontSize: '1.5vh', display: 'flex', flexDirection: 'column', textAlign: 'start', marginLeft: '2vh'}}>
                { academicData.selector === "master" ? <p style={{margin: '0'}}> 2017-2019 <br/>
                    <code>
                        <code style={{fontWeight:'bolder'}}>MsC. Computer Science for Communication Networks </code> at Telecom Sud Paris in Paris, France <br/>
                        Related Courses: Middleware for Distributed Applications, Virtualization, Human Computer Interaction
                    </code>
                </p> : <p style={{margin: '0'}}> 2012-2019 - Cum Laude <br/>
                    <code> <code style={{fontWeight:'bolder'}}>Electronic Engineering</code> at the Universidad Simon Bolivar in Caracas, Venezuela <br/> 
                        Related Courses: Control Systems, Computer Architecture, Electronic circuits
                    </code>
                </p>}
                </div>
            </div>
        </>
    );
};

export default Academic;