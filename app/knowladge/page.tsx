import Footer from "@/components/Footer";
import Knowladgepages from "@/screens/knowladge";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Knowladgepages />

      <Footer />
    </div>
  );
}
