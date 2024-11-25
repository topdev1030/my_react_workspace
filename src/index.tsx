import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-jss";
import { Provider as ReduxProvider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { ConfigProvider } from "antd";

// store
import { store } from "@/redux";

// theme
import { theme } from "@/theme";

// config
import config from "@/config";

// components
import App from "./App";

// styles
import "antd/dist/reset.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain={config.auth0.domain}
    clientId={config.auth0.clientId}
    authorizationParams={{
      redirect_uri: config.auth0.redirectUri,
      audience: config.auth0.audience,
    }}
  >
    <ThemeProvider theme={theme}>
      <ConfigProvider
        theme={{
          token: {
            ...theme.colors,
            fontFamily: "DM Sans",
          },
        }}
      >
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </ConfigProvider>
    </ThemeProvider>
  </Auth0Provider>
);
