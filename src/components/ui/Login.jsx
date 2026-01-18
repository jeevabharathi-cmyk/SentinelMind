import { useState } from 'react';
import { Lock, Shield, ArrowRight, Fingerprint, AlertCircle } from 'lucide-react';
import { useSecurity } from '../../context/SecurityContext';
import './Login.css';

const Login = () => {
    const { login, verifyMfa, isAuthenticated } = useSecurity();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');

    const handleNext = (e) => {
        e.preventDefault();
        if (email && password) {
            login({ email, password });
        }
    };

    const handleOtpChange = (index, value) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        if (verifyMfa(otp)) {
            // Success
        } else {
            setError('Invalid security code. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-background">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
            </div>

            <div className="login-card glass animate-fade-in">
                <div className="login-header">
                    <div className="login-logo">
                        <Lock size={32} className="text-primary" />
                    </div>
                    <h2>SentinelMind</h2>
                    <p className="text-muted">Enterprise Security Access</p>
                </div>

                {error && (
                    <div className="error-alert glass">
                        <AlertCircle size={16} /> {error}
                    </div>
                )}

                {!isAuthenticated ? (
                    <form className="login-form" onSubmit={handleNext}>
                        <div className="input-group">
                            <label>Enterprise Email</label>
                            <input
                                type="email"
                                placeholder="analyst@sentinelmind.ai"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                            />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </div>
                        <button type="submit" className="login-btn">
                            Continue <ArrowRight size={18} />
                        </button>
                    </form>
                ) : (
                    <form className="login-form" onSubmit={handleVerify}>
                        <div className="mfa-header">
                            <Shield size={24} className="text-accent" />
                            <h3>Multi-Factor Authentication</h3>
                            <p className="text-muted">Enter the 6-digit code from your hardware token or app.</p>
                        </div>

                        <div className="otp-inputs">
                            {otp.map((digit, idx) => (
                                <input
                                    key={idx}
                                    id={`otp-${idx}`}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                                    className="otp-field"
                                    autoComplete="one-time-code"
                                />
                            ))}
                        </div>

                        <button type="submit" className="login-btn">
                            Verify & Access <Fingerprint size={18} />
                        </button>

                        <button type="button" className="back-link" onClick={() => window.location.reload()}>
                            Cancel Request
                        </button>
                    </form>
                )}

                <div className="login-footer">
                    <span className="security-badge">
                        <Shield size={14} /> FIPS 140-2 Level 3 Compliant
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;
