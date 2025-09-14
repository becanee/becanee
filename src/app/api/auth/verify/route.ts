import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { supabase } from '@/lib/supabase';
import { error } from 'console';

/**
 * Func: Token verification endpoint untuk mendapatkan data user
 * Created At: Rama - Jumat, 29 Agustus 2025
 * Created By: becaneee.xyz
 * @param request - NextRequest object containing token for verification
 * @returns NextResponse with user data
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { t } = body;

        // Validasi input token
        if (!t) {
            return NextResponse.json({
                status: false,
                code: 400,
                message: "Token harus disediakan",
                powered_by: "PT Klola Indonesia",
                data: null,
            }, { status: 400 });
        }

        // Konfigurasi request ke API server
        const apiUrl = `${process.env.NEXT_PUBLIC_ENDPOINT}/auth/token`;
        const headers = {
            'Authorization': `Bearer ${t}`,
            'X-Scope': process.env.NEXT_PUBLIC_SCOPE,
            'Content-Type': 'application/json'
        };

        // Hit API verify token
        const response = await axios.post(apiUrl, { wstoken: t }, { headers });
        let employee = {};

        if (response.data?.data?.id) {
            let { data: GetUsers, error: GetUsersError }: any = await supabase
                .from('m_users')
                .select("*")
                .or(`nip.eq.${response?.data?.data?.employee?.nip}, klola_id.eq.${response?.data?.data?.employee?.group}`)

            if (GetUsers?.length === 0) {
                const { data: createUser, error: createUserError } = await supabase
                    .from('m_users')
                    .insert([
                        {
                            klola_id: response?.data?.data?.employee?.group,
                            name: response?.data?.data?.name,
                            nip: response?.data?.data?.employee?.nip,
                            email: response?.data?.data?.email,
                            rank: response?.data?.data?.employee?.pangkat,
                            grade: response?.data?.data?.employee?.golongan,
                            department: response?.data?.data?.employee?.jabatan,
                            divisi: response?.data?.data?.employee?.jabatan,
                            unit: response?.data?.data?.employee?.area,
                            office: response?.data?.data?.employee?.branch,
                            provider: "klola_hrms",
                            avatar: response?.data?.data?.avatar?.url,
                            created_by: "system",
                            created_at: new Date(),
                            active: false,
                        },
                    ])
                    .select()
                    
                employee = createUser?.[0];
            } else {
                employee = GetUsers?.[0];
            }
        }

        // Return response dengan format uniform
        return NextResponse.json({
            status: true,
            code: 200,
            message: "Sign in Berhasil, redirecting...",
            powered_by: "PT Klola Indonesia",
            data: employee,
        });
    } catch (error: any) {
        console.error('Token verification error:', error);

        // Handle axios error
        if (error.response) {
            return NextResponse.json({
                status: false,
                code: error.response.status,
                message: error.response.data?.message || "Token tidak valid",
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