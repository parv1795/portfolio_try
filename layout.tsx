import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Parv Arora - AI Developer & Builder',
  description: 'Crafting AI apps to learn, build, and grow',
  keywords: ['AI Developer', 'Software Engineer', 'Portfolio', 'Next.js', 'React'],
  authors: [{ name: 'Parv Arora' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://parvarora.com',
    title: 'Parv Arora - AI Developer & Builder',
    description: 'Crafting AI apps to learn, build, and grow',
    siteName: 'Parv Arora Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}