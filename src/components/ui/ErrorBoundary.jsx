import React, { Component } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("[Global Error]:", error, errorInfo);
        // In production, send to Sentry/Datadog here
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary-container glass">
                    <div className="error-content">
                        <AlertTriangle size={64} className="text-danger" />
                        <h2>Security Exception Detected</h2>
                        <p className="text-muted">
                            The application encountered an unexpected error. This has been logged for security review.
                        </p>
                        <button
                            className="login-btn"
                            onClick={() => window.location.reload()}
                        >
                            <RefreshCw size={18} /> Restart Session
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
