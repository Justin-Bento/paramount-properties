import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Appbar from "../components/Apbbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
