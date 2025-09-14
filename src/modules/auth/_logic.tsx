'use client';

import { encryptData } from '@/lib/crypto';
import axios from 'axios';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

/**
 * Func: Custom hook untuk authentication logic
 * Created At: Rama - Jumat, 29 Agustus 2025
 * Created By: becaneee.xyz
 * @returns Object dengan state dan functions untuk authentication
 */
export const useAuthLogic = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    /**
     * Func: Handle login process
     * @param employeeId - Employee ID dari user
     * @param password - Password dari user
     * @param scope - Scope from select (DEV MODE)
     */
    const handleLogin = async (employeeId: string, password: string, scope: any) => {
        setIsLoading(true);
        setError(null);

        try {
            // Step 1: Hit API login
            const loginResponse = await axios.post('/api/auth', {
                username: employeeId,
                password: password
            });

            if (!loginResponse.data.status) {
                toast.error(loginResponse.data.message || 'Login gagal');
            }

            // Extract token dari response login
            const token = loginResponse.data.data?.access_token || loginResponse.data.data?.token;

            if (!token) {
                toast.error('Token tidak ditemukan dalam response');
            }

            // Step 2: Hit API verify token untuk mendapatkan data user
            const verifyResponse = await axios.post('/api/auth/verify', {
                t: token
            });

            if (!verifyResponse.data.status) {
                toast.error(verifyResponse.data.message || 'Verifikasi token gagal');
            }

            toast.success(verifyResponse.data.message || 'Sign in berhasil');
            const userData = verifyResponse.data.data;

            // Step 3: Simpan scope di cookie dengan nama "_S"
            setCookie('_S', scope, {
                maxAge: 60 * 60 * 24 * 1, // 1 hari
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            });

            // Step 4: Simpan token di cookie dengan nama "_T"
            setCookie('_T', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
                maxAge: 60 * 60 * 24 * 1, // 1 hari
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            });

            // Step 5: Enkripsi dan simpan data user di cookie dengan nama "_U"
            const encryptedUserData = encryptData(userData);
            setCookie('_U', encryptedUserData, {
                maxAge: 60 * 60 * 24 * 1, // 1 hari
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            });

            // Step 6: Redirect ke halaman utama
            router.push('/d');

        } catch (error: any) {
            toast.error('Authentication error:', error);

            if (error.response) {
                setError(error.response.data?.message || 'Terjadi kesalahan saat login');
            } else if (error.message) {
                setError(error.message);
            } else {
                setError('Terjadi kesalahan yang tidak diketahui');
            }
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Func: Validate form input
     * @param employeeId - Employee ID untuk divalidasi
     * @param password - Password untuk divalidasi
     * @returns Boolean indicating if form is valid
     */
    const validateForm = (employeeId: string, password: string): boolean => {
        if (!employeeId.trim()) {
            setError('Employee ID harus diisi');
            return false;
        }

        if (!password.trim()) {
            setError('Password harus diisi');
            return false;
        }

        if (employeeId.length < 3) {
            setError('Employee ID minimal 3 karakter');
            return false;
        }

        if (password.length < 6) {
            setError('Password minimal 6 karakter');
            return false;
        }

        return true;
    };

    /**
     * Func: Handle logout process
     */
    const handleLogout = () => {
        try {
            // Hapus semua cookie authentication
            deleteCookie('_S'); // Scope cookie
            deleteCookie('_T'); // Token cookie
            deleteCookie('_U'); // User data cookie

            // Redirect ke halaman auth
            router.push('/auth');
        } catch (error) {
            console.error('Logout error:', error);
            // Tetap redirect meskipun ada error
            router.push('/auth');
        }
    };

    /**
     * Func: Clear error message
     */
    const clearError = () => {
        setError(null);
    };

    return {
        isLoading,
        error,
        handleLogin,
        handleLogout,
        validateForm,
        clearError
    };
};