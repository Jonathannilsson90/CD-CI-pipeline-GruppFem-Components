import React from "react";
import {render} from "@testing-library/react"

import Button from "../components/button/Button"


describe("Given:", () =>{
    test("Should render button component", () => {
        render(<Button label="Hello Jest Test!"/>)
    })
})