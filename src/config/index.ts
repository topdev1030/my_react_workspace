const ENV = process.env.REACT_APP_ENV || process.env.NODE_ENV || "dev";

const getConfig = () => {
  switch (ENV) {
    case "prod":
      return {
        api: {
          baseUrl: "https://api.omegablack.io/api/v1",
          mode: "prod",
          timeout: 60000,
        },
        auth0: {
          baseUrl: "https://omegablackprod.us.auth0.com",
          audienceAuth0: "https://omegablackprod.us.auth0.com/api/v2/",
          clientSecretForApi:
            "6PQ3fDESmiOP8VM8EWCTM8nv0eTVO4LcPfOS0TeLwSMG1_rXulTUMS5i36iBrPxD",
          grantType: "client_credentials",
          clientIdForApi: "FcqCXAVnCrprPbh9v9YsKvZgrymGV3OA",
          domain: "auth.omegablack.io",
          audience: "https://api.omegablack.com",
          clientId: "A3DED3rNHpadmZkuB1btBv3y2ZQTVWVx",
          redirectUri: `${window.location.origin}/dashboard`,
          returnTo: window.location.origin,
          adminOrgId: "org_A3BEfTZqa0m8e5sc",
        },
        azure: {
          storageAccountName: "omegablack",
        },
        reCaptcha: {
          siteKey: "6LehwBApAAAAAOGHYJyMxfRtuEQHyq3LbqbSRXmQ",
        },
      };
    case "dev":
      return {
        api: {
          baseUrl: "https://dev.api.omegablack.io/api/v1",
          mode: "dev",
          timeout: 60000,
        },
        auth0: {
          baseUrl: "https://omegablackdev.us.auth0.com",
          audienceAuth0: "https://omegablackdev.us.auth0.com/api/v2/",
          clientSecretForApi:
            "qyJ6kI3XKiA9TxhfcbfrtEfIm1TuabXqohWC0Lsc7pw789lJJLjKBTWk3v-1OxE4",
          grantType: "client_credentials",
          clientIdForApi: "k2fU59jePY7Hf1VxOYHvB5gLWhkKS4e0",
          domain: "omegablackdev.us.auth0.com",
          audience: "https://api.omegablackdev.com",
          clientId: "QZFGRtokDfYDBSSNED4BHPfrnGjvdiee",
          redirectUri: `${window.location.origin}/dashboard`,
          returnTo: window.location.origin,
          adminOrgId: "org_BJE2cFSsdptLybDe",
        },
        azure: {
          storageAccountName: "devomegablack",
        },
        reCaptcha: {
          siteKey: "6LehwBApAAAAAOGHYJyMxfRtuEQHyq3LbqbSRXmQ",
        },
      };
    case "local":
    default:
      return {
        api: {
          baseUrl: "http://192.168.1.126:8080/api/v1",
          mode: "local",
          timeout: 60000,
        },
        auth0: {
          baseUrl: "https://omegablackdev.us.auth0.com",
          audienceAuth0: "https://omegablackdev.us.auth0.com/api/v2/",
          clientSecretForApi:
            "qyJ6kI3XKiA9TxhfcbfrtEfIm1TuabXqohWC0Lsc7pw789lJJLjKBTWk3v-1OxE4",
          grantType: "client_credentials",
          clientIdForApi: "k2fU59jePY7Hf1VxOYHvB5gLWhkKS4e0",
          domain: "omegablackdev.us.auth0.com",
          audience: "https://api.omegablackdev.com",
          clientId: "QZFGRtokDfYDBSSNED4BHPfrnGjvdiee",
          redirectUri: `${window.location.origin}/dashboard`,
          returnTo: window.location.origin,
          adminOrgId: "org_BJE2cFSsdptLybDe",
        },
        azure: {
          storageAccountName: "devomegablack",
        },
        reCaptcha: {
          siteKey: "6LehwBApAAAAAOGHYJyMxfRtuEQHyq3LbqbSRXmQ",
        },
      };
  }
};

export default getConfig();
