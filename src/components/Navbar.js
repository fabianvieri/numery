import React from 'react';

const Navbar = ({ links }) => {
    return (
        <nav className="fixed bg-transparent top-0 left-0 right-0">
            <ul className="flex list items-center ma0 pl-1">
                <div className="flex ml-auto">
                    {
                        links.map(link => <li key={link} className="pa3 hover-bg-black-10"><a className="no-underline white" href={`#${link}`}>{link}</a></li>)
                    }
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;