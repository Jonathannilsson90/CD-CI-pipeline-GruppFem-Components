import React from 'react'
import './header.css'

interface HeaderProps {
    h1: string;
    h2: string;
}

const Header = ({h1, h2}: HeaderProps) => {
    return <header className='header'>
        <h1>{h1}</h1>
        <h2>{h2}</h2>
    </header>;  
}

export default Header;