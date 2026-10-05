import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieNotice from "@/components/CookieNotice";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kigali Safety Academy | Safety and Health Training",
  description: "Explore practical occupational safety and health training with Kigali Safety Academy.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><SiteHeader />{children}<SiteFooter /><CookieNotice /></body></html>;
}
