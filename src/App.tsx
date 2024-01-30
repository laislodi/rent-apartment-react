
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import * as React from "react";
import { AppLayout } from "./views/app-layout";
import { HomePage } from "./views/home-page";
import { LoginPage } from "./views/login-page";
import { PageNotFound } from "./views/page-not-found";
import { ROUTE_CONSTANTS } from "./resources/routes";
import { Apartments } from "./views/apartments";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout/>} >
            <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
            <Route path={ROUTE_CONSTANTS.LOGIN} element={<LoginPage />} />
            <Route path={ROUTE_CONSTANTS.APARTMENTS} element={<Apartments />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

