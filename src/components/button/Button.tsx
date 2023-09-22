import React from 'react'
import './button.css'

interface ButtonProps {
label: string;
}
const Button = ({label}:ButtonProps) => {
return <button>{label}</button>;

}

export default Button;