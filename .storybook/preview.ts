import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        "cottages.com": "cottages.com",
        hoseasons: "hoseasons",
        novasol: "novasol",
      },
      defaultTheme: "cottages.com",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
