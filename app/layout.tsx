import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import TargetCursor from '@/components/TargetCursor';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SCH Porto",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@preline/theme-switch@2.0.0/dist/theme-switch.js" async></script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <TargetCursor
            targetSelector="a, button, input, textarea, .cursor-target, [role='button']"
            cursorColor="#A689C4"
            cursorColorOnTarget="#FF99D9"
            size={34}
            cornerSize={10}
            thickness={2.5}
            spinDuration={3}
            hoverDuration={0.25}
            parallaxOn={true}
            hideDefaultCursor={true}
          />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
