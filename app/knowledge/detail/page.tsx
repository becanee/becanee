import Footer from "@/components/Footer";
import NavbarComponent from "@/components/layouts/Navbar";
import KnowledgeDetailpages from "@/screens/knowledge/detail";

export default async function Index() {
  return (
    <>
    <NavbarComponent />

    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <KnowledgeDetailpages />

      <Footer />
    </div>
    </>
  );
}