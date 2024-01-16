
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { AppLayout } from "./views/app-layout";
import { HomePage } from "./views/home-page";
import { LoginPage } from "./views/login-page";
import { PageNotFound } from "./views/page-not-found";
import {ROUTE_CONSTANTS} from "./resources/routes";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>} >
          <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
          <Route path={ROUTE_CONSTANTS.LOGIN} element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

