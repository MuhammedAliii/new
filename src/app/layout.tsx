import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
      <body className="font-sans antialiased text-foreground">
        {children}
      </body>
    </html>
  );
}
