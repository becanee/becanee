import { checkAuthentication } from "@/auth/auth";
import { generateKpi } from "@/core/generate/kpi";
import { generateObjective } from "@/core/generate/objective";
import { generateTask } from "@/core/generate/task";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req?.url);
    const type: any = searchParams?.get("t");
    const checkAuth = await checkAuthentication(req);
    let payload: any = {};

    try {
        const contentType = req.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
            const bodyText = await req.text();
            if (bodyText.trim()) {
                payload = JSON.parse(bodyText);
            }
        }

        if (!type) {
            return NextResponse.json(
                {
                    status: "error",
                    httpCode: 404,
                    powered_by: process.env.NEXT_PUBLIC_COMPANY,
                    message: "Service not availabe",
                },
                { status: 404 }
            );
        }

        if (!checkAuth.success) {
            return NextResponse.json(
                {
                    status: "error",
                    httpCode: 401,
                    powered_by: process.env.NEXT_PUBLIC_COMPANY,
                    message: checkAuth.message,
                },
                { status: 401 }
            );
        }

        return NextResponse.json({
            status: "success",
            httpCode: 200,
            powered_by: process.env.NEXT_PUBLIC_COMPANY,
            data: type === "kpi" ? await generateKpi(payload) :
                type === "task" ? await generateTask(payload) :
                type === "objective" ? await generateObjective(payload) : null
        });

    } catch (error) {
        return NextResponse.json(
            {
                status: "error",
                httpCode: 500,
                powered_by: process.env.NEXT_PUBLIC_COMPANY,
                message: "Unknown Network or server error",
            },
            { status: 500 }
        );
    }
}
