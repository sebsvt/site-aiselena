import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import Navigation from "@/components/shares/navigation";
import { application_settings, main_menu_item_navbar } from "@/lib/constant";
import Footer from "@/components/shares/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: application_settings.application_name,
  description: application_settings.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation menu={main_menu_item_navbar} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
