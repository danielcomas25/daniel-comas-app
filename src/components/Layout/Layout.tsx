import React, { ReactChild } from "react";

import { Link } from 'react-router-dom';


const Layout = ( ) => {
    return(
        <div className="App-header">
            <header>
                {/* <Link to='/' className={"App-link"}> Home</Link> */}
                <span>
                    <a
                    className="App-link"
                    href="https://www.linkedin.com/in/daniel-comas-aa9a5896/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    LinkedIn
                    </a>
                </span>
        <span>
            <a
            className="App-link"
            href="https://github.com/danielcomas25"
            target="_blank"
            rel="noopener noreferrer"
            >
            GitHub
            </a>
        </span>
            </header>
        </div>
    );
};

export default Layout;