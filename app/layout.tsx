import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "학술연구지원사업 공고 포털",
  description: "연구자 중심의 읽기 쉬운 과제 공고 서비스",
};

import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use GA ID directly
  const gaId = 'G-RYSPLEL0WP';

  return (
    <html lang="ko">
      <body className="antialiased min-h-screen bg-white text-slate-900">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
