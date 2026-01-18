import { useEffect } from 'react';

const SecurityHeaders = () => {
    useEffect(() => {
        // In a real production app, these are set by the server (Nginx/Cloudflare)
        // Here we simulate/enforce client-side security policies

        // 1. Prevent Clickjacking
        if (window.self !== window.top) {
            window.top.location = window.self.location;
        }

        // 2. Clear sensitive data from URL if any
        if (window.location.search.includes('token') || window.location.search.includes('key')) {
            const url = new URL(window.location);
            url.searchParams.delete('token');
            url.searchParams.delete('key');
            window.history.replaceState({}, '', url);
        }

        console.log("[Security Engine]: Client-side headers enforced.");
    }, []);

    return null;
};

export default SecurityHeaders;
