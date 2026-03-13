import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "JK & G TAX ASSOCIATES | Official GST & Income Tax Consultant Arambagh",
  description: "Best Income Tax and GST consultancy in Hooghly. Established since 2019, JK & G Tax Associates provides professional services for ITR filing, MSME registration, and business legal drafting.",
  keywords: ["GST Consultant Arambagh", "Tax Associate Hooghly", "Income Tax Filing India", "MSME Registration Online", "Tax Consultant West Bengal", "JK & G Tax Associates", "Priyam Ghosh Tax Consultant"],
  authors: [{ name: "Priyam Ghosh" }],
  creator: "JK & G Tax Associates",
  publisher: "JK & G Tax Associates",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'JK & G TAX ASSOCIATES | Expert Financial Consultancy',
    description: 'Premier tax and legal advisory firm in Arambagh. We handle GST, ITR, and Business compliance with precision.',
    url: 'https://jkgtaxassociates.com',
    siteName: 'JK & G Tax Associates',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JK & G TAX ASSOCIATES | Official Tax Advisory',
    description: 'Authorized GST & Income Tax Practitioner services in Arambagh, Hooghly.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jkgtaxassociates.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                  else document.documentElement.classList.remove('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background pb-16 md:pb-0`}>
        <Navbar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
