import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navigation } from "./components/Navigation";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Sentinel from "./pages/Sentinel";
import Intelligence from "./pages/Intelligence";
import Signal001 from "./pages/Signal001";
import Signal002 from "./pages/Signal002";
import Signal003 from "./pages/Signal003";
import Signal004 from "./pages/Signal004";
import Signal005 from "./pages/Signal005";
import Investors from "./pages/Investors";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/directory"} component={Directory} />
        <Route path={"/sentinel"} component={Sentinel} />
        <Route path={"/intelligence"} component={Intelligence} />
        <Route path={"/signals/001"} component={Signal001} />
        <Route path={"/signals/002"} component={Signal002} />
        <Route path={"/signals/003"} component={Signal003} />
      <Route path={"/signals/004"} component={Signal004} />
      <Route path={"/signals/005"} component={Signal005} />
        <Route path={"/investors"} component={Investors} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
