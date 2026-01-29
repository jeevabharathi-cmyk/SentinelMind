// SentinelMind - Main Application Logic

// ========== Authentication ==========
const loginForm = document.getElementById('loginForm');
const loginScreen = document.getElementById('loginScreen');
const mainApp = document.getElementById('mainApp');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        loginScreen.classList.add('hidden');
        mainApp.classList.remove('hidden');
        loadPage('dashboard');
    }
});

// ========== Navigation ==========
const navItems = document.querySelectorAll('.nav-item');
const pageTitle = document.getElementById('pageTitle');
const pageContent = document.getElementById('pageContent');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        const page = item.dataset.page;
        loadPage(page);
    });
});

// ========== Page Loading ==========
function loadPage(page) {
    const titles = {
        'dashboard': 'Risk Overview',
        'analytics': 'Behavioral Analytics',
        'heatmap': 'Risk Heatmap',
        'user-profile': 'User Risk Profile',
        'exfiltration': 'Data Exfiltration Monitor',
        'alerts': 'Alerts & Incidents',
        'audit': 'Audit Logs',
        'users': 'User Management'
    };

    pageTitle.textContent = titles[page] || 'SentinelMind';

    const content = {
        'dashboard': getDashboardContent(),
        'analytics': getAnalyticsContent(),
        'heatmap': getHeatmapContent(),
        'user-profile': getUserProfileContent(),
        'exfiltration': getExfiltrationContent(),
        'alerts': getAlertsContent(),
        'audit': getAuditContent(),
        'users': getUsersContent()
    };

    pageContent.innerHTML = content[page] || '<p>Page not found</p>';
    pageContent.classList.add('animate-fade-in');
}

// ========== Page Content Generators ==========

function getDashboardContent() {
    return `
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Total Users Monitored</span>
                    <div class="stat-icon" style="background: rgba(59, 130, 246, 0.2); color: var(--primary);">👥</div>
                </div>
                <div class="stat-value">1,247</div>
                <div class="stat-trend trend-up">↑ 12% from last month</div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">High Risk Alerts</span>
                    <div class="stat-icon" style="background: rgba(239, 68, 68, 0.2); color: var(--danger);">🚨</div>
                </div>
                <div class="stat-value">23</div>
                <div class="stat-trend trend-down">↓ 8% from last week</div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Avg Risk Score</span>
                    <div class="stat-icon" style="background: rgba(245, 158, 11, 0.2); color: var(--warning);">📊</div>
                </div>
                <div class="stat-value">42.3</div>
                <div class="stat-trend trend-up">↑ 3.2 points</div>
            </div>

            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Active Sessions</span>
                    <div class="stat-icon" style="background: rgba(16, 185, 129, 0.2); color: var(--success);">⚡</div>
                </div>
                <div class="stat-value">892</div>
                <div class="stat-trend trend-up">↑ 156 active now</div>
            </div>
        </div>

        <div class="chart-container">
            <div class="chart-header">
                <h3>Risk Trend Analysis</h3>
                <select style="padding: 0.5rem; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 6px; color: var(--text-main);">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                </select>
            </div>
            <div class="chart">📈 Risk trend visualization (Chart library integration)</div>
        </div>

        <div class="chart-container">
            <div class="chart-header">
                <h3>Recent Critical Alerts</h3>
            </div>
            <table class="alerts-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Alert Type</th>
                        <th>Severity</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>john.doe@company.com</td>
                        <td>Unusual Data Access</td>
                        <td><span class="severity-badge severity-critical">Critical</span></td>
                        <td>2 hours ago</td>
                    </tr>
                    <tr>
                        <td>sarah.smith@company.com</td>
                        <td>Off-hours Login</td>
                        <td><span class="severity-badge severity-high">High</span></td>
                        <td>5 hours ago</td>
                    </tr>
                    <tr>
                        <td>mike.jones@company.com</td>
                        <td>Multiple Failed Logins</td>
                        <td><span class="severity-badge severity-medium">Medium</span></td>
                        <td>1 day ago</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function getAnalyticsContent() {
    return `
        <div class="chart-container">
            <div class="chart-header">
                <h3>Behavioral Pattern Analysis</h3>
            </div>
            <div class="chart">🧠 ML-powered behavioral analytics visualization</div>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">94.7%</div>
                <div class="stat-label">Model Accuracy</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">127</div>
                <div class="stat-label">Anomalies Detected</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">8.2s</div>
                <div class="stat-label">Avg Detection Time</div>
            </div>
        </div>
    `;
}

function getHeatmapContent() {
    return `
        <div class="chart-container">
            <div class="chart-header">
                <h3>Organizational Risk Heatmap</h3>
            </div>
            <div class="chart">🗺️ Interactive department risk heatmap</div>
        </div>
    `;
}

function getUserProfileContent() {
    return `
        <div class="chart-container">
            <div class="chart-header">
                <h3>Individual User Risk Assessment</h3>
            </div>
            <div class="chart">👤 Detailed user risk profile and behavior timeline</div>
        </div>
    `;
}

function getExfiltrationContent() {
    return `
        <div class="chart-container">
            <div class="chart-header">
                <h3>Data Exfiltration Monitoring</h3>
            </div>
            <div class="chart">📤 Real-time data transfer monitoring and alerts</div>
        </div>
    `;
}

function getAlertsContent() {
    return `
        <div class="chart-container">
            <div class="chart-header">
                <h3>All Security Alerts</h3>
            </div>
            <table class="alerts-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Alert Type</th>
                        <th>Severity</th>
                        <th>Status</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#A-1247</td>
                        <td>john.doe@company.com</td>
                        <td>Unusual Data Access</td>
                        <td><span class="severity-badge severity-critical">Critical</span></td>
                        <td>Open</td>
                        <td>2 hours ago</td>
                    </tr>
                    <tr>
                        <td>#A-1246</td>
                        <td>sarah.smith@company.com</td>
                        <td>Off-hours Login</td>
                        <td><span class="severity-badge severity-high">High</span></td>
                        <td>Investigating</td>
                        <td>5 hours ago</td>
                    </tr>
                    <tr>
                        <td>#A-1245</td>
                        <td>mike.jones@company.com</td>
                        <td>Multiple Failed Logins</td>
                        <td><span class="severity-badge severity-medium">Medium</span></td>
                        <td>Resolved</td>
                        <td>1 day ago</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function getAuditContent() {
    return `
        <div class="chart-container">
            <div class="chart-header">
                <h3>System Audit Logs</h3>
            </div>
            <div class="chart">📋 Comprehensive audit trail and compliance logs</div>
        </div>
    `;
}

function getUsersContent() {
    return `
        <div class="chart-container">
            <div class="chart-header">
                <h3>User Management</h3>
            </div>
            <div class="chart">👥 User administration and access control</div>
        </div>
    `;
}
