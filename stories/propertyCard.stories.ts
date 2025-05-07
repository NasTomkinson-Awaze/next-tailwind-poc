import type { Meta, StoryObj } from "@storybook/react";

import { PropertyCard } from "/app/composites/PropertyCard";

const meta = {
  title: "Compositions / Property Card",
  component: PropertyCard,
  tags: ["autodocs"],
} satisfies Meta<typeof PropertyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultType: Story = {};
