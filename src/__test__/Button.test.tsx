import React from "react";
import {render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom'
import Button from "../components/button/Button"


describe("Given:", () =>{

    const handleClickMock = jest.fn();


    test("Should render button component", () => {

        render(<Button label="Hello Jest Test!" onClick={handleClickMock}/>)

        const buttonElement = screen.getByRole("button");
        console.log(buttonElement);  

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("Hello Jest Test!");
        expect(buttonElement).toHaveClass("buttonOne");

        fireEvent.click(buttonElement);
        expect(handleClickMock).toHaveBeenCalledTimes(1);
    })
})
