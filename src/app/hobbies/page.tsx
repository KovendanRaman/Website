import Navigation from '@/components/Navigation'
import Hobbies from '@/components/Hobbies'
import Footer from '@/components/Footer'

export default function HobbiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Hobbies />
      </div>
      <Footer />
    </main>
  )
}
