import { themeBootScript } from '@/lib/theme';

export default function Template({ Head, Body, Script }) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0b0a08" />
        <meta name="author" content="Tuintcheu Pharel" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Applique thème + accent sauvegardés avant le premier rendu (pas de flash) */}
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
      </Head>

      <Body>
        <Script />
      </Body>
    </html>
  );
}
