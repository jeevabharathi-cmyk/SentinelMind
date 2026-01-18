import React from 'react';
import { Search, Bell, User, ShieldCheck, ShieldAlert } from 'lucide-react';
import { useSecurity } from '../../context/SecurityContext';
import './Header.css';

const Header = ({ title }) => {
    const { mfaVerified } = useSecurity();
    return (
        <header className="main-header glass animate-fade-in">
            <div className="header-left">
                <h1>{title}</h1>
            </div>

            <div className="header-right">
                <div className="search-bar glass">
                    <Search size={18} className="text-muted" />
                    <input type="text" placeholder="Search patterns, logs, or users..." />
                </div>

                <div className="security-status glass">
                    {mfaVerified ? (
                        <><ShieldCheck size={16} className="text-success" /> <span>Secure Session</span></>
                    ) : (
                        <><ShieldAlert size={16} className="text-danger" /> <span>Unverified</span></>
                    )}
                </div>

                <button className="icon-btn glass">
                    <Bell size={20} />
                    <span className="notification-badge"></span>
                </button>

                <div className="user-profile glass">
                    <div className="user-avatar">
                        <User size={20} />
                    </div>
                    <div className="user-info">
                        <span className="user-name">SOC Analyst 01</span>
                        <span className="user-role">
                            <ShieldCheck size={12} className="text-success" />
                            Verified
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
