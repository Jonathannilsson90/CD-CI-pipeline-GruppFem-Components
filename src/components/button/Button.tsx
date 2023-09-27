import React from 'react'
import './button.css'
//test för bot
interface ButtonProps {
label: string;
}
const Button = ({label}:ButtonProps) => {
return <button className='buttonOne'>{label}</button>;

}

export default Button;