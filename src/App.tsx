import { Achievements } from "@/components/Achievements"
import { Bio } from "@/components/Bio"
import { Contact } from "@/components/Contact"
import { ContentShowcase } from "@/components/ContentShowcase"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { IntroductionVideo } from "@/components/IntroductionVideo"
import { Pricing } from "@/components/Pricing"
import { Reviews } from "@/components/Reviews"
import { Services } from "@/components/Services"

export function App() {
  return (
    <div className="portfolio-shell min-h-svh">
      <Header />
      <main>
        <Hero />
        <Bio />
        <ContentShowcase />
        <IntroductionVideo />
        <Services />
        <Achievements />
        <Reviews />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
