
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import TrVesperHome from "./pages/TrVesperHome";
import TrVesperServices from "./pages/TrVesperServices";
import TrVesperTeam from "./pages/TrVesperTeam";
import TrVesperContacts from "./pages/TrVesperContacts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrVesperHome />} />
          <Route path="/services" element={<TrVesperServices />} />
          <Route path="/team" element={<TrVesperTeam />} />
          <Route path="/contacts" element={<TrVesperContacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
