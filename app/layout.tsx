import { Center, ColorModeScript, UIProvider, defaultConfig, merge } from '@yamada-ui/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const config = merge(defaultConfig, { defaultColorMode: 'light' });

const _inter = Inter({
  style: 'normal',
  display: 'block',
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Yamada Quiz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ColorModeScript />

        <UIProvider config={config}>
          <Center flexDirection='column' gap='lg' p='lg' minH='100dvh'>
            {children}
          </Center>
        </UIProvider>
      </body>
    </html>
  );
}
