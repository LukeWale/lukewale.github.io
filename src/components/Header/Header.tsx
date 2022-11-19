import React, { useState } from "react";
import navigationData from '../../data/navigation.json';
import './Header.css';
import logoImage from '../../assets/images/logo.png';

function Header() {

    const [navigationToggle, setNavigationToggle] = useState(false);

    const toggleNavigation = () => {
        setNavigationToggle(current => !current);
    }

    return (
        <header data-testid="app-header">
            <nav role="nav" className=" bg-gray-800 fixed w-full z-10 top-0">
                <div className="flex items-center justify-between flex-wrap container p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <div className="block p-1" data-testid="header-logo">
                            <img className="w-10" src={logoImage} data-testid="logoImg" alt=""/>
                        </div>
                        <a href="#" className="text-white no-underline hover:text-white hover:no-underline">
                            <span className="text-2xl pl-2">Luke Wale</span>
                        </a>
                    </div>

                    <div className="block lg:hidden">
                        <button data-testid="toggleMenuButton" id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white  hover:border-white"
                            onClick={toggleNavigation}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>

                    <div data-testid="nav-content" id="nav-content" className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${ !navigationToggle ? 'hidden' : '' } lg:block pt-6 lg:pt-0`}>
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
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
                </div>
            </nav>
        </header>
    ) 
}

export default Header;