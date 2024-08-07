import { createClient } from "@/utils/supabase/server";
import Blogpages from "@/screens/blog";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Blogpages />

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
