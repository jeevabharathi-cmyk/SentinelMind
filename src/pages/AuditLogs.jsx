import React from 'react';
import { Search, Download, Filter, ShieldCheck, History } from 'lucide-react';
import SanitizedText from '../components/ui/SanitizedText';
import './AuditLogs.css';

const auditData = [
    { id: 'AUD-9921', action: 'User Login', actor: 'SOC-01', target: 'System', timestamp: '2026-01-17 15:42:10', hash: '8f2e...3a1b', status: 'Verified' },
    { id: 'AUD-9920', action: 'Policy Update', actor: 'Admin-01', target: 'Risk Engine', timestamp: '2026-01-17 14:15:05', hash: '4c1d...9e2f', status: 'Verified' },
    { id: 'AUD-9919', action: 'Alert Acknowledge', actor: 'SOC-02', target: 'AL-1024', timestamp: '2026-01-17 13:02:44', hash: '2b7a...1c8d', status: 'Verified' },
    { id: 'AUD-9918', action: 'Log Ingestion', actor: 'System', target: 'API-Endpoint', timestamp: '2026-01-17 12:45:30', hash: 'a1b2...c3d4', status: 'Verified' },
    { id: 'AUD-9917', action: 'MFA Enforcement', actor: 'Admin-01', target: 'Global Settings', timestamp: '2026-01-17 11:20:12', hash: 'e5f6...g7h8', status: 'Verified' },
    { id: 'AUD-9916', action: 'Data Export', actor: 'Auditor-01', target: 'Compliance Report', timestamp: '2026-01-17 10:05:55', hash: 'i9j0...k1l2', status: 'Verified' },
];

const AuditLogs = () => {
    return (
        <div className="audit-container glass animate-fade-in">
            <div className="audit-header">
                <div className="header-info">
                    <h3><History size={20} className="text-primary" /> Immutable Audit Logs</h3>
                    <p className="text-muted">Tamper-proof record of all system activities with hash-chain integrity.</p>
                </div>
                <div className="header-actions">
                    <div className="search-box glass">
                        <Search size={16} />
                        <input type="text" placeholder="Search logs..." />
                    </div>
                    <button className="action-btn glass">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="action-btn glass primary">
                        <Download size={16} /> Export CSV
                    </button>
                </div>
            </div>

            <div className="audit-table-wrapper">
                <table className="audit-table">
                    <thead>
                        <tr>
                            <th>Log ID</th>
                            <th>Action</th>
                            <th>Actor</th>
                            <th>Target</th>
                            <th>Timestamp</th>
                            <th>Integrity Hash</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {auditData.map((log) => (
                            <tr key={log.id}>
                                <td><span className="log-id">{log.id}</span></td>
                                <td><SanitizedText text={log.action} className="action-text" /></td>
                                <td>{log.actor}</td>
                                <td>{log.target}</td>
                                <td className="text-muted">{log.timestamp}</td>
                                <td><code className="hash-code">{log.hash}</code></td>
                                <td>
                                    <span className="status-verified">
                                        <ShieldCheck size={14} /> {log.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="audit-footer">
                <span className="text-muted">Showing 6 of 1,240 logs</span>
                <div className="pagination">
                    <button className="page-btn glass" disabled>Previous</button>
                    <button className="page-btn glass active">1</button>
                    <button className="page-btn glass">2</button>
                    <button className="page-btn glass">3</button>
                    <button className="page-btn glass">Next</button>
                </div>
            </div>
        </div>
    );
};

export default AuditLogs;
