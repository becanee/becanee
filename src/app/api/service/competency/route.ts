import { supabase } from '@/lib/supabase';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Func: GET endpoint untuk mengambil data competency dari API server
 * Created At: Rama - Minggu, 14 September 2025
 * Created By: becaneee.xyz
 * @param request - NextRequest object containing query parameters
 */
export async function GET(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const token = request.headers.get('Authorization') || cookieStore.get('_T')?.value;
        const scope = request.headers.get('X-Scope') || cookieStore.get('_S')?.value;

        // Validasi token
        if (!token || !scope) {
            return NextResponse.json({
                status: false,
                code: 401,
                message: "Token atau scope tidak ditemukan",
                powered_by: "PT Klola Indonesia",
                data: null,
            }, { status: 401 });
        }

        let { data: GetCompetency, error: GetCompetencyError }: any = await supabase
            .from('m_competency')
            .select("*, category(*), proficiency(*, level(*))")
            .or(`klola_id.eq.${scope.toUpperCase()}`)
            .order('created_at', { ascending: false })

        // Return response dengan format uniform
        return NextResponse.json({
            status: true,
            code: 200,
            message: "Data competency berhasil diambil",
            powered_by: "PT Klola Indonesia",
            data: GetCompetency,
            pagination: GetCompetency ? {
                link: {
                    first: request.url,
                    next: Math.ceil(GetCompetency.length / 10) > 1 ? request.url : null,
                    last: request.url
                },
                total: GetCompetency.length,
                per_page: 10,
                current_page: 1,
                total_pages: Math.ceil(GetCompetency.length / 10)
            } : null
        });

    } catch (error: any) {
        console.error('Competency list error:', error);

        // Handle axios error
        if (error.response) {
            return NextResponse.json({
                status: false,
                code: error.response.status,
                message: error.response.data?.message || "Gagal mengambil data competency",
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