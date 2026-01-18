import React from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area
} from 'recharts';
import { User, Shield, AlertTriangle, Activity, TrendingUp, Clock, FileText } from 'lucide-react';
import './UserRiskProfile.css';

const riskData = [
    { subject: 'Data Access', A: 85, fullMark: 100 },
    { subject: 'Timing', A: 40, fullMark: 100 },
    { subject: 'Resource Vol', A: 95, fullMark: 100 },
    { subject: 'Network', A: 30, fullMark: 100 },
    { subject: 'Privilege', A: 60, fullMark: 100 },
    { subject: 'Consistency', A: 20, fullMark: 100 },
];

const scoreHistory = [
    { date: 'Jan 10', score: 12 },
    { date: 'Jan 11', score: 15 },
    { date: 'Jan 12', score: 18 },
    { date: 'Jan 13', score: 45 },
    { date: 'Jan 14', score: 62 },
    { date: 'Jan 15', score: 88 },
    { date: 'Jan 16', score: 85 },
];

const UserRiskProfile = () => {
    return (
        <div className="profile-view animate-fade-in">
            <div className="profile-header glass">
                <div className="user-identity">
                    <div className="profile-avatar">
                        <User size={32} />
                    </div>
                    <div className="identity-info">
                        <h2>USR-4412 <span className="badge critical">High Risk</span></h2>
                        <p className="text-muted">Role: Senior Database Administrator | Dept: Finance-IT</p>
                    </div>
                </div>
                <div className="risk-summary">
                    <div className="summary-item">
                        <span className="label">Current Score</span>
                        <span className="value text-danger">85/100</span>
                    </div>
                    <div className="summary-item">
                        <span className="label">Risk Trend</span>
                        <span className="value text-danger"><TrendingUp size={16} /> Critical Spike</span>
                    </div>
                </div>
            </div>

            <div className="profile-grid">
                <div className="profile-card glass">
                    <div className="card-header">
                        <h3><Shield size={18} className="text-primary" /> Risk Vector Analysis</h3>
                    </div>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={riskData}>
                                <PolarGrid stroke="var(--border)" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar
                                    name="Risk Level"
                                    dataKey="A"
                                    stroke="var(--primary)"
                                    fill="var(--primary)"
                                    fillOpacity={0.6}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="profile-card glass">
                    <div className="card-header">
                        <h3><Activity size={18} className="text-secondary" /> Risk Score History</h3>
                    </div>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={scoreHistory}>
                                <defs>
                                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--danger)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--danger)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                                <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} />
                                <YAxis stroke="var(--text-muted)" fontSize={12} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '8px' }}
                                />
                                <Area type="monotone" dataKey="score" stroke="var(--danger)" fillOpacity={1} fill="url(#colorScore)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="recent-anomalies glass">
                <div className="card-header">
                    <h3><AlertTriangle size={18} className="text-warning" /> Recent Behavioral Anomalies</h3>
                </div>
                <div className="anomaly-list">
                    <div className="anomaly-item">
                        <div className="anomaly-icon bg-danger-soft"><Clock size={16} className="text-danger" /></div>
                        <div className="anomaly-details">
                            <h4>Bulk Database Export</h4>
                            <p className="text-muted">Attempted to export 4.2GB of sensitive customer data at 03:14 AM UTC.</p>
                        </div>
                        <span className="anomaly-time">2 hours ago</span>
                    </div>
                    <div className="anomaly-item">
                        <div className="anomaly-icon bg-warning-soft"><FileText size={16} className="text-warning" /></div>
                        <div className="anomaly-details">
                            <h4>Unauthorized Privilege Escalation</h4>
                            <p className="text-muted">Accessed 'Root-Admin' credentials without corresponding ticket ID.</p>
                        </div>
                        <span className="anomaly-time">5 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRiskProfile;
