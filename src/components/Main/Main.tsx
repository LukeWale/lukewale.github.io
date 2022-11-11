import React, {useState} from "react";
import Repos from "../Repos/Repos";

import logoImage from '../../assets/images/logo-animation.gif';

const Main = () => {
    return (
        <main data-testid="app-main" className="pt-24">
            <div className="container p-6">
                <div className="text-center">
                    <img src={logoImage} alt="" className="mx-auto" data-testid="introImage" />
                </div>
                <div className="text-center py-5">
                    <h1>About me</h1>
                    <p>I'm interested in making things happen... I've done all the static sites, I've done the modifications to others systems, I've done the custom wordpress plugins... now I'm excited for building my own things. After working for multiple employers for long periods of time I'd love to be able to have my own portfolio of things I've enjoyed doing... If you can't see things here it is likely I have them set to private repos, don't worry!</p>
                    <p>I'm currently focusing on JS, React, APIs, etc.</p>
                    <p>Over time I will be making little snippets public, so check below for updates!</p>
                </div>
                
                
                <Repos />
            </div>
        </main>
    );
}

export default Main;