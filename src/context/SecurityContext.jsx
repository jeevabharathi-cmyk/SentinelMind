import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const SecurityContext = createContext(null);

// Session Timeout (15 minutes for production security)
const SESSION_TIMEOUT = 15 * 60 * 1000;

export const SecurityProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [mfaVerified, setMfaVerified] = useState(false);
    const [auditLogs, setAuditLogs] = useState([]);
    const [lastActivity, setLastActivity] = useState(() => Date.now());

    const logAction = useCallback((action, target = 'System') => {
        const newLog = {
            id: `AUD-${Math.floor(Math.random() * 10000)}`,
            action,
            actor: user?.name || 'Anonymous',
            target,
            timestamp: new Date().toISOString(),
            hash: btoa(Math.random().toString()).substring(0, 8),
            status: 'Verified'
        };
        setAuditLogs(prev => [newLog, ...prev].slice(0, 100));
        console.log(`[Audit Log]: ${action} by ${newLog.actor}`);
    }, [user]);

    const login = () => {
        // Simulate secure login
        setUser({ name: 'SOC Analyst 01', role: 'SOC Analyst', email: 'analyst@sentinelmind.ai' });
        setIsAuthenticated(true);
        logAction('Login Attempt - Credentials Verified');
    };

    const verifyMfa = (code) => {
        if (code.join('').length === 6) {
            setMfaVerified(true);
            logAction('MFA Verification Successful');
            return true;
        }
        return false;
    };

    const logout = useCallback(() => {
        setIsAuthenticated(false);
        setUser(null);
        setMfaVerified(false);
        logAction('User Logout');
    }, [logAction]);

    // Activity Monitor
    useEffect(() => {
        const handleActivity = () => setLastActivity(Date.now());
        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);

        const checkTimeout = setInterval(() => {
            if (isAuthenticated && Date.now() - lastActivity > SESSION_TIMEOUT) {
                logout();
                alert('Session expired due to inactivity for security reasons.');
            }
        }, 60000);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            clearInterval(checkTimeout);
        };
    }, [isAuthenticated, lastActivity, logout]);

    return (
        <SecurityContext.Provider value={{
            isAuthenticated,
            user,
            mfaVerified,
            auditLogs,
            login,
            verifyMfa,
            logout,
            logAction
        }}>
            {children}
        </SecurityContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSecurity = () => useContext(SecurityContext);
