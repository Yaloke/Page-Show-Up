import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TELOS | Ton appel est réservé",
  description:
    "Prépare-toi pour ton appel avec Thomas. Optimise ton mode de vie pour débloquer tes performances.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "TELOS | Dévoile ton plein potentiel",
    description:
      "Débloque tes performances sportives en optimisant ta santé.",
    images: [
      {
        url: "/images/og-telos.png",
        width: 1200,
        height: 630,
        alt: "TELOS - Dévoile ton plein potentiel",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "TELOS | Dévoile ton plein potentiel",
    description:
      "Débloque tes performances sportives en optimisant ta santé.",
    images: ["/images/og-telos.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
