import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie 
} from 'recharts';
import { 
  Building, 
  ShieldAlert, 
  CreditCard, 
  Zap,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const cloudDistribution = [
  { name: 'AWS', value: 55, color: '#10b981' },
  { name: 'Azure', value: 25, color: '#34d399' },
  { name: 'GCP', value: 15, color: '#6ee7b7' },
  { name: 'On-Prem', value: 5, color: '#a7f3d0' },
];

const provisionData = [
  { month: 'Jan', count: 12 },
  { month: 'Feb', count: 18 },
  { month: 'Mar', count: 15 },
  { month: 'Apr', count: 25 },
  { month: 'May', count: 32 },
];

const KPI_CARDS = [
  { title: 'Total Accounts', value: '412', trend: '+12 this month', color: 'emerald', icon: Building },
  { title: 'Compliance Score', value: '94%', trend: '+1.2%', color: 'teal', icon: ShieldAlert },
  { title: 'Monthly Spend', value: '$245k', trend: '-$12k', color: 'green', icon: CreditCard },
  { title: 'Active Guardrails', value: '1,248', trend: 'Healthy', color: 'emerald', icon: Zap },
];

const ExecutiveDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Hybrid Governance Console</h1>
          <p className="text-slate-400">Multi-cloud landing zone orchestration and compliance tracking.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Compliance Report
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            New Account Request
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className="text-xs font-medium text-slate-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Provisioning Trends */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl lg:col-span-2">
          <h3 className="text-lg font-bold text-white mb-6">Account Provisioning Trends</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={provisionData}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="count" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorCount)" name="New Accounts" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cloud Distribution */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl lg:col-span-1">
          <h3 className="text-lg font-bold text-white mb-6">Estate Distribution</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={cloudDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {cloudDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                <span className="text-sm font-medium">Policy Drift: Low</span>
              </div>
              <span className="text-xs text-emerald-400">98.2% Stable</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-amber-500 w-5 h-5" />
                <span className="text-sm font-medium">Tagging Violations</span>
              </div>
              <span className="text-xs text-amber-400">12 Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
