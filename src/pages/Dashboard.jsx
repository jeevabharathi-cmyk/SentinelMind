import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area, BarChart, Bar
} from 'recharts';
import { Shield, AlertTriangle, Activity, Zap } from 'lucide-react';
import './Dashboard.css';

const data = [
    { name: '00:00', risk: 45, baseline: 40 },
    { name: '04:00', risk: 52, baseline: 42 },
    { name: '08:00', risk: 48, baseline: 45 },
    { name: '12:00', risk: 70, baseline: 48 },
    { name: '16:00', risk: 65, baseline: 50 },
    { name: '20:00', risk: 58, baseline: 45 },
    { name: '23:59', risk: 50, baseline: 42 },
];

const Dashboard = () => {
    return (
        <div className="dashboard-view animate-fade-in">
            <div className="stats-grid">
                <div className="stat-card glass">
                    <div className="stat-icon bg-primary-soft">
                        <Shield className="text-primary" size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">System Risk Score</span>
                        <h2 className="stat-value">62<span className="stat-unit">/100</span></h2>
                        <span className="stat-trend text-danger">↑ 12% from yesterday</span>
                    </div>
                </div>

                <div className="stat-card glass">
                    <div className="stat-icon bg-warning-soft">
                        <AlertTriangle className="text-warning" size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Active Alerts</span>
                        <h2 className="stat-value">14</h2>
                        <span className="stat-trend text-warning">4 Critical</span>
                    </div>
                </div>

                <div className="stat-card glass">
                    <div className="stat-icon bg-accent-soft">
                        <Activity className="text-accent" size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Events Analyzed</span>
                        <h2 className="stat-value">1.2M</h2>
                        <span className="stat-trend text-success">Real-time monitoring</span>
                    </div>
                </div>

                <div className="stat-card glass">
                    <div className="stat-icon bg-secondary-soft">
                        <Zap className="text-secondary" size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Detection Latency</span>
                        <h2 className="stat-value">184<span className="stat-unit">ms</span></h2>
                        <span className="stat-trend text-success">Optimal performance</span>
                    </div>
                </div>
            </div>

            <div className="charts-grid">
                <div className="chart-container glass">
                    <div className="chart-header">
                        <h3>Insider Risk Trend</h3>
                        <span className="text-muted text-sm">Last 24 Hours</span>
                    </div>
                    <div className="chart-body">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                                <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '8px' }}
                                    itemStyle={{ color: 'var(--text-main)' }}
                                />
                                <Area type="monotone" dataKey="risk" stroke="var(--primary)" fillOpacity={1} fill="url(#colorRisk)" strokeWidth={3} />
                                <Line type="monotone" dataKey="baseline" stroke="var(--text-muted)" strokeDasharray="5 5" dot={false} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-container glass">
                    <div className="chart-header">
                        <h3>Risk by Category</h3>
                        <span className="text-muted text-sm">Behavioral Distribution</span>
                    </div>
                    <div className="chart-body">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={[
                                { name: 'Access', value: 45 },
                                { name: 'Timing', value: 65 },
                                { name: 'Resource', value: 30 },
                                { name: 'Network', value: 55 },
                            ]}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                                <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '8px' }}
                                />
                                <Bar dataKey="value" fill="var(--secondary)" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
