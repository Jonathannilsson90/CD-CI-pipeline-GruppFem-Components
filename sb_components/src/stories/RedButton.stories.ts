import RedButton from "../components/redButton/RedButton"
import type { Meta, StoryObj } from "@storybook/react"


const meta:Meta<typeof RedButton> = {
    title: "RedButton/button",
    component: RedButton

}
export default meta

type story = StoryObj<typeof meta>

export const Default: story = {
    args: {
        variant: 'red'
    }
}

