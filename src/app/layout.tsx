import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { InteractiveBackground } from '@/components/InteractiveBackground';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Better Call Hana | AI Voice Receptionist for Businesses',
  description: 'The premium AI voice receptionist that answers every call and fills your calendar, 24/7.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var lang = localStorage.getItem('selectedLanguage') || localStorage.getItem('bch_selected_lang') || 'en';
                if (lang === 'en' || lang === 'es' || lang === 'fr' || lang === 'de') {
                  document.documentElement.lang = lang;
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-foreground bg-[#071322]">
        <LanguageProvider>
          <InteractiveBackground />
          {children}
        </LanguageProvider>
        {/* Defer Non-Critical JavaScript to paint visual website instantly */}
        <Script src="/js/language.js" strategy="lazyOnload" defer />
      </body>
    </html>
  );
}
