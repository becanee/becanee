import { setCookie } from "cookies-next";

export const getValidSubdomain = (host?: string | null) => {
    let subdomain: string | null = null;
    if (!host && typeof window !== 'undefined') {
        // On client side, get the host from window
        host = window.location.host;
    }
    if (host && host.includes('.')) {
        const candidate = host.split('.')[0];
        if (candidate && !candidate.includes('localhost')) {
            // Valid candidate
            subdomain = candidate;
        }
    }

    setCookie('_S', subdomain, {
        maxAge: 60 * 60 * 24 * 1, // 1 hari
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });

    return subdomain;
};