import React from 'react';
import {
    LayoutDashboard,
    ShieldAlert,
    Activity,
    Database,
    Users,
    Settings,
    LogOut,
    Lock,
    FileText,
    Map,
    UserCheck,
    Share2,
    ChevronRight
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const mainItems = [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Risk Overview' },
        { id: 'analytics', icon: Activity, label: 'Behavioral Engine' },
        { id: 'heatmap', icon: Map, label: 'Risk Heatmap' },
    ];

    const monitoringItems = [
        { id: 'user-profile', icon: UserCheck, label: 'User Risk Profile' },
        { id: 'exfiltration', icon: Share2, label: 'Data Exfiltration' },
        { id: 'alerts', icon: ShieldAlert, label: 'Alerts & Incidents' },
    ];

    const systemItems = [
        { id: 'audit', icon: FileText, label: 'Audit Logs' },
        { id: 'admin', icon: Users, label: 'User Management' },
        { id: 'settings', icon: Settings, label: 'System Settings' },
    ];

    const renderNavGroup = (title, items) => (
        <div className="nav-group">
            <span className="nav-group-title">{title}</span>
            {items.map((item) => (
                <button
                    key={item.id}
                    className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                >
                    <div className="nav-item-content">
                        <item.icon size={18} />
                        <span>{item.label}</span>
                    </div>
                    {activeTab === item.id && <ChevronRight size={14} className="active-indicator" />}
                </button>
            ))}
        </div>
    );

    return (
        <aside className="sidebar glass">
            <div className="sidebar-logo">
                <div className="logo-icon">
                    <Lock size={24} className="text-primary" />
                </div>
                <span className="logo-text">Sentinel<span className="text-gradient">Mind</span></span>
            </div>

            <nav className="sidebar-nav">
                {renderNavGroup('CORE COMMAND', mainItems)}
                {renderNavGroup('INTELLIGENCE', monitoringItems)}
                {renderNavGroup('ADMINISTRATION', systemItems)}
            </nav>

            <div className="sidebar-footer">
                <div className="system-status">
                    <div className="status-dot online"></div>
                    <span>Engine: v2.4.0-Stable</span>
                </div>
                <button className="nav-item logout">
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
