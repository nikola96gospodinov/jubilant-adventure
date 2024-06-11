import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/index";
import { Main } from "./main";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

const root = createRoot(document.getElementById("root")!);
root.render(
  <QueryClientProvider client={queryClient}>
    <Main />
  </QueryClientProvider>
);
