import React from 'react'
import './Footer.css'

interface FooterProps {
    h1: string;
}

const Footer = ({h1}: FooterProps) => {
    return <footer className='header'>
        <h1>{h1}</h1>
    </footer>;  
}

export default Footer;