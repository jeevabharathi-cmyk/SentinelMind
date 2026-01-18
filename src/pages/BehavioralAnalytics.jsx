import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area, ScatterChart, Scatter, ZAxis
} from 'recharts';
import { Activity, Clock, Database, TrendingUp, AlertCircle } from 'lucide-react';
import './BehavioralAnalytics.css';

const timingData = [
    { hour: '00:00', actual: 5, baseline: 2 },
    { hour: '02:00', actual: 3, baseline: 1 },
    { hour: '04:00', actual: 12, baseline: 2 },
    { hour: '06:00', actual: 8, baseline: 5 },
    { hour: '08:00', actual: 45, baseline: 40 },
    { hour: '10:00', actual: 85, baseline: 82 },
    { hour: '12:00', actual: 78, baseline: 80 },
    { hour: '14:00', actual: 92, baseline: 85 },
    { hour: '16:00', actual: 88, baseline: 88 },
    { hour: '18:00', actual: 40, baseline: 45 },
    { hour: '20:00', actual: 25, baseline: 15 },
    { hour: '22:00', actual: 15, baseline: 5 },
];

const accessFrequencyData = [
    { day: 'Mon', frequency: 120, deviation: 5 },
    { day: 'Tue', frequency: 150, deviation: 12 },
    { day: 'Wed', frequency: 320, deviation: 45 },
    { day: 'Thu', frequency: 180, deviation: 8 },
    { day: 'Fri', frequency: 210, deviation: 15 },
    { day: 'Sat', frequency: 90, deviation: 25 },
    { day: 'Sun', frequency: 40, deviation: 10 },
];

const BehavioralAnalytics = () => {
    return (
        <div className="analytics-view animate-fade-in">
            <div className="analytics-header-section">
                <div className="analytics-title">
                    <h2><Activity size={24} className="text-primary" /> Behavioral Analytics Engine</h2>
                    <p className="text-muted">Analyzing pattern deviations against role-based baselines.</p>
                </div>
                <div className="baseline-selector glass">
                    <span className="text-sm">Baseline: </span>
                    <select className="minimal-select">
                        <option>Standard SOC Analyst</option>
                        <option>System Administrator</option>
                        <option>Database Auditor</option>
                    </select>
                </div>
            </div>

            <div className="analytics-grid">
                <div className="analytics-card glass">
                    <div className="card-header">
                        <div className="header-left">
                            <Clock size={18} className="text-accent" />
                            <h3>Login Timing Deviation</h3>
                        </div>
                        <span className="badge warning">High Anomaly detected at 04:00</span>
                    </div>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={timingData}>
                                <defs>
                                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                                <XAxis dataKey="hour" stroke="var(--text-muted)" fontSize={12} />
                                <YAxis stroke="var(--text-muted)" fontSize={12} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '8px' }}
                                />
                                <Area type="monotone" dataKey="actual" stroke="var(--primary)" fillOpacity={1} fill="url(#colorActual)" strokeWidth={3} name="Actual Activity" />
                                <Line type="monotone" dataKey="baseline" stroke="var(--text-muted)" strokeDasharray="5 5" dot={false} name="Baseline" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="analytics-card glass">
                    <div className="card-header">
                        <div className="header-left">
                            <Database size={18} className="text-secondary" />
                            <h3>Resource Access Frequency</h3>
                        </div>
                        <span className="badge success">Normal Pattern</span>
                    </div>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={accessFrequencyData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                                <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} />
                                <YAxis stroke="var(--text-muted)" fontSize={12} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '8px' }}
                                />
                                <Line type="stepAfter" dataKey="frequency" stroke="var(--secondary)" strokeWidth={3} dot={{ r: 4, fill: 'var(--secondary)' }} name="Access Count" />
                                <Line type="monotone" dataKey="deviation" stroke="var(--danger)" strokeWidth={2} dot={false} name="Deviation %" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="insights-section">
                <div className="insight-card glass">
                    <div className="insight-icon bg-warning-soft">
                        <AlertCircle className="text-warning" size={20} />
                    </div>
                    <div className="insight-content">
                        <h4>Anomalous Off-Hours Access</h4>
                        <p className="text-muted">System detected a 400% spike in resource access between 02:00 and 05:00 UTC. Pattern does not match 'SOC Analyst' baseline.</p>
                    </div>
                    <button className="investigate-btn">Investigate</button>
                </div>

                <div className="insight-card glass">
                    <div className="insight-icon bg-primary-soft">
                        <TrendingUp className="text-primary" size={20} />
                    </div>
                    <div className="insight-content">
                        <h4>Behavioral Consistency</h4>
                        <p className="text-muted">User USR-4412 shows 98% alignment with role-based baseline over the last 30 days. Risk score remains low.</p>
                    </div>
                    <button className="investigate-btn secondary">View Profile</button>
                </div>
            </div>
        </div>
    );
};

export default BehavioralAnalytics;
