import { LogLevel } from "@azure/msal-browser"; //MIT LICENSE < https://github.com/AzureAD/microsoft-authentication-library-for-js >

export const msalConfig = {
  auth: {
    clientId: "cb6ba756-3724-488a-9af4-c302662a1f71", // e.g. "70258689-8a4e-410f-a300-cb2011f23cf3"
    authority: "https://login.windows.net/46cd9aae-0d0e-45e1-83b5-154b8efeb92f", //e.g. "https://login.windows.net/4d67e6d4-78f7-438b-8e40-7e408dcfa0ca"
    redirectUri: "https://intunedriverinteg.azurewebsites.net",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
        }
      },
    },
  },
};

export const wufbRequest = {
  scopes: [
    "00000003-0000-0000-c000-000000000000/WindowsUpdates.ReadWrite.All",
    "User.Read",
  ],
};

export const userFeedbackRequest = {
  scopes: ["User.Read"],
};
