"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, ChevronRight } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  status?: "upcoming" | "live" | "past"
  registrationLink?: string
}

export default function EventsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [events, setEvents] = useState<Event[]>([
    {
      id: "ui-ux-speaker-panel",
      title: "UI/UX Speaker Panel",
      date: "Jan 21th, 2026",
      time: "6:00 PM - 7:00 PM",
      location: "TBD",
      description:
        "Level up your design career 🎨💻 Join MAISS for an exclusive UI/UX Speaker Panel featuring industry professionals who’ve built impactful, user-centered experiences.",
      image: "/images/events/event12.jpg",
      status: "past",
    },
    {
      id: "vibe-coding",
      title: "Into To Vibe Coding",
      date: "Jan 14th, 2026",
      time: "6:00 PM - 7:00 PM",
      location: "MPAA 120",
      description:
        "Trying to break into PM, tech, or just want to actually build something? 💻⚡",
      image: "/images/events/event10.jpg",
      status: "past",
    },
    {
      id: "jeopardy-night",
      title: "Jeopardy Night",
      date: "Jan 7th, 2026",
      time: "6:00 PM - 7:00 PM",
      location: "SB1 2200",
      description:
        "Pull up for a Welcome Back Social with games, competition, and prizes on us 👾",
      image: "/images/events/event11.jpg",
      status: "past",
    },
  ])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white text-ink">

      {/* Image Board */}
      <div className="relative w-full h-[600px] mb-16 mt-20">
        <img
          src="/images/prodev1.JPG"
          alt="MAISS Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
          <h2
            className="text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-display font-semibold text-white mb-6 text-balance"
          >
            Our Events
          </h2>
          <p
            className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Join us for exciting events throughout the year, from professional development workshops to social
            gatherings and panels with industry professionals. Check out our upcoming and past events below!
          </p>
        </div>
      </div>


      <main className="flex-grow">
        {/* Events Section */}
        <section className="container mx-auto py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-24">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Event Card */}
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
                  >
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 relative">
                      <div className="relative rounded-3xl overflow-hidden border border-mist shadow-soft aspect-[4/3.95]">
                        {event.status === "live" && (
                          <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                            LIVE
                          </div>
                        )}
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2">
                      <h2
                        className={`text-3xl md:text-4xl font-display font-semibold mb-3 ${index % 3 === 0
                            ? "bg-gradient-to-r from-brand-pink to-brand-lavender"
                            : index % 3 === 1
                              ? "bg-gradient-to-r from-brand-lavender to-brand-blue"
                              : "bg-gradient-to-r from-brand-pink to-brand-blue"
                          } inline-block text-transparent bg-clip-text`}
                      >
                        {event.title}
                      </h2>

                      <p className="text-lg text-muted mb-6">{event.date}</p>

                      <div className="flex flex-col space-y-4 mb-6">
                        <div className="flex items-center text-muted">
                          <Clock className="w-5 h-5 mr-2 text-brand-lavender" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-muted">
                          <MapPin className="w-5 h-5 mr-2 text-brand-lavender" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-muted mb-8 leading-relaxed">{event.description}</p>

                      {event.status === "upcoming" && event.registrationLink && (
                        <Button className="bg-gradient-to-r from-brand-pink to-brand-blue hover:opacity-90 text-white rounded-md px-6 py-3 text-sm font-medium transition-colors">
                          Register Now
                        </Button>
                      )}

                      {event.status === "past" && (
                        <div className="inline-block bg-mist text-muted px-4 py-2 rounded-md text-sm">
                          Past Event
                        </div> 
                      )}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  {index !== events.length - 1 && (
                    <div className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#a17dc3]/30 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
