import Head from "next/head";
import '../styles/globals.css';
import '../styles/icons.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterScrollProvider } from '@moxy/next-router-scroll';


function MyApp({ Component, pageProps }) {
  return (
    <RouterScrollProvider>
      <Component {...pageProps} />
    </RouterScrollProvider>
  )
}

export default MyApp
