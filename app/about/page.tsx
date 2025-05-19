import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import About from "@/components/About"

export default function Page() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}
