import React from 'react';
import logo from '../containers/logo.png';


const Navbar = ({ links }) => {
    return (
        <nav className="relative bg-light-blue top-0 left-0 right-0">

            <ul className="flex list items-center">
                <li className="mr3"><img src={logo} alt="logo"></img></li>
                {
                    links.map(link => <li className="pa3 hover-bg-black-10"><a className="no-underline white" href={`#${link}`}>{link}</a></li>)
                }
            </ul>
        </nav>
    );
}

export default Navbar;