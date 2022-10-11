import type { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "phosphor-react";
import { Button, ButtonProps } from "@ignite-ui/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
