import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ModalProvider } from "@/context/ModalContext";
import InquiryModal from "@/components/ui/InquiryModal";
import ScrollAnimator from "@/components/ui/ScrollAnimator";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Skymakers - Innovative Solutions for the Future",
  description: "Transforming ideas into reality with cutting-edge technology and innovative solutions.",
  keywords: ["Skymakers", "technology", "innovation", "solutions"],
  icons: {
    icon: "/images/firstpage/skymakersicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white text-foreground antialiased`}>
        <ModalProvider>
          <div className="min-h-screen flex flex-col">
            <ScrollAnimator />
            {children}
            <WhatsAppButton />
            <InquiryModal />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
