import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
