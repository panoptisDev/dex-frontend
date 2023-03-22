import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { chakraTheme } from '~/styles/chakraTheme';

class BeetsDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="Vertek" />
          <meta
            name="description"
            content="The future of DeFi re-imagineered. Your next generation Decentralised Exchange."
          />

          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="https://vertek.exchange" /> */}
          <meta property="og:title" content="Vertek DEX - Advanced Decentralized Exchange on BNB Chain." />
          <meta
            property="og:description"
            content="Vertek is the primary Balancer-style DEX on BNB Chain, supporting multi-token pools, rewards, and weighted token compositions."
          />
          <meta
            property="og:image"
            content="/images/social-share.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          {/* <meta property="twitter:url" content="https://vertek.exchange" /> */}
          <meta property="twitter:title" content="Vertek DEX - Advanced Decentralized Exchange on BNB Chain." />
          <meta
            property="twitter:description"
            content="Vertek is the primary Balancer-style DEX on BNB Chain, supporting multi-token pools, rewards, and weighted token compositions."
          />
          <meta
            property="twitter:image"
            content="/images/social-share.jpg"
          />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', { page_path: window.location.pathname });
              `,
            }}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BeetsDocument;
