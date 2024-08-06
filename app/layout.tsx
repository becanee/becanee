import { Source_Code_Pro } from 'next/font/google'
import "./globals.css";
import { Providers } from "./providers";
import NavbarComponent from "@/components/layouts/Navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Becanee",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={sourceCodePro.className}>
      <body className="bg-background text-foreground">
        <main className="font-customFont min-h-screen flex flex-col items-center">
          <Providers>
            <NavbarComponent />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
