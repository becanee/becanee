import { supabase } from '@/lib/supabase';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Func: GET endpoint untuk mengambil data competency dari API server
 * Created At: Rama - Minggu, 14 September 2025
 * Created By: becaneee.xyz
 * @param request - NextRequest object containing query parameters
 */
export async function POST(request: NextRequest) {
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

        const body = await request.json();
        const { created_by, code, name, description, category, proficiency, active } = body;

        const { data: InsertCompetency, error: ErrorInsertCompetency } = await supabase
            .from('m_competency')
            .insert([
                {
                    created_by,
                    klola_id: scope.toUpperCase(),
                    code,
                    name,
                    description,
                    category,
                    proficiency,
                    active,
                },
            ])
            .select('*, category(*), proficiency(*, level(*))')

console.log(ErrorInsertCompetency);

        // Return response dengan format uniform
        return NextResponse.json({
            status: true,
            code: 200,
            message: "Data competency berhasil disimpan",
            powered_by: "PT Klola Indonesia",
            data: InsertCompetency?.[0],
        });

    } catch (error: any) {
        // Handle axios error
        if (error.response) {
            return NextResponse.json({
                status: false,
                code: error.response.status,
                message: error.response.data?.message || "Gagal menyimpan data competency",
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