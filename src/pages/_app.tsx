import Head from "next/head";
import '../styles/globals.css';
import '../styles/icons.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterScrollProvider } from '@moxy/next-router-scroll';
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [visibleHeader, setVisibleHeader] = useState(true);
  const verify = () => {
    router.asPath === "/login" || router.asPath === "/new-user" || router.asPath === "/imoveis" ? setVisibleHeader(false) : setVisibleHeader(true);
  }
  useEffect(() => {
    verify();
  }, [router]);

  return (
    <RouterScrollProvider>
      {visibleHeader && <Header />}
      <Component {...pageProps} />
    </RouterScrollProvider>
  )
}

export default MyApp
