/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types, no-unused-vars
const Link = ({route}) => {
    return (
        <li className='mr-12'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;