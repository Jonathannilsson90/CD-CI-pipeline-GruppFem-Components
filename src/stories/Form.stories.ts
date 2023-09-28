import type { Meta, StoryObj } from "@storybook/react";

import Form from "../components/form/Form";

const meta: Meta<typeof Form> = {
  title: "forms/basic",
  component: Form,
};
export default meta;

type story = StoryObj<typeof meta>;
export const Default: story = {
  args: {

  },
};

