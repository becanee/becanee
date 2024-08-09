import Footer from "@/components/Footer";
import Knowledgepages from "@/screens/knowledge";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Knowledgepages />

      <Footer />
    </div>
  );
}
