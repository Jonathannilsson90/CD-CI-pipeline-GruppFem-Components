import type { Meta, StoryObj } from "@storybook/react";

import Header from "../components/header/Header";

const meta: Meta<typeof Header> = {
  title: "Header/Header",
  component: Header,
};
export default meta;

type story = StoryObj<typeof meta>;
export const Default: story = {
  args: {
    h1: "Fun Days of the Week Activities",
    h2: "Weekly Activities Planner",
  },
};