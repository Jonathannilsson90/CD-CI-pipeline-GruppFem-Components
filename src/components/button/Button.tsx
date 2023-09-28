import React from 'react'
import './button.css'

interface ButtonProps {
label: string;
onClick?: () => void;
type?: string;
}
const Button = ({label, onClick}:ButtonProps) => {
return <button onClick={onClick} className='buttonOne'>{label}</button>;

}

export default Button;