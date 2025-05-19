import Navbar from "@/components/Navbar"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
} 