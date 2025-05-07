import type { Meta, StoryObj } from "@storybook/react";

import { Spacing } from "./spacing.tsx";

const meta = {
  title: "Desgin System / Spacing",
  component: Spacing,
  tags: ["autodocs"],
} satisfies Meta<typeof Spacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultType: Story = {};
