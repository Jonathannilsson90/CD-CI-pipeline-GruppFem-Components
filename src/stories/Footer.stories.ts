import type { Meta, StoryObj } from "@storybook/react";
import Footer from "../components/footer/footer";

const meta: Meta<typeof Footer> = {
  title: "Footer/footer",
  component: Footer
};
export default meta;

type story = StoryObj<typeof meta>;
export const Default: story = {
  args: {
    
  },
};