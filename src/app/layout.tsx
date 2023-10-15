import type { Metadata } from 'next';
import Menu from '@/components/menu/menu';
import { Bitter } from 'next/font/google';
import Head from 'next/head';

import '../styles/globals.css';
import appStyles from '../app/app.module.css';

export const metadata: Metadata = {
  title: 'Kenny Portfolio',
  description: 'Portfolio following nextjs documentation',
};

const font = Bitter({
  weight: '300',
  subsets: ['latin'],
});

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={font.className}>
        <Menu></Menu>
        <div className={appStyles.content}>{children}</div>
      </body>
    </html>
  );
}
