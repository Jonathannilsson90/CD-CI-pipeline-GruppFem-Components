import React from 'react'
import './footer.css'

interface FooterProps {
    div: string;
}

const Footer = ({div}: FooterProps) => {
    return <footer className='Footer'>
   
        <div className="star">{div}
            <div>
                <ul>
                    <h5 className='link-title'>Usefull links</h5>
                    <h6 className='link-list'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </h6>
                </ul>
            </div>
            <div className='search-bar'>
                <input type="text" placeholder='Enter email'/>
                <button className='submit-btn'>Subscribe</button>
            </div>
            <div className='Contact'>
                <ul>
                <h5>Contact</h5>
                <h6 className='Contact'>
                    <li>Isafjordsgatan 30A, 164 40 Kista</li>
                    <li>075624178</li>
                </h6>
                </ul>
            </div>

        </div>
    </footer>;  
}

export default Footer;