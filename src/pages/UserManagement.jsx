import { UserPlus, MoreVertical, Mail, Key, Activity } from 'lucide-react';
import './UserManagement.css';

const users = [
    { id: 1, name: 'Alex Rivera', email: 'a.rivera@sentinelmind.ai', role: 'SOC Analyst', status: 'Active', mfa: 'Enabled', lastActive: '2 mins ago' },
    { id: 2, name: 'Sarah Chen', email: 's.chen@sentinelmind.ai', role: 'Admin', status: 'Active', mfa: 'Enabled', lastActive: '1 hour ago' },
    { id: 3, name: 'Marcus Thorne', email: 'm.thorne@sentinelmind.ai', role: 'Auditor', status: 'Inactive', mfa: 'Enabled', lastActive: '2 days ago' },
    { id: 4, name: 'Elena Vance', email: 'e.vance@sentinelmind.ai', role: 'SOC Analyst', status: 'Active', mfa: 'Disabled', lastActive: '5 mins ago' },
    { id: 5, name: 'David Miller', email: 'd.miller@sentinelmind.ai', role: 'SOC Analyst', status: 'Active', mfa: 'Enabled', lastActive: '12 mins ago' },
];

const UserManagement = () => {
    return (
        <div className="users-view animate-fade-in">
            <div className="users-actions-bar">
                <div className="stats-mini-grid">
                    <div className="mini-stat glass">
                        <span className="text-muted">Total Users</span>
                        <span className="value">24</span>
                    </div>
                    <div className="mini-stat glass">
                        <span className="text-muted">Active Now</span>
                        <span className="value text-success">18</span>
                    </div>
                    <div className="mini-stat glass">
                        <span className="text-muted">MFA Compliance</span>
                        <span className="value text-primary">92%</span>
                    </div>
                </div>

                <button className="add-user-btn">
                    <UserPlus size={18} /> Add New User
                </button>
            </div>

            <div className="users-list glass">
                <div className="list-header">
                    <h3>Role-Based Access Control</h3>
                    <div className="header-filters">
                        <select className="glass-select">
                            <option>All Roles</option>
                            <option>Admin</option>
                            <option>SOC Analyst</option>
                            <option>Auditor</option>
                        </select>
                    </div>
                </div>

                <div className="users-table-wrapper">
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Role</th>
                                <th>MFA Status</th>
                                <th>Account Status</th>
                                <th>Last Activity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <div className="user-profile-cell">
                                            <div className="user-avatar-small">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div className="user-details">
                                                <span className="user-name-text">{user.name}</span>
                                                <span className="user-email-text">{user.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`role-tag ${user.role.toLowerCase().replace(' ', '-')}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="mfa-status">
                                            <Key size={14} className={user.mfa === 'Enabled' ? 'text-success' : 'text-danger'} />
                                            {user.mfa}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-dot ${user.status.toLowerCase()}`}></span>
                                        {user.status}
                                    </td>
                                    <td>
                                        <div className="activity-cell">
                                            <Activity size={14} /> {user.lastActive}
                                        </div>
                                    </td>
                                    <td>
                                        <button className="action-btn-icon">
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
