import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/shine-border";
import { IconEyeSearch, IconFileAnalytics, IconFileTypePdf, IconFileTypeXls } from "@tabler/icons-react";

export function CardReportItem({ report }: { report: any }) {
    console.log(report);

    return (
        <Card className="relative overflow-hidden max-w-auto w-full">
            <ShineBorder shineColor={["#3B82F6", "#60A5FA", "#FFFFFF"]} />
            <CardHeader>
                <CardTitle className="flex gap-1"><IconFileAnalytics />
                    <h1 className="text-lg font-bold">
                        {report?.competency}
                    </h1>
                </CardTitle>
                <CardDescription>
                    Detail report for the assesment
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid auto-rows-min gap-2 grid-cols-2">
                    <div>
                        <h1 className="flex text-md font-bold uppercase"> Competency</h1>
                        <p className="text-muted-foreground">{report?.competency}</p>
                    </div>
                    <div>
                        <h1 className="flex text-md font-bold uppercase">Category</h1>
                        <p className="text-muted-foreground">{report?.category}</p>
                    </div>
                    <div>
                        <h1 className="flex text-md font-bold uppercase">Ideal Proficient Level</h1>
                        <p className="text-muted-foreground">{report?.ideal_level}</p>
                    </div>
                    <div>
                        <h1 className="flex text-md font-bold uppercase"> Assessment Schedule</h1>
                        <p className="text-muted-foreground">{report?.schedule}</p>
                    </div>
                    <div>
                        <h1 className="flex text-md font-bold uppercase"> Total Questionnaire</h1>
                        <p className="text-muted-foreground">{report?.total_questionnaire}</p>
                    </div>
                    <div>
                        <h1 className="flex text-md font-bold uppercase">Total Candidate</h1>
                        <p className="text-muted-foreground">{report?.total_candidate}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex gap-4 justify-between">
                <div className="flex gap-4">
                    <Button className="min-w-[1rem]" variant="outline" size="sm"><IconFileTypePdf />Excel Report</Button>
                    <Button className="min-w-[1rem]" variant="outline" size="sm"><IconFileTypeXls />PDF Report</Button>
                </div>
                <Button className="max-w-lg" variant={"outline"}><IconEyeSearch />View Summary</Button>
            </CardFooter>
        </Card>
    );
}
