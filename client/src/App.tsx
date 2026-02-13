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
import Intelligence from "./pages/IntelligenceMergedPremium";
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
import Signal030 from "./pages/Signal030";
import Signal031 from "./pages/Signal031";
import Signal032 from "./pages/Signal032";
import Signal033 from "./pages/Signal033";
import Signal034 from "./pages/Signal034";
import Signal035 from "@/pages/Signal035";
import Signal036 from "@/pages/Signal036";
import Signal037 from "@/pages/Signal037";
import Signal038 from "./pages/Signal038";
import Signal039 from "./pages/Signal039";
import Signal040 from "./pages/Signal040";
import Signal041 from "./pages/Signal041";
import Signal042 from "./pages/signals/Signal042";
import Signal043 from "./pages/signals/Signal043";
import Signal044 from "./pages/signals/Signal044";
import Signal045 from "./pages/signals/Signal045";
import Signal046 from "./pages/signals/Signal046";
import Signal047 from "./pages/signals/Signal047";
import Signal048 from "./pages/signals/Signal048";
import Signal049 from "./pages/signals/Signal049";
import Signal050 from "./pages/signals/Signal050";
import Signal051 from "./pages/signals/Signal051";
import Signal052 from "./pages/signals/Signal052";
import Signal053 from "./pages/signals/Signal053";
import Signal054 from "./pages/signals/Signal054";
import Signal055 from "./pages/signals/Signal055";
import Signal056 from "./pages/signals/Signal056";
import Signal057 from "./pages/signals/Signal057";
import Signal058 from "./pages/signals/Signal058";
import Signal059 from "./pages/signals/Signal059";
import Signal060 from "./pages/signals/Signal060";
import Signal061 from "./pages/signals/Signal061";
import Signal062 from "./pages/signals/Signal062";
import Signal063 from "./pages/signals/Signal063";
import Signal064 from "./pages/signals/Signal064";
import Signal065 from "./pages/signals/Signal065";
import Signal066 from "./pages/signals/Signal066";
import Signal067 from "./pages/signals/Signal067";
import Signal068 from "./pages/signals/Signal068";
import Signal069 from "./pages/signals/Signal069";
import Signal070 from "./pages/signals/Signal070";
import Signal071 from "./pages/signals/Signal071";
import Signal072 from "./pages/signals/Signal072";
import Signal073 from "./pages/signals/Signal073";
import Signal074 from "./pages/signals/Signal074";
import Signal075 from "./pages/signals/Signal075";
import Signal076 from "./pages/signals/Signal076";
import Signal077 from "./pages/signals/Signal077";
import Signal078 from "./pages/signals/Signal078";
import Signal079 from "./pages/signals/Signal079";
import Signal080 from "./pages/signals/Signal080";
import Signal081 from "./pages/signals/Signal081";
import Signal082 from "./pages/signals/Signal082";
import Signal083 from "./pages/signals/Signal083";
import Signal096 from "./pages/Signal096";
import Signal097 from "./pages/Signal097";
import Signal098 from "./pages/Signal098";
import Signal099 from "./pages/Signal099";
import Signal100 from "./pages/Signal100";
import Signal101 from "./pages/Signal101";
import Signal102 from "./pages/Signal102";
import Signal103 from "./pages/Signal103";
import Signal104 from "./pages/Signal104";
import Signal105 from "./pages/Signal105";
import Signal106 from "./pages/Signal106";
import Signal119 from "./pages/Signal119";
import Signal120 from "./pages/Signal120";
import Signal121 from "./pages/Signal121";
import Signal122 from "./pages/Signal122";
import Signal123 from "./pages/Signal123";
import Signal124 from "./pages/Signal124";
import SignalDetail from "./pages/SignalDetail";
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
import NewsArticle020 from "./pages/news/NewsArticle020";
import NewsArticle021 from "./pages/news/NewsArticle021";
import NewsArticle022 from "./pages/news/NewsArticle022";
import NewsArticle023 from "./pages/news/NewsArticle023";
import NewsArticle024 from "./pages/news/NewsArticle024";
import NewsArticle025 from "./pages/news/NewsArticle025";
import NewsArticle026 from "./pages/news/NewsArticle026";
import NewsArticle027 from "./pages/news/NewsArticle027";
import NewsArticle028 from "./pages/news/NewsArticle028";
import NewsArticle029 from "./pages/news/NewsArticle029";
import NewsArticle030 from "./pages/news/NewsArticle030";
import NewsArticle031 from "./pages/news/NewsArticle031";
import NewsArticle032 from "./pages/news/NewsArticle032";
import NewsArticle033 from "@/pages/news/NewsArticle033";
import NewsArticle034 from "@/pages/news/NewsArticle034";
import NewsArticle035 from "@/pages/news/NewsArticle035";
import NewsArticle036 from "@/pages/news/NewsArticle036";
import NewsArticle037 from "@/pages/news/NewsArticle037";
import NewsArticle038 from "@/pages/news/NewsArticle038";
import NewsArticle039 from "@/pages/news/NewsArticle039";
import NewsArticle040 from "@/pages/news/NewsArticle040";
import NewsArticle041 from "@/pages/news/NewsArticle041";
import NewsArticle042 from "@/pages/news/NewsArticle042";
import NewsArticle043 from "@/pages/news/NewsArticle043";
import NewsArticle044 from "@/pages/news/NewsArticle044";
import NewsArticle045 from "@/pages/news/NewsArticle045";
import NewsArticle046 from "@/pages/news/NewsArticle046";
import NewsArticle047 from "@/pages/news/NewsArticle047";
import NewsArticle048 from "@/pages/news/NewsArticle048";
import NewsArticle049 from "@/pages/news/NewsArticle049";
import NewsArticle050 from "@/pages/news/NewsArticle050";
import NewsArticle051 from "@/pages/news/NewsArticle051";
import NewsArticle052 from "@/pages/news/NewsArticle052";
import NewsArticle053 from "@/pages/news/NewsArticle053";
import NewsArticle054 from "@/pages/news/NewsArticle054";
import NewsArticle055 from "@/pages/news/NewsArticle055";
import NewsArticle056 from "@/pages/news/NewsArticle056";
import NewsArticle057 from "@/pages/news/NewsArticle057";
import NewsArticle058 from "@/pages/news/NewsArticle058";
import NewsArticle059 from "@/pages/news/NewsArticle059";
import NewsArticle060 from "@/pages/news/NewsArticle060";
import NewsArticle064 from "@/pages/news/NewsArticle064";
import NewsArticle065 from "@/pages/news/NewsArticle065";
import NewsArticle066 from "@/pages/news/NewsArticle066";
import NewsArticle067 from "@/pages/news/NewsArticle067";
import NewsArticle068 from "@/pages/news/NewsArticle068";
import NewsArticle069 from "@/pages/news/NewsArticle069";
import NewsArticle070 from "@/pages/news/NewsArticle070";
import NewsArticle071 from "@/pages/news/NewsArticle071";
import NewsArticle072 from "@/pages/news/NewsArticle072";
import Premium from "./pages/Premium";
import GCCMap from "./pages/GCCMap";
import Changelog from "./pages/Changelog";
import ShortLinkRedirect from "./pages/ShortLinkRedirect";
import ShortLinksManager from "./pages/ShortLinksManager";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import DomainInquiries from "./pages/DomainInquiries";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import AdminWaitlist from "./pages/AdminWaitlist";
import AdminAgentWaitlist from "./pages/AdminAgentWaitlist";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <Navigation />
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
      <Route path={"/signals/030"} component={Signal030} />
      <Route path={"/signals/031"} component={Signal031} />
      <Route path={"/signals/032"} component={Signal032} />
      <Route path={"/signals/033"} component={Signal033} />
      <Route path={"/signals/034"} component={Signal034} />
      <Route path={"/signals/035"} component={Signal035} />
      <Route path={"/signals/036"} component={Signal036} />
      <Route path={"/signals/037"} component={Signal037} />
      <Route path={"/signals/038"} component={Signal038} />
      <Route path={"/signals/039"} component={Signal039} />
      <Route path={"/signals/040"} component={Signal040} />
      <Route path={"/signals/041"} component={Signal041} />
      <Route path={"/signals/042"} component={Signal042} />
      <Route path={"/signals/043"} component={Signal043} />
      <Route path={"/signals/044"} component={Signal044} />
      <Route path={"/signals/045"} component={Signal045} />
      <Route path={"/signals/046"} component={Signal046} />
      <Route path={"/signals/047"} component={Signal047} />
      <Route path={"/signals/048"} component={Signal048} />
      <Route path={"/signals/049"} component={Signal049} />
      <Route path={"/signals/050"} component={Signal050} />
      <Route path={"/signals/051"} component={Signal051} />
      <Route path={"/signals/052"} component={Signal052} />
      <Route path={"/signals/053"} component={Signal053} />
      <Route path={"/signals/054"} component={Signal054} />
      <Route path={"/signals/055"} component={Signal055} />      <Route path={"/signals/056"} component={Signal056} />
      <Route path={"/signals/057"} component={Signal057} />      <Route path={"/signals/058"} component={Signal058} />
      <Route path={"/signals/059"} component={Signal059} />
      <Route path={"/signals/060"} component={Signal060} />
      <Route path={"/signals/061"} component={Signal061} />
      <Route path={"/signals/062"} component={Signal062} />      <Route path={"/signals/063"} component={Signal063} />
      <Route path={"/signals/064"} component={Signal064} />
      <Route path={"/signals/065"} component={Signal065} />      <Route path={"/signals/066"} component={Signal066} />
      <Route path={"/signals/067"} component={Signal067} />      <Route path={"/signals/068"} component={Signal068} />
      <Route path={"/signals/069"} component={Signal069} />      <Route path="/signals/070" component={Signal070} />
      <Route path="/signals/071" component={Signal071} />
      <Route path="/signals/072" component={Signal072} />
      <Route path="/signals/073" component={Signal073} />
      <Route path="/signals/074" component={Signal074} />
      <Route path="/signals/075" component={Signal075} />
      <Route path="/signals/076" component={Signal076} />
      <Route path="/signals/077" component={Signal077} />
      <Route path="/signals/078" component={Signal078} />
      <Route path="/signals/079" component={Signal079} />
      <Route path="/signals/080" component={Signal080} />
      <Route path="/signals/081" component={Signal081} />
      <Route path="/signals/082" component={Signal082} />
      <Route path="/signals/083" component={Signal083} />
      <Route path="/signals/096" component={Signal096} />
      <Route path="/signals/097" component={Signal097} />
      <Route path="/signals/098" component={Signal098} />
      <Route path="/signals/099" component={Signal099} />
      <Route path="/signals/100" component={Signal100} />
      <Route path="/signals/101" component={Signal101} />
      <Route path="/signals/102" component={Signal102} />
      <Route path="/signals/103" component={Signal103} />
      <Route path="/signals/104" component={Signal104} />
      <Route path="/signals/105" component={Signal105} />
      <Route path="/signals/106" component={Signal106} />
      <Route path="/signals/119" component={Signal119} />
      <Route path="/signals/120" component={Signal120} />
      <Route path="/signals/121" component={Signal121} />
      <Route path="/signals/122" component={Signal122} />
      <Route path="/signals/123" component={Signal123} />
      <Route path="/signals/124" component={Signal124} />
      <Route path="/signals/:id" component={SignalDetail} />
      <Route path="/news" component={News} />      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
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
        <Route path={"/news/020"} component={NewsArticle020} />
        <Route path={"/news/021"} component={NewsArticle021} />
        <Route path={"/news/022"} component={NewsArticle022} />
        <Route path={"/news/023"} component={NewsArticle023} />
        <Route path={"/news/024"} component={NewsArticle024} />
        <Route path={"/news/025"} component={NewsArticle025} />
        <Route path={"/news/026"} component={NewsArticle026} />
        <Route path={"/news/027"} component={NewsArticle027} />
        <Route path={"/news/028"} component={NewsArticle028} />
        <Route path={"/news/029"} component={NewsArticle029} />
        <Route path={"/news/030"} component={NewsArticle030} />
        <Route path={"/news/031"} component={NewsArticle031} />
        <Route path={"/news/032"} component={NewsArticle032} />
        <Route path={"/news/033"} component={NewsArticle033} />
        <Route path={"/news/034"} component={NewsArticle034} />
        <Route path={"/news/035"} component={NewsArticle035} />
        <Route path={"/news/036"} component={NewsArticle036} />
        <Route path={"/news/037"} component={NewsArticle037} />
        <Route path={"/news/038"} component={NewsArticle038} />
        <Route path={"/news/039"} component={NewsArticle039} />
        <Route path={"/news/040"} component={NewsArticle040} />
        <Route path={"/news/041"} component={NewsArticle041} />
        <Route path={"/news/042"} component={NewsArticle042} />
        <Route path={"/news/043"} component={NewsArticle043} />
        <Route path={"/news/044"} component={NewsArticle044} />
        <Route path={"/news/045"} component={NewsArticle045} />
        <Route path={"/news/046"} component={NewsArticle046} />
        <Route path={"/news/047"} component={NewsArticle047} />
        <Route path={"/news/048"} component={NewsArticle048} />
        <Route path={"/news/049"} component={NewsArticle049} />
        <Route path={"/news/050"} component={NewsArticle050} />
        <Route path={"/news/051"} component={NewsArticle051} />
        <Route path={"/news/052"} component={NewsArticle052} />
        <Route path={"/news/053"} component={NewsArticle053} />
        <Route path={"/news/054"} component={NewsArticle054} />
        <Route path={"/news/055"} component={NewsArticle055} />
        <Route path={"/news/056"} component={NewsArticle056} />
        <Route path={"/news/057"} component={NewsArticle057} />
        <Route path={"/news/058"} component={NewsArticle058} />
        <Route path={"/news/059"} component={NewsArticle059} />
        <Route path={"/news/060"} component={NewsArticle060} />
        <Route path={"/news/064"} component={NewsArticle064} />
        <Route path={"/news/065"} component={NewsArticle065} />
        <Route path={"/news/066"} component={NewsArticle066} />
        <Route path={"/news/067"} component={NewsArticle067} />
        <Route path={"/news/068"} component={NewsArticle068} />
        <Route path="/news/069" component={NewsArticle069} />
        <Route path="/news/070" component={NewsArticle070} />
        <Route path="/news/071" component={NewsArticle071} />
        <Route path="/news/072" component={NewsArticle072} />
        <Route path="/news/:id" component={NewsArticle} />     <Route path="/premium" component={Premium} />
         <Route path={"/gcc-map"} component={GCCMap} />
        <Route path={"/changelog"} component={Changelog} />
        <Route path={"/s/:slug"} component={ShortLinkRedirect} />
        <Route path={"/admin/short-links"} component={ShortLinksManager} />
        <Route path={"/admin/analytics"} component={AnalyticsDashboard} />
         <Route path="/admin/domain-inquiries" component={DomainInquiries} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin/waitlist" component={AdminWaitlist} />
        <Route path="/admin/agent-waitlist" component={AdminAgentWaitlist} />
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
