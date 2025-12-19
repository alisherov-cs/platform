import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Login } from "./Login.jsx";
import { Admin } from "./Admin.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ConfigProvider, App as AntApp } from "antd";
import { AuthGuard } from "./Guard.jsx";
import { MessageProvider } from "./provider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            element={
              <ConfigProvider>
                <AntApp>
                  <MessageProvider>
                    <Outlet />
                  </MessageProvider>
                </AntApp>
              </ConfigProvider>
            }
          >
            <Route path="/auth/login" element={<Login />} />
            <Route path="/admin" element={<AuthGuard />}>
              <Route path="/admin/" element={<Admin />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
