import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ModalProvider } from '@/components/moda-provider';
import { ToastProvider } from '@/components/toaster-provider';
import { CrispProvider } from '@/components/crisp-provider';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ApexIntel',
  description: 'AI platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToastProvider />
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
