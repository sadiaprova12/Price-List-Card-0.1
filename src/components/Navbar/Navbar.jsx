// eslint-disable-next-line no-unused-vars
import { list } from 'postcss';
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Navbar = () => {

    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 4,
            name: 'Products',
            path: '/products'
        },
        {
            id: 5,
            name: 'Services',
            path: '/services'
        }
    ];
    return (
        <nav>
            <ul>
                {
                    // eslint-disable-next-line react/jsx-key
                    routes.map(route => <li>{route.name}</li>)
                }
            </ul>     
        </nav>
    );
};

export default Navbar;