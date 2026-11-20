import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieNotice from "@/components/CookieNotice";
import AlertBanner from "@/components/AlertBanner";
import { getActiveAlerts } from "@/lib/api";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Kigali Safety Academy | Safety and First Aid Training",
    template: "%s | Kigali Safety Academy",
  },
  description:
    "Explore practical occupational safety, first aid, fire safety, and rigging training with Kigali Safety Academy. Courses, workshops, events, and safety alerts for safer workplaces.",
  applicationName: siteConfig.name,
  keywords: [
    "Kigali safety training",
    "occupational safety and health Rwanda",
    "first aid training Kigali",
    "fire fighting training",
    "rigger safety training",
    "construction safety",
    "workplace safety courses",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "Kigali Safety Academy | Safety and First Aid Training",
    description:
      "Practical occupational safety, first aid, fire safety, and rigging training for individuals and organizations.",
    images: [{ url: "/assets/kigali-safety-academy-logo.webp", alt: "Kigali Safety Academy logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kigali Safety Academy",
    description: "Practical safety training for safer workplaces.",
    images: ["/assets/kigali-safety-academy-logo.webp"],
  },
  icons: {
    icon: "/assets/kigali-safety-academy-logo.webp",
    apple: "/assets/kigali-safety-academy-logo.webp",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#173d70",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const activeAlerts = await getActiveAlerts(1);

  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {activeAlerts[0] ? <AlertBanner alert={activeAlerts[0]} /> : null}
        <div id="main-content" tabIndex={-1}>{children}</div>
        <SiteFooter />
        <CookieNotice />
      </body>
    </html>
  );
}
