import { supabase } from '@/lib/supabase';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Func: GET endpoint untuk mengambil data configuration dari API server
 * Created At: Rama - Minggu, 14 September 2025
 * Created By: becaneee.xyz
 * @param request - NextRequest object containing query parameters
 */
export async function GET(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const scope = request.headers.get('X-Scope') || cookieStore.get('_S')?.value;

        // Validasi token
        if (!scope) {
            return NextResponse.json({
                status: false,
                code: 401,
                message: "Scope tidak ditemukan",
                powered_by: "PT Klola Indonesia",
                data: null,
            }, { status: 401 });
        }

        let { data: GetConfiguration, error: GetConfigurationError }: any = await supabase
            .from('configuration')
            .select()
            .or(`klola_id.eq.${scope?.toUpperCase()}`)
            .order('created_at', { ascending: false })

        // Return response dengan format uniform
        return NextResponse.json({
            status: true,
            code: 200,
            message: "Data configuration berhasil diambil",
            powered_by: "PT Klola Indonesia",
            data: GetConfiguration?.[0]
        });

    } catch (error: any) {
        // Handle axios error
        if (error.response) {
            return NextResponse.json({
                status: false,
                code: error.response.status,
                message: error.response.data?.message || "Gagal mengambil data configuration",
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