import NavBar from '@/components/NavBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='px-96'>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}
