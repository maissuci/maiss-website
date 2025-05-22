"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
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
      id: "new-grad-spotlight",
      title: "New Graduates Spotlight",
      date: "May 21st, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "SB1 2321",
      description:
        "Celebrating the journey, the growth, and the next chapter! Join us in spotlighting our amazing graduating seniors who’ve left their mark on our community. From late nights to big wins, we’re so proud of everything you’ve accomplished! Check out our stories this week to see where they’re headed next and leave them some love!",
      image: "/images/events/event8.png",
      status: "past",
    },
    {
      id: "intro-to-sql",
      title: "Intro to SQL",
      date: "May 14th, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "SB1 2321",
      description:
        "Want to work with data but not sure where to start? Join MAISS for an Intro to SQL workshop, perfect for beginners looking to get hands-on with databases! SQL is one of the most in-demand skills across roles like Product Manager, Product Marketing Manager, Data Analyst, and Business Analyst. Whether you’re breaking into tech or leveling up your skill set, SQL is a powerful tool to have on your resume.",
      image: "/images/events/event1.png",
      status: "past",
    },
    {
      id: "pm-panel",
      title: "Product Marketing Panel",
      date: "May 7th, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "SB1 2321",
      description:
        "Ready to dive into the world of product marketing? Join us for an exclusive speaker panel featuring industry pros Deepan Mukherjee and Benjamin Judge as they share insights, strategies, and real-world experience you won’t want to miss!",
      image: "/images/events/event2.png",
      status: "past",
    },
    {
      id: "blanket-social",
      title: "Blanket Making Social",
      date: "April 30th, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "SB1 2321",
      description: "Wrapping our community in love, one blanket at a time! 🧶🛌 Join us in our collab blanket-making fundraiser with @180dcuci to bring warmth and comfort to those in need together this Wednesday! We will be donating the blankets to Irvine Animal Center!",
      image: "/images/events/event3.png",
      status: "past",
    },
    {
      id: "bit-panel",
      title: "BIT X MAISS Panel",
      date: "April 23rd, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "SB1 2321",
      description:
        "Join us for an exciting Technology Panel hosted in collaboration with Black in Tech @ UCI and MAISS! Hear from trailblazing professionals in Software Engineering and Product Management from companies like PlayStation, Northrop Grumman, PwC, and TP-Link. Don’t miss the chance to gain industry insights and connect with inspiring leaders in tech!",
      image: "/images/events/event4.png",
      status: "past",
    },
    {
      id: "pm-tools",
      title: "Essential Tools for Product Management",
      date: "April 16th, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "SB1 1200",
      description:
        "Curious about breaking into product management? Join us this Wednesday for a session on the essential tools you need for PM success, from case prep to roadmap tools!",
      image: "/images/events/event5.png",
      status: "past",
      registrationLink: "#register",
    },
    {
      id: "recruiting-ready",
      title: "Gatekept Internship Recruitement Tips",
      date: "April 9th, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "SB2 122",
      description:
        "Join us for an insider seminar where we uncover the real strategies behind landing competitive internships. Learn how to stand out in a crowded applicant pool, unlock your next opportunity, and get ahead in your career journey.",
      image: "/images/events/event6.png",
      status: "past",
      registrationLink: "#register",
    },
    {
      id: "trivia-royale",
      title: "Trivia Royale",
      date: "April 2nd, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "SB2 122",
      description:
        "Get ready for Trivia Night! Put your knowledge to the test to see how much you know about geography and more! 🌍 Get to socialize with our board members and meet new friends. Join us for an evening of fun competition for a chance to receive a prize! See you there!",
      image: "/images/events/event7.png",
      status: "past",
      registrationLink: "#register",
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
    <div className="flex flex-col min-h-screen bg-white text-gray-800">

      {/* Image Board */}
      <div className="relative w-full h-[600px] mb-16 mt-20">
        <img
          src="/images/prodev1.JPG"
          alt="MAISS Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
          <h2
            className="text-[4.5rem] leading-[1.1] font-medium text-white mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Our Events
          </h2>
          <p
            className="text-white text-xl max-w-2xl leading-relaxed"
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
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
                      <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3.95]">
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
                        className={`text-3xl md:text-4xl font-medium mb-3 ${index % 3 === 0
                            ? "bg-gradient-to-r from-[#e75a94] to-[#a17dc3]"
                            : index % 3 === 1
                              ? "bg-gradient-to-r from-[#a17dc3] to-[#5bb5cf]"
                              : "bg-gradient-to-r from-[#e75a94] to-[#5bb5cf]"
                          } inline-block text-transparent bg-clip-text`}
                      >
                        {event.title}
                      </h2>

                      <p className="text-xl text-gray-600 mb-6">{event.date}</p>

                      <div className="flex flex-col space-y-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-5 h-5 mr-2 text-[#a17dc3]" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-5 h-5 mr-2 text-[#a17dc3]" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-8">{event.description}</p>

                      {event.status === "upcoming" && event.registrationLink && (
                        <Button className="bg-gradient-to-r from-[#e75a94] to-[#5bb5cf] hover:opacity-90 text-white rounded-md px-6 py-3 text-sm font-medium transition-colors">
                          Register Now
                        </Button>
                      )}

                      {event.status === "past" && (
                        <div className="inline-block bg-gray-100 text-gray-500 px-4 py-2 rounded-md text-sm">
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
