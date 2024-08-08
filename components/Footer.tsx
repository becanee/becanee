import { IconBrandFramerMotion, IconBrandNextjs, IconBrandSupabase, IconBrandTailwind, IconBrandVercel } from "@tabler/icons-react";

export default async function Footer() {
  return (

      <footer className="flex flex-col w-full items-center text-center text-surface dark:text-white">
        <div className="pt-9">
          <div className="w-full p-4 text-center">Powered by</div>
          {/* Social media icons container */}
          <div className="mb-6 flex justify-center space-x-1">
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-zinc-900"
              data-twe-ripple-init=""
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <IconBrandNextjs />
              </span>
            </a>
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-zinc-900"
              data-twe-ripple-init=""
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <IconBrandTailwind />
              </span>
            </a>
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-zinc-900"
              data-twe-ripple-init=""
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <IconBrandFramerMotion />
              </span>
            </a>
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-zinc-900"
              data-twe-ripple-init=""
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <IconBrandSupabase />
              </span>
            </a>
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-zinc-900"
              data-twe-ripple-init=""
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <IconBrandVercel />
              </span>
            </a>
          </div>
        </div>
        {/*Copyright section*/}
        <div className="w-full bg-black/5 p-4 text-center">
          © {new Date().getFullYear()} Copyright
          <a href="https://becanee.vercel.app">&nbsp;Bécanee</a>
        </div>
      </footer>
  );
}
