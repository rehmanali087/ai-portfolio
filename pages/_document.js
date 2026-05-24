import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="AI Portfolio - Showcase of AI-powered projects and services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-primary text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
