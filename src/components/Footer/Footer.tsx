import React from "react";
import navigationData from '../../data/navigation.json';
import './Footer.css';

const Footer = () => {
    return (
        <footer data-testid="app-footer" className="bg-gray-800 p-6 sticky top-[100vh] text-white">
            <div className="container grid grid-cols-1 lg:grid-cols-3">
                <nav role="nav">
                    <div data-testid="nav-content" id="nav-content" className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0`}>
                        <ul className="list-reset lg:flex justify-end flex-1 flex-col">
                            {
                                navigationData.map((link) => {
                                    return (
                                        <li className="mr-3" key={link.text}>
                                            <a className="inline-block py-2 px-4 text-white no-underline" href={link.url} target={link.target}>{link.text}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
            
            <div className="text-center py-3">
                <p>Copyright Luke Wale</p>
            </div>
        </footer>
    );
    
}

export default Footer;