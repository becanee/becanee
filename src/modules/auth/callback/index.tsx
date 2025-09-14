import { ShineBorder } from "@/components/magicui/shine-border";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export function CallbackCard() {
    return (
        <Card className="relative overflow-hidden max-w-[350px] w-full">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <CardHeader>
                <CardTitle>Something went wrong</CardTitle>
                <CardDescription className="mt-1">
                    {"We couldn't find your company. Please contact the administrator."}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
