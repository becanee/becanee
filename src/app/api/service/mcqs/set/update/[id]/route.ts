import { supabase } from '@/lib/supabase';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Func: PATCH endpoint untuk mengupdate data mcqs set dari API server
 * Created At: Rama - Minggu, 14 September 2025
 * Created By: becaneee.xyz
 * @param request - NextRequest object containing query parameters
 */
export async function PATCH(request: NextRequest) {
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
        const { created_by, parent, difficulty, question, answer, ai_explanation, human_explanation, option_a, option_b, option_c, option_d, active } = body;
        const id = request.nextUrl.pathname.split('/').pop();

        const { data: UpdateMcqsSet, error: ErrorUpdateMcqsSet } = await supabase
            .from('m_mcqs_set')
            .update({
                created_by,
                klola_id: scope.toUpperCase(),
                parent,
                difficulty,
                question,
                answer,
                ai_explanation,
                human_explanation,
                option_a,
                option_b,
                option_c,
                option_d,
                active,
            })
            .eq('id', id)
            .select(`*, parent(*, document(*))`)

        // Return response dengan format uniform
        return NextResponse.json({
            status: true,
            code: 200,
            message: "Data mcqs set berhasil diupdate",
            powered_by: "PT Klola Indonesia",
            data: UpdateMcqsSet?.[0],
        });

    } catch (error: any) {
        // Handle axios error
        if (error.response) {
            return NextResponse.json({
                status: false,
                code: error.response.status,
                message: error.response.data?.message || "Gagal mengupdate data mcqs set",
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