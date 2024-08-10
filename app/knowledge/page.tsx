import Footer from "@/components/Footer";
import NavbarComponent from "@/components/layouts/Navbar";
import Knowledgepages from "@/screens/knowledge";

export default async function Index() {
  return (
    <>
    <NavbarComponent />
    
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Knowledgepages />

      <Footer />
    </div>
    </>
  );
}
