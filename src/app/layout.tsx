import type { Metadata } from 'next';
import { openSans } from '@/app/ui/fonts';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'KNG',
  description: "Khoi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  );
}
