// src/routes/index.tsx
import { Route } from "wouter";

// Import your pages
import Dashboard from "@/pages/Dashboard";
import Machines from "@/pages/Machines";
import Alerts from "@/pages/Alerts";
import Maintenance from "@/pages/Maintenance";
import Predictions from "@/pages/Predictions";
import Reports from "@/pages/Reports";

export default function Routes() {
  return (
    <>
      <Route path="/" component={Dashboard} />
      <Route path="/machines" component={Machines} />
      <Route path="/alerts" component={Alerts} />
      <Route path="/maintenance" component={Maintenance} />
      <Route path="/predictions" component={Predictions} />
      <Route path="/reports" component={Reports} />
    </>
  );
}
