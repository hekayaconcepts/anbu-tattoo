import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import ServicesPreview from '@/components/ServicesPreview'
import BookingCTA from '@/components/BookingCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <ServicesPreview />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
