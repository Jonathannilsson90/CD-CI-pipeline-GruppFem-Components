import React from 'react'
import './footer.css'

interface FooterProps {
    h1: string;
}

const Footer = ({h1}: FooterProps) => {
    return <footer className='Footer'>
        <h1>{h1}</h1>
        <div className="star">
            <ul>
                <h3 className='link-title'><strong>Usefull links</strong></h3>
                <div className='link-list'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contacts</li>
                </div>
            </ul>
        </div>
    </footer>;  
}

export default Footer;