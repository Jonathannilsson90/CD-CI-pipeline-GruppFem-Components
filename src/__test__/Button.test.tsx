import React from "react";
import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Button from "../components/button/Button"


describe("Given:", () =>{
    test("Should render button component", () => {
        render(<Button label="Hello Jest Test!"/>)
        const buttonElement = screen.getByRole("button");
        console.log(buttonElement);  
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("Hello Jest Test!");
        expect(buttonElement).toHaveClass("buttonOne");
    })
})
