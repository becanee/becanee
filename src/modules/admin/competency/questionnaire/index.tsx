"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardEssay } from "./_comp/essay/card-essay";
import { CardMcqs } from "./_comp/mcqs/card-mcqs";

export function QuestionnaireModule() {
    return (
        <>
            <Tabs defaultValue="MultipleChoiceQuiz" className="w-auto">
                <TabsList className="mb-2">
                    <TabsTrigger value="MultipleChoiceQuiz">Multiple Choice Quiz</TabsTrigger>
                    <TabsTrigger value="Essay">Essay Quiz</TabsTrigger>
                </TabsList>
                <TabsContent value="MultipleChoiceQuiz">
                    <CardMcqs />
                </TabsContent>
                <TabsContent value="Essay">
                    <CardEssay />
                </TabsContent>
            </Tabs>
        </>
    );
}