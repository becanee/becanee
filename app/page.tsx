import Footer from "@/components/Footer";
import Homepages from "@/screens/homepages";
import HomeContentPages from "@/screens/homepages/content";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Homepages />
      <HomeContentPages />
      <Footer />
    </div>
  );
}
