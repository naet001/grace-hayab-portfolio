import { Achievements } from "@/components/Achievements"
import { Bio } from "@/components/Bio"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ImageCarousel } from "@/components/ImageCarousel"
import { Pricing } from "@/components/Pricing"
import { Reviews } from "@/components/Reviews"
import { Services } from "@/components/Services"

export function App() {
  return (
    <div className="min-h-svh bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Bio />
        <ImageCarousel />
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
