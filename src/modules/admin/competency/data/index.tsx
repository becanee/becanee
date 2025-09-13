"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardCategory } from "./_comp/category/card-category";
import { CardCompetency } from "./_comp/competency/card-competency";
import { CardLevel } from "./_comp/level/card-level";
import { CardProficiency } from "./_comp/proficiency/card-proficiency";

export function DataCompetencyModule() {
    return (
        <>
            <Tabs defaultValue="Competency" className="w-auto">
                <TabsList className="mb-2">
                    <TabsTrigger value="Competency">Competency</TabsTrigger>
                    <TabsTrigger value="Category">Category</TabsTrigger>
                    <TabsTrigger value="Proficiency">Proficiency</TabsTrigger>
                    <TabsTrigger value="Level">Level</TabsTrigger>
                </TabsList>
                <TabsContent value="Competency">
                    <CardCompetency />
                </TabsContent>
                <TabsContent value="Category">
                    <CardCategory />
                </TabsContent>
                <TabsContent value="Proficiency">
                    <CardProficiency />
                </TabsContent>
                <TabsContent value="Level">
                    <CardLevel />
                </TabsContent>
            </Tabs>
        </>
    );
}