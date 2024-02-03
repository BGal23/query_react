//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  //<QueryClientProvider client={queryClient}>
  <BrowserRouter basename="/query_react">
    <App />
  </BrowserRouter>
  //<ReactQueryDevtools />
  //</QueryClientProvider>
  //</React.StrictMode>
);
