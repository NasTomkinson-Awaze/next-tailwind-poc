import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./typography.tsx";

const meta = {
  title: "Desgin System / Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "select", options: ["sm", "md", "lg"] } },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultType: Story = {};
