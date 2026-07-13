import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "BidAxis | GeM Registration & Government Tender Consultancy",
    template: "%s | BidAxis",
  },

  description:
    "BidAxis provides professional GeM registration, government tender consultancy, bid documentation, reverse auction support, and procurement solutions for businesses across India.",

  keywords: [
    "GeM Registration",
    "Government Tender Consultancy",
    "Tender Consultant India",
    "Bid Management",
    "Government Procurement",
    "GeM Seller Support",
    "Tender Documentation",
  ],

  openGraph: {
    title: "BidAxis | Government Tender Consultancy",
    description:
      "Professional GeM and tender consultancy services helping businesses win government contracts.",
    url: "https://www.bidaxis.com",
    siteName: "BidAxis",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}