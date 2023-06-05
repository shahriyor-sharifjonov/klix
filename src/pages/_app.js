import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Modern payment solutions for e-commerce - Klix</title>
        <meta name="description" content="Payment solutions & financing for online stores. Join more than 800 e-commerce merchants & start enjoying low fees & top-notch customer support" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='wrapper'>
        <Header />
        <main className='main'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
