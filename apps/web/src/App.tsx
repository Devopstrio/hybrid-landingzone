import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ExecutiveDashboard from './pages/ExecutiveDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">Governance engine is initializing this module. Access will be granted shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ExecutiveDashboard />} />
          <Route path="/factory" element={<Placeholder name="Account / Subscription Factory" />} />
          <Route path="/portfolio" element={<Placeholder name="Landing Zone Portfolio" />} />
          <Route path="/topology" element={<Placeholder name="Network Topology Viewer" />} />
          <Route path="/compliance" element={<Placeholder name="Policy Compliance Center" />} />
          <Route path="/finops" element={<Placeholder name="Cost & FinOps Governance" />} />
          <Route path="/identity" element={<Placeholder name="Identity Federation Center" />} />
          <Route path="/settings" element={<Placeholder name="Platform Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
