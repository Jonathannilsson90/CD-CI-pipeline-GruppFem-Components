import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/button/Button";

const meta: Meta<typeof Button> = {
  title: "Clickable/Button",
  component: Button,
};
export default meta;

type story = StoryObj<typeof meta>;
export const Default: story = {
  args: {
    label: "Hejsan",
  },
};
