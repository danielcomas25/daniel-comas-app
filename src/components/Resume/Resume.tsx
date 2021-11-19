import React from "react";

import { Link } from 'react-router-dom';


const Resume = () => {
    return(
        <>
        <div className="App-resume">
            <br/>
            <br/>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <p style={{marginRight: '1vh', width: '50vh', display: 'flex', textAlign: 'start', flexDirection: 'column'}}>
                <code style={{fontSize: '3.5vh'}}>Hi, my name is Daniel </code>
                <br/>
                <code style={{fontSize: '1.5vh'}}> I am a software engineer specialized in backend development. Currently, my main interests are data pipeline design and distributed systems.</code>
                </p>
                <img src={"https://media-exp1.licdn.com/dms/image/C4D03AQGSe5jEb7uXxw/profile-displayphoto-shrink_800_800/0/1636461941772?e=1642636800&v=beta&t=BKics0Kwdd6wuRaUVlz4-qkh9Vc68Kkro1UqthN_goY"} className="App-logo" alt="logo" />
            </div>
        </div>
        <br/>
        <br/>
        </>
    );
};

export default Resume;