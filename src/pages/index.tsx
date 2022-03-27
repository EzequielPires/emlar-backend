import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SectionHighlights } from '../components/SectionHighlights'
import { SectionOuther } from '../components/SectionOuther'
import { SectionSteps } from '../components/SectionSteps'

export default function Home() {
  return (
    <div>
      <Head>
        <title>EmLar</title>
        <meta name="author" content="Encontre o lugar perfeito para morar em Catalão e Região." />
      </Head>
      <Banner />
      <SectionSteps />
      <SectionHighlights />
      <SectionOuther />
      <Footer />
    </div>
  )
}
