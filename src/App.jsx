import React, { useState, lazy, Suspense } from 'react';
import { SecurityProvider, useSecurity } from './context/SecurityContext';
import Sidebar from './components/ui/Sidebar';
import Header from './components/ui/Header';
import Login from './components/ui/Login';
import ErrorBoundary from './components/ui/ErrorBoundary';
import SecurityHeaders from './components/ui/SecurityHeaders';
import './App.css';

// Lazy load pages for production performance
const Dashboard = lazy(() => import('./pages/Dashboard'));
const BehavioralAnalytics = lazy(() => import('./pages/BehavioralAnalytics'));
const RiskHeatmap = lazy(() => import('./pages/RiskHeatmap'));
const AlertsTable = lazy(() => import('./pages/AlertsTable'));
const AuditLogs = lazy(() => import('./pages/AuditLogs'));
const UserManagement = lazy(() => import('./pages/UserManagement'));
const UserRiskProfile = lazy(() => import('./pages/UserRiskProfile'));
const DataExfiltration = lazy(() => import('./pages/DataExfiltration'));

const AppContent = () => {
  const { isAuthenticated, mfaVerified, logAction } = useSecurity();
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    logAction(`Navigation to ${tab}`);
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Risk Overview';
      case 'analytics': return 'Behavioral Engine';
      case 'heatmap': return 'Risk Heatmap';
      case 'user-profile': return 'User Risk Profile';
      case 'exfiltration': return 'Data Exfiltration Monitor';
      case 'alerts': return 'Alerts & Incidents';
      case 'audit': return 'Audit Logs';
      case 'admin': return 'User Management';
      case 'settings': return 'System Settings';
      default: return 'SentinelMind';
    }
  };

  if (!isAuthenticated || !mfaVerified) {
    return <Login />;
  }

  return (
    <div className="app-container">
      <SecurityHeaders />
      <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />

      <main className="main-content">
        <Header title={getTitle()} />

        <ErrorBoundary>
          <Suspense fallback={
            <div className="skeleton-container">
              <div className="skeleton-header"></div>
              <div className="skeleton-grid">
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
              </div>
              <div className="skeleton-chart"></div>
            </div>
          }>
            {activeTab === 'dashboard' && (
              <div className="dashboard-layout">
                <Dashboard />
                <div className="dashboard-secondary">
                  <RiskHeatmap />
                  <AlertsTable />
                </div>
              </div>
            )}

            {activeTab === 'analytics' && <BehavioralAnalytics />}
            {activeTab === 'heatmap' && <RiskHeatmap />}
            {activeTab === 'user-profile' && <UserRiskProfile />}
            {activeTab === 'exfiltration' && <DataExfiltration />}
            {activeTab === 'alerts' && <AlertsTable />}
            {activeTab === 'audit' && <AuditLogs />}
            {activeTab === 'admin' && <UserManagement />}

            {activeTab === 'settings' && (
              <div className="placeholder-view glass animate-fade-in">
                <Settings size={48} className="text-muted" />
                <h3>System Settings</h3>
                <p className="text-muted">Configuration module for risk thresholds and ingestion pipelines.</p>
              </div>
            )}
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};

function App() {
  return (
    <SecurityProvider>
      <AppContent />
    </SecurityProvider>
  );
}

export default App;
