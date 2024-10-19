import { Html, Head, Main, NextScript, } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <meta property="og:title" content="Title Here" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
