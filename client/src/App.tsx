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
import Signal125 from "./pages/Signal125";
import Signal126 from "./pages/Signal126";
import Signal127 from "./pages/Signal127";
import Signal128 from "./pages/Signal128";
import Signal129 from "./pages/Signal129";
import Signal130 from "./pages/Signal130";
import SignalDetail from "./pages/SignalDetail";
import Signal131 from "@/pages/Signal131";
import Signal132 from "@/pages/Signal132";
import Signal133 from "@/pages/Signal133";
import Signal134 from "@/pages/Signal134";
import Signal135 from "@/pages/Signal135";
import Signal136 from "@/pages/Signal136";
import Signal137 from "@/pages/Signal137";
import Signal138 from "@/pages/Signal138";
import Signal139 from "@/pages/Signal139";
import Signal140 from "@/pages/Signal140";
import Signal141 from "@/pages/Signal141";
import Signal142 from "@/pages/Signal142";
import Signal143 from "@/pages/Signal143";
import Signal144 from "@/pages/Signal144";
import Signal145 from "@/pages/Signal145";
import Signal146 from "@/pages/Signal146";
import Signal147 from "@/pages/Signal147";
import Signal148 from "@/pages/Signal148";
import Signal149 from "@/pages/Signal149";
import Signal150 from "@/pages/Signal150";
import Signal151 from "@/pages/Signal151";
import Signal152 from "@/pages/Signal152";
import Signal153 from "@/pages/Signal153";
import Signal154 from "@/pages/Signal154";
import Signal155 from "@/pages/Signal155";
import Signal156 from "@/pages/Signal156";
import Signal157 from "@/pages/Signal157";
import Signal158 from "@/pages/Signal158";
import Signal159 from "@/pages/Signal159";
import Signal160 from "@/pages/Signal160";
import Signal161 from "@/pages/Signal161";
import Signal162 from "@/pages/Signal162";
import Signal163 from "@/pages/Signal163";
import Signal164 from "@/pages/Signal164";
import Signal165 from "@/pages/Signal165";
import Signal166 from "@/pages/Signal166";
import Signal167 from "@/pages/Signal167";
import Signal168 from "@/pages/Signal168";
import Signal169 from "@/pages/Signal169";
import Signal170 from "@/pages/Signal170";
import Signal171 from "@/pages/Signal171";
import Signal172 from "@/pages/Signal172";
import Signal173 from "@/pages/Signal173";
import Signal174 from "@/pages/Signal174";
import Signal175 from "@/pages/Signal175";
import Signal176 from "@/pages/Signal176";
import Signal177 from "@/pages/Signal177";
import Signal178 from "@/pages/Signal178";
import SearchResults from "./pages/SearchResults";
import About from "./pages/About";
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
      <Route path="/signals/125" component={Signal125} />
      <Route path="/signals/126" component={Signal126} />
      <Route path="/signals/127" component={Signal127} />
      <Route path="/signals/128" component={Signal128} />
      <Route path="/signals/129" component={Signal129} />
      <Route path="/signals/130" component={Signal130} />
        <Route path="/signals/131" component={Signal131} />
        <Route path="/signals/132" component={Signal132} />
        <Route path="/signals/133" component={Signal133} />
        <Route path="/signals/134" component={Signal134} />
        <Route path="/signals/135" component={Signal135} />
        <Route path="/signals/136" component={Signal136} />
        <Route path="/signals/137" component={Signal137} />
        <Route path="/signals/138" component={Signal138} />
        <Route path="/signals/139" component={Signal139} />
        <Route path="/signals/140" component={Signal140} />
        <Route path="/signals/141" component={Signal141} />
        <Route path="/signals/142" component={Signal142} />
        <Route path="/signals/143" component={Signal143} />
        <Route path="/signals/144" component={Signal144} />
        <Route path="/signals/145" component={Signal145} />
        <Route path="/signals/146" component={Signal146} />
        <Route path="/signals/147" component={Signal147} />
        <Route path="/signals/148" component={Signal148} />
        <Route path="/signals/149" component={Signal149} />
        <Route path="/signals/150" component={Signal150} />
        <Route path="/signals/151" component={Signal151} />
        <Route path="/signals/152" component={Signal152} />
        <Route path="/signals/153" component={Signal153} />
       <Route path={"signals/154"} component={Signal154} />
      <Route path={"signals/155"} component={Signal155} />
      <Route path={"signals/156"} component={Signal156} />
      <Route path={"signals/157"} component={Signal157} />
      <Route path={"signals/158"} component={Signal158} />
      <Route path={"signals/159"} component={Signal159} />
      <Route path={"signals/160"} component={Signal160} />
      <Route path={"signals/161"} component={Signal161} />
      <Route path={"signals/162"} component={Signal162} />
      <Route path={"signals/163"} component={Signal163} />
      <Route path={"signals/164"} component={Signal164} />
      <Route path={"signals/165"} component={Signal165} />
      <Route path={"signals/166"} component={Signal166} />
      <Route path={"signals/167"} component={Signal167} />
      <Route path={"signals/168"} component={Signal168} />
      <Route path={"signals/169"} component={Signal169} />
      <Route path={"signals/170"} component={Signal170} />
      <Route path={"signals/171"} component={Signal171} />
      <Route path={"signals/172"} component={Signal172} />
      <Route path={"signals/173"} component={Signal173} />
      <Route path={"signals/174"} component={Signal174} />
      <Route path={"signals/175"} component={Signal175} />
      <Route path={"signals/176"} component={Signal176} />
      <Route path={"signals/177"} component={Signal177} />
      <Route path={"signals/178"} component={Signal178} />
      <Route path="/signals/:id" component={SignalDetail} /><Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/investors" component={About} /><Route path="/premium" component={Premium} />
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
