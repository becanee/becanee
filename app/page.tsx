import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Homepages from "@/screens/homepages";
import HomeContentPages from "@/screens/homepages/content";

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
      {/* <nav className="w-full flex justify-center">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
           <NavbarComponent />
           <DeployButton />
           {isSupabaseConnected && <AuthButton />}
        </div>
      </nav> */}

      {/* <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3"> */}
      <Homepages />
      {/* <main className="flex-1 flex flex-col gap-6"> */}
      <HomeContentPages />
      {/* <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />} */}
      {/* </main> */}
      {/* </div> */}

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
