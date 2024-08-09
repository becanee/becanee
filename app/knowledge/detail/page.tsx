import Footer from "@/components/Footer";
import KnowledgeDetailpages from "@/screens/knowledge/detail";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <KnowledgeDetailpages />

      <Footer />
    </div>
  );
}