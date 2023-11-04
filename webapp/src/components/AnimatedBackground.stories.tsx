import type { Meta, StoryFn } from "@storybook/react";
import { AnimatedBackground } from "./AnimatedBackground";

const meta = {
  title: "Components/AnimatedBackground",
} satisfies Meta;

export default meta;

const Template: StoryFn = () => <AnimatedBackground />;

export const AnimatedBackgroundStory = Template.bind({});

AnimatedBackgroundStory.args = {};
AnimatedBackgroundStory.storyName = "AnimatedBackground";
