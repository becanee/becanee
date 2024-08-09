import Footer from "@/components/Footer";
import AboutPages from "@/screens/about";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <AboutPages />

      <Footer />
    </div>
  );
}
