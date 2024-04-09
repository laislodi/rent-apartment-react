import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import * as React from "react";
import { AppLayout } from "./views/AppLayout";
import { HomePage } from "./views/HomePage";
import { LoginPage } from "./views/LoginPage";
import { PageNotFound } from "./views/PageNotFound";
import { ROUTE_CONSTANTS } from "./resources/routes";
import { Apartments } from "./views/Apartments";
import { SignupPage } from "./views/SignupPage";
import { AuthProvider } from "./utils/AuthContext";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AppLayout/>} >
              <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
              <Route path={ROUTE_CONSTANTS.LOGIN} element={<LoginPage />} />
              <Route path={ROUTE_CONSTANTS.SIGNUP} element={<SignupPage />} />
              <Route path={ROUTE_CONSTANTS.APARTMENTS} element={<Apartments />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

