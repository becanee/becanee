import Homepages from "@/screens/homepages";
import HomeContentPages from "@/screens/homepages/content";

export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Homepages />
      <HomeContentPages />

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://becanee.vercel.app"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Bécanee
          </a>
        </p>
      </footer>
    </div>
  );
}
