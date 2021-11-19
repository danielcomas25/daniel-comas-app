import React from "react";

const AboutMe = () => {
    return(
        <>
        <div className={"App-academic-title"} style={{fontSize: '4vh', fontWeight: 'bolder', marginLeft:'27vh', display: 'flex', justifyContent: 'left'}} > <code> About me </code></div>
        <br/>
        <code style={{marginRight: '1vh', maxWidth: '120vh', display: 'flex', textAlign: 'start', flexDirection: 'column', marginLeft:'27vh', fontSize: '2vh'}}> Hello, my name is Daniel Comas and I like to build software in general for living. My interest in software
            started when I was studying electronic engineeering back in Venezuela. By them, I had courses related to Algorithms and
            Computer Architecture. Afterwards, I decided to do my master in Computer Science in Telecom SudParis where I learn many things
            abouter development and software architectures. Then I decided to start my professional career in Adomik as a backend software engineer.
        </code>
        <br/>
        <br/>
        </>
    )
}
export default AboutMe;