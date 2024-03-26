import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import store from "..//../redux";
import { AuthProvider } from "react-auth-kit";

interface Providertype {
  children: React.ReactNode;
}

const ProviderConfig: FC<Providertype> = ({ children }) => {
  const client = new QueryClient();
  return (
    <BrowserRouter>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <ConfigProvider>
          <QueryClientProvider client={client}>
            <ReactQueryDevtools />
            <Provider store={store}>{children}</Provider>
          </QueryClientProvider>
        </ConfigProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default ProviderConfig;
