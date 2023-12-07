import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className='px-96'>
        <NavBar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
