import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SectionHighlights } from '../components/SectionHighlights'
import { SectionOuther } from '../components/SectionOuther'
import { SectionSteps } from '../components/SectionSteps'

export default function Home() {
  return (
    <div>
        <Header />
        <SectionSteps />
        <SectionHighlights />
        <SectionOuther />
        <Footer />
    </div>
  )
}
