import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "myAssessment | Klola Indonesia - Platform Assessment Digital",
    template: "%s | myAssessment Klola Indonesia"
  },
  description: "Platform assessment digital terdepan di Indonesia untuk evaluasi kompetensi karyawan, tes psikologi, dan pengembangan SDM. Solusi HR tech terpercaya untuk perusahaan modern.",
  keywords: [
    "assessment digital",
    "tes kompetensi",
    "evaluasi karyawan",
    "HR tech Indonesia",
    "tes psikologi online",
    "pengembangan SDM",
    "talent management",
    "assessment center",
    "klola indonesia",
    "platform assessment"
  ],
  authors: [{ name: "Klola Indonesia", url: "https://klola.id" }],
  creator: "Klola Indonesia",
  publisher: "Klola Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://assessment.becaneee.xyz"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/en"
    }
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://assessment.becaneee.xyz",
    title: "myAssessment | Klola Indonesia - Platform Assessment Digital",
    description: "Platform assessment digital terdepan di Indonesia untuk evaluasi kompetensi karyawan, tes psikologi, dan pengembangan SDM. Solusi HR tech terpercaya untuk perusahaan modern.",
    siteName: "myAssessment | Klola Indonesia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "myAssessment | Klola Indonesia - Platform Assessment Digital"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "myAssessment | Klola Indonesia - Platform Assessment Digital",
    description: "Platform assessment digital terdepan di Indonesia untuk evaluasi kompetensi karyawan, tes psikologi, dan pengembangan SDM.",
    images: ["/twitter-image.jpg"],
    creator: "@KlolaIndonesia"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code"
  },
  category: "technology",
  classification: "Business"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
  colorScheme: "light dark"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Klola Indonesia",
    "url": "https://assessment.klola.id",
    "logo": "https://assessment.klola.id/logo.png",
    "description": "Platform assessment digital terdepan di Indonesia untuk evaluasi kompetensi karyawan, tes psikologi, dan pengembangan SDM.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Jakarta"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-21-xxxx-xxxx",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/klola-indonesia",
      "https://twitter.com/KlolaIndonesia",
      "https://www.instagram.com/klola.indonesia"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Platform assessment digital untuk evaluasi kompetensi dan pengembangan SDM",
      "category": "HR Technology"
    }
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.klola.id" />
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="myAssessment Klola" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
