import React from 'react';
import { AlertCircle, Clock, ExternalLink, MoreVertical } from 'lucide-react';
import SanitizedText from '../components/ui/SanitizedText';
import './AlertsTable.css';

const alerts = [
    { id: 'AL-1024', user: 'USR-8821', behavior: 'Unusual Login Time', severity: 'Critical', time: '10 mins ago', status: 'Open' },
    { id: 'AL-1023', user: 'USR-4412', behavior: 'High Resource Access', severity: 'Warning', time: '45 mins ago', status: 'Investigating' },
    { id: 'AL-1022', user: 'USR-9903', behavior: 'Bulk File Download', severity: 'Critical', time: '2 hours ago', status: 'Open' },
    { id: 'AL-1021', user: 'USR-1256', behavior: 'Cross-Region Access', severity: 'Observe', time: '5 hours ago', status: 'Resolved' },
    { id: 'AL-1020', user: 'USR-7734', behavior: 'Privilege Escalation', severity: 'Critical', time: 'Yesterday', status: 'Open' },
];

const AlertsTable = () => {
    return (
        <div className="alerts-container glass animate-fade-in">
            <div className="table-header">
                <h3>Recent Security Incidents</h3>
                <button className="view-all-btn">View All Logs</button>
            </div>

            <div className="table-wrapper">
                <table className="alerts-table">
                    <thead>
                        <tr>
                            <th>Incident ID</th>
                            <th>Subject (Anonymized)</th>
                            <th>Behavior Pattern</th>
                            <th>Severity</th>
                            <th>Detected</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.map((alert) => (
                            <tr key={alert.id}>
                                <td><span className="id-badge">{alert.id}</span></td>
                                <td>
                                    <div className="subject-cell">
                                        <div className="avatar-placeholder"></div>
                                        {alert.user}
                                    </div>
                                </td>
                                <td><SanitizedText text={alert.behavior} /></td>
                                <td>
                                    <span className={`severity-badge ${alert.severity.toLowerCase()}`}>
                                        {alert.severity}
                                    </span>
                                </td>
                                <td>
                                    <div className="time-cell">
                                        <Clock size={14} /> {alert.time}
                                    </div>
                                </td>
                                <td>
                                    <span className={`status-pill ${alert.status.toLowerCase()}`}>
                                        {alert.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="action-btn">
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AlertsTable;
