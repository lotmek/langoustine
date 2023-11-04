import type { Meta, StoryFn } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta;

export default meta;

const Template: StoryFn = (args) => <Button>{args.label}</Button>;

export const ButtonStory = Template.bind({});

ButtonStory.args = {
  label: "Test",
};
ButtonStory.storyName = "Button";
