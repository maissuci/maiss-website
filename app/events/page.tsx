import Navbar from "@/components/Navbar"
import Events from "@/components/Events"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Events />
      <Footer />
    </div>
  );
} 