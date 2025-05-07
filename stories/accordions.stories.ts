import type { Meta, StoryObj } from "@storybook/react";

import { Accordions } from "/app/composites/accordions";

const meta = {
  title: "Compositions / Accordions",
  component: Accordions,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultType: Story = {};
