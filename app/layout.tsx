import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sora = localFont({
  src: [
    {
      path: "../public/assets/sora-latin.woff2",
      weight: "400 800",
      style: "normal",
    },
  ],
  variable: "--font-sora",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../public/assets/inter-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ninjas.motiondojo.com"),
  title: "Keyframe Ninjas | Motion Dojo Student Showcase",
  description:
    "A public showcase of Keyframe Ninjas, the paid students of Motion Dojo's Black Belt in Motion Design course. Practice. Keyframe. Repeat.",
  keywords: [
    "Motion Dojo",
    "Keyframe Ninjas",
    "Motion Design",
    "After Effects",
    "Black Belt in Motion Design",
    "Student Showcase",
    "Motion Portfolio",
  ],
  openGraph: {
    title: "Keyframe Ninjas | Motion Dojo Student Showcase",
    description:
      "See what Keyframe Ninjas are making. Explore final capstone projects and student reels from Motion Dojo's Black Belt in Motion Design course.",
    url: "https://ninjas.motiondojo.com",
    siteName: "Motion Dojo Keyframe Ninjas",
    images: [
      {
        url: "/images/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "Motion Dojo Keyframe Ninjas Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyframe Ninjas | Motion Dojo Student Showcase",
    description: "See what Keyframe Ninjas are making. Final projects from Motion Dojo students.",
    images: ["/images/hero-poster.webp"],
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon-128.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored ? stored : (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
