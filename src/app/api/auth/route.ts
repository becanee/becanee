import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

/**
 * Func: Authentication endpoint untuk login user
 * Created At: Rama - Jumat, 29 Agustus 2025
 * Created By: becaneee.xyz
 * @param request - NextRequest object containing login credentials
 * @returns NextResponse with authentication result
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password } = body;

        // Validasi input
        if (!username || !password) {
            return NextResponse.json({
                status: false,
                code: 400,
                message: "Username dan password harus diisi",
                powered_by: "PT Klola Indonesia",
                data: null,

            }, { status: 400 });
        }

        // Konfigurasi request ke API server
        const apiUrl = `${process.env.NEXT_PUBLIC_ENDPOINT}/auth/login`;
        const headers = {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            'X-Scope': process.env.NEXT_PUBLIC_SCOPE,
            'Lang': 'us',
            'Content-Type': 'application/json'
        };

        const requestBody = {
            username,
            password,
            source: 'web'
        };

        // Hit API login
        const response = await axios.post(apiUrl, requestBody, { headers });

        // Return response dengan format uniform
        return NextResponse.json({
            status: true,
            code: 200,
            message: "Login berhasil",
            powered_by: "PT Klola Indonesia",
            data: response.data?.data,
        });

    } catch (error: any) {
        console.error('Login error:', error);

        // Handle axios error
        if (error.response) {
            return NextResponse.json({
                status: false,
                code: error.response.status,
                message: error.response.data?.message || "Login gagal",
                powered_by: "PT Klola Indonesia",
                data: null,

            }, { status: error.response.status });
        }

        // Handle network or other errors
        return NextResponse.json({
            status: false,
            code: 500,
            message: "Terjadi kesalahan server",
            powered_by: "PT Klola Indonesia",
            data: null,
        }, { status: 500 });
    }
}