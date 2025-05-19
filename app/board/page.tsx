import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BoardPage from "@/components/Board"

export default function Page() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <BoardPage />
      <Footer />
    </div>
  )
}
