import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navigation } from "./components/Navigation";
import { DomainBanner } from "./components/DomainBanner";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Sentinel from "./pages/Sentinel";
import Intelligence from "./pages/Intelligence";
import Signal001 from "./pages/Signal001";
import Signal002 from "./pages/Signal002";
import Signal003 from "./pages/Signal003";
import Signal004 from "./pages/Signal004";
import Signal005 from "./pages/Signal005";
import Signal006 from "./pages/Signal006";
import Signal007 from "./pages/Signal007";
import Signal008 from "./pages/Signal008";
import Signal009 from "./pages/Signal009";
import Signal010 from "./pages/Signal010";
import Signal011 from "./pages/Signal011";
import Signal012 from "./pages/Signal012";
import Signal013 from "./pages/Signal013";
import Signal014 from "./pages/Signal014";
import Signal015 from "./pages/Signal015";
import Signal016 from "./pages/Signal016";
import Signal017 from "./pages/Signal017";
import Signal018 from "./pages/Signal018";
import Signal019 from "./pages/Signal019";
import Signal020 from "./pages/Signal020";
import Signal021 from "./pages/Signal021";
import Signal022 from "./pages/Signal022";
import Signal023 from "./pages/Signal023";
import SearchResults from "./pages/SearchResults";
import About from "./pages/About";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import NewsArticle001 from "./pages/NewsArticle001";
import NewsArticle002 from "./pages/NewsArticle002";
import NewsArticle003 from "./pages/NewsArticle003";
import NewsArticle004 from "./pages/NewsArticle004";
import NewsArticle005 from "./pages/NewsArticle005";
import NewsArticle006 from "./pages/NewsArticle006";
import NewsArticle007 from "./pages/NewsArticle007";
import NewsArticle008 from "./pages/NewsArticle008";
import NewsArticle009 from "./pages/NewsArticle009";
import NewsArticle010 from "./pages/NewsArticle010";
import NewsArticle011 from "./pages/NewsArticle011";
import NewsArticle012 from "./pages/NewsArticle012";
import NewsArticle013 from "./pages/NewsArticle013";
import NewsArticle014 from "./pages/NewsArticle014";
import NewsArticle015 from "./pages/NewsArticle015";
import NewsArticle016 from "./pages/NewsArticle016";
import NewsArticle017 from "./pages/news/NewsArticle017";
import NewsArticle018 from "./pages/news/NewsArticle018";
import NewsArticle019 from "./pages/news/NewsArticle019";
import Premium from "./pages/Premium";
import GCCMap from "./pages/GCCMap";
import Changelog from "./pages/Changelog";
import ShortLinkRedirect from "./pages/ShortLinkRedirect";
import ShortLinksManager from "./pages/ShortLinksManager";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import DomainInquiries from "./pages/DomainInquiries";
import Contact from "./pages/Contact";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <Navigation />
      <DomainBanner />
      <Switch>
          <Route path="/" component={Home} />
          <Route path="/search" component={SearchResults} />
        <Route path={"/directory"} component={Directory} />
        <Route path={"/sentinel"} component={Sentinel} />
        <Route path={"/intelligence"} component={Intelligence} />
        <Route path={"/signals/001"} component={Signal001} />
        <Route path={"/signals/002"} component={Signal002} />
        <Route path={"/signals/003"} component={Signal003} />
      <Route path={"/signals/004"} component={Signal004} />
      <Route path={"/signals/005"} component={Signal005} />
      <Route path={"/signals/006"} component={Signal006} />
      <Route path={"/signals/007"} component={Signal007} />
      <Route path={"/signals/008"} component={Signal008} />
      <Route path={"/signals/009"} component={Signal009} />
      <Route path={"/signals/010"} component={Signal010} />
      <Route path={"/signals/011"} component={Signal011} />
      <Route path={"/signals/012"} component={Signal012} />
      <Route path={"/signals/013"} component={Signal013} />
      <Route path={"/signals/014"} component={Signal014} />
      <Route path={"/signals/015"} component={Signal015} />
      <Route path={"/signals/016"} component={Signal016} />
      <Route path={"/signals/017"} component={Signal017} />
      <Route path={"/signals/018"} component={Signal018} />
      <Route path={"/signals/019"} component={Signal019} />
      <Route path={"/signals/020"} component={Signal020} />
      <Route path={"/signals/021"} component={Signal021} />
      <Route path={"/signals/022"} component={Signal022} />
      <Route path={"/signals/023"} component={Signal023} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path="/investors" component={About} />
      <Route path={"/news"} component={News} />
        <Route path={"/news/001"} component={NewsArticle001} />
        <Route path={"/news/002"} component={NewsArticle002} />
        <Route path={"/news/003"} component={NewsArticle003} />
        <Route path={"/news/004"} component={NewsArticle004} />
        <Route path={"/news/005"} component={NewsArticle005} />
        <Route path={"/news/006"} component={NewsArticle006} />
        <Route path={"/news/007"} component={NewsArticle007} />
        <Route path={"/news/008"} component={NewsArticle008} />
        <Route path={"/news/009"} component={NewsArticle009} />
        <Route path={"/news/010"} component={NewsArticle010} />
        <Route path={"/news/011"} component={NewsArticle011} />
        <Route path={"/news/012"} component={NewsArticle012} />
        <Route path={"/news/013"} component={NewsArticle013} />
        <Route path={"/news/014"} component={NewsArticle014} />
        <Route path={"/news/015"} component={NewsArticle015} />
        <Route path={"/news/016"} component={NewsArticle016} />
        <Route path={"/news/017"} component={NewsArticle017} />
        <Route path={"/news/018"} component={NewsArticle018} />
        <Route path={"/news/019"} component={NewsArticle019} />
        <Route path={"/news/:id"} component={NewsArticle} />
         <Route path="/premium" component={Premium} />
         <Route path={"/gcc-map"} component={GCCMap} />
        <Route path={"/changelog"} component={Changelog} />
        <Route path={"/s/:slug"} component={ShortLinkRedirect} />
        <Route path={"/admin/short-links"} component={ShortLinksManager} />
        <Route path={"/admin/analytics"} component={AnalyticsDashboard} />
        <Route path={"/admin/domain-inquiries"} component={DomainInquiries} />
        <Route path={"*"} component={NotFound} />
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
