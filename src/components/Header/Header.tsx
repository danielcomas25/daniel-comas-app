import React, { useState } from "react";


const Layout = ( ) => {
    return(
        <div className="App-header">
            <br/>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div style= { {marginRight: '2vh', fontSize: '1.5vh', fontWeight: 'bold'}}> <code> About me </code> </div>
                <div style= { {marginRight: '2vh', fontSize: '1.5vh', fontWeight: 'bold'}}> <code> Experience </code> </div>
                <div style= { {marginRight: '2vh', fontSize: '1.5vh', fontWeight: 'bold'}}> <code> Formation </code> </div>
            </div>
            <br/>
        </div>
    );
};

export default Layout;