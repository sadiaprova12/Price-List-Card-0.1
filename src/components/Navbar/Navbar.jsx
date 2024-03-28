// eslint-disable-next-line no-unused-vars
import { list } from 'postcss';
// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import Link from './Link/Link';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
const Navbar = () => {

    // eslint-disable-next-line no-undef
    const [open, setOpen] = useState(false);
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
             <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ?
                            <XMarkIcon className="h-6 w-6 text-purple-500" />
                            : <Bars3Icon className="h-6 w-6 text-purple-500" />
                    }
                </span>
            </div>
            <ul className='md:flex'>
                {
                    // eslint-disable-next-line react/jsx-key
                    routes.map(route => <Link 
                        key={route.id}
                        route={route}
                        ></Link>)
                }
            </ul>     
        </nav>
    );
};

export default Navbar;