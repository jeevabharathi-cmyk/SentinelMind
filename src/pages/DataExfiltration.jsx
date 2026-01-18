import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Share2, Upload, Globe, HardDrive, ShieldAlert, Activity } from 'lucide-react';
import './DataExfiltration.css';

const volumeData = [
    { time: '08:00', upload: 120, download: 450 },
    { time: '10:00', upload: 340, download: 890 },
    { time: '12:00', upload: 150, download: 320 },
    { time: '14:00', upload: 1200, download: 410 }, // Anomaly
    { time: '16:00', upload: 210, download: 560 },
    { time: '18:00', upload: 90, download: 120 },
];

const DataExfiltration = () => {
    return (
        <div className="exfiltration-view animate-fade-in">
            <div className="exfiltration-header">
                <div className="header-title">
                    <h2><Share2 size={24} className="text-secondary" /> Data Exfiltration Monitor</h2>
                    <p className="text-muted">Tracking unauthorized data movement and egress patterns.</p>
                </div>
                <div className="egress-stats glass">
                    <div className="egress-stat">
                        <Upload size={16} className="text-danger" />
                        <span>Total Egress: <strong className="text-danger">1.4 GB</strong></span>
                    </div>
                    <div className="egress-stat">
                        <Globe size={16} className="text-primary" />
                        <span>External Destinations: <strong>12</strong></span>
                    </div>
                </div>
            </div>

            <div className="exfiltration-grid">
                <div className="exfiltration-card glass large">
                    <div className="card-header">
                        <h3><HardDrive size={18} className="text-primary" /> Data Flow Mapping</h3>
                        <span className="badge warning">Anomalous Flow Detected</span>
                    </div>
                    <div className="sankey-placeholder">
                        <div className="flow-viz">
                            <div className="flow-node internal">Internal Assets</div>
                            <div className="flow-arrow animate-pulse">→</div>
                            <div className="flow-node workstation">Workstation (USR-4412)</div>
                            <div className="flow-arrow danger animate-pulse">→</div>
                            <div className="flow-node external">External Cloud (Dropbox)</div>
                        </div>
                        <div className="flow-details">
                            <div className="detail-item">
                                <span className="label">Volume</span>
                                <span className="value">1.2 GB</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Protocol</span>
                                <span className="value">HTTPS/TLS 1.3</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="exfiltration-card glass">
                    <div className="card-header">
                        <h3><Activity size={18} className="text-accent" /> Egress Volume (MB)</h3>
                    </div>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={volumeData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                                <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} />
                                <YAxis stroke="var(--text-muted)" fontSize={12} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '8px' }}
                                />
                                <Bar dataKey="upload" fill="var(--danger)" radius={[4, 4, 0, 0]} name="Upload" />
                                <Bar dataKey="download" fill="var(--primary)" radius={[4, 4, 0, 0]} name="Download" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="egress-alerts glass">
                <div className="card-header">
                    <h3><ShieldAlert size={18} className="text-danger" /> Critical Egress Alerts</h3>
                </div>
                <div className="alert-table-mini">
                    <div className="alert-row header">
                        <span>Destination</span>
                        <span>Volume</span>
                        <span>Risk Score</span>
                        <span>Action</span>
                    </div>
                    <div className="alert-row">
                        <span className="dest">dropbox.com/u/4412...</span>
                        <span className="vol">1.2 GB</span>
                        <span className="score text-danger">92</span>
                        <button className="block-btn">Block IP</button>
                    </div>
                    <div className="alert-row">
                        <span className="dest">personal-email.com</span>
                        <span className="vol">45 MB</span>
                        <span className="score text-warning">65</span>
                        <button className="block-btn">Quarantine</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataExfiltration;
