import Header from '@/components/Header'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
