// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";
// import { BrowserRouter } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Toaster />
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import App from "./App.tsx";

// ✅ Create a single Query Client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // Cached for 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      retry: 0,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
