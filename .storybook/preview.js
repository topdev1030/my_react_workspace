import { ConfigProvider } from "antd";
import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";

// theme
import { theme } from "../src/theme";

// styles
import "antd/dist/reset.css";
import "../src/index.css";

const themeOptions = [
  {
    name: "light",
    value: theme.colors.colorBrandWhite
  },
  {
    name: "dark",
    value: theme.colors.colorPrimaryBg
  }
];

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <ConfigProvider
          theme={{
            token: {
              ...theme.colors,
              fontFamily: "Poppins",
            },
          }}
        >
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    );
  }
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: {
      mobile: {
        name: "sm – mobile",
        styles: {
          width: "320px",
          height: "568px"
        },
        type: "mobile"
      },
      tablet1: {
        name: "md – tablet",
        styles: {
          height: "1024px",
          width: "768px"
        },
        type: "tablet"
      },
      tablet2: {
        name: "lg – tablet",
        styles: {
          height: "1024px",
          width: "1024px"
        },
        type: "tablet"
      },
      desktop1: {
        name: "xl – desktop",
        styles: {
          height: "1024px",
          width: "1280px"
        },
        type: "desktop"
      },
      desktop2: {
        name: "xxl – desktop",
        styles: {
          height: "1024px",
          width: "1440px"
        },
        type: "desktop"
      }
    }
  },
  backgrounds: {
    default: "dark",
    values: themeOptions
  }
};
