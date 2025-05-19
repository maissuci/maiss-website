"use client"

import Image from "next/image"
import ImageCarousel from "@/components/ui/image-carousel"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function Hero() {
    const [isScrolled, setIsScrolled] = useState(false)
    const carouselRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()

    // Calculate the opacity based on scroll position
    const carouselOpacity = useTransform(
        scrollY,
        [0, 200, 300], // Scroll positions (px)
        [0, 0.5, 1], // Opacity values
    )

    // Calculate the y position based on scroll position
    const carouselY = useTransform(scrollY, [0, 300], [50, 0])

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

    // images for carousel
    const carouselImages = [
        {
            src: "/images/maiss13.JPG",
            alt: "Fam Reveal - Fall 2024",
        },
        {
            src: "/images/prodev1.JPG",
            alt: "ProDev Workshop - Spring 2025",
        },
        {
            src: "/images/maiss10.JPG",
            alt: "Boothing - Spring 2025",
        },
        {
            src: "/images/maiss11.JPG",
            alt: "New Board Photoshoot - Spring 2025",
        },
        {
            src: "/images/maiss12.JPG",
            alt: "External Affairs - Winter 2025",
        },   
        {
            src: "/images/maiss8.JPG",
            alt: "Beach Social - Fall 2024",
        },   
    ]

    return (
        <main className="flex-grow mt-16">
            <section className="container mx-auto pt-40 pb-20 px-6 flex justify-center relative overflow-hidden">
                {/* Simplified Geometric Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Large blurred circle - top left */}
                    <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#e75a94] to-[#a17dc3] opacity-10 blur-2xl hero-blob"></div>

                    {/* Large blurred circle - bottom right */}
                    <div className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-[#a17dc3] to-[#5bb5cf] opacity-10 blur-2xl hero-blob"></div>

                    {/* Square - top right */}
                    <div className="absolute top-20 right-40 w-32 h-32 rotate-45 bg-[#e75a94]/10 hero-shape"></div>

                    {/* Hexagon - bottom left */}
                    <div className="absolute bottom-20 left-60 w-40 h-40 hero-shape">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <polygon points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25" fill="#a17dc3" fillOpacity="0.08" />
                        </svg>
                    </div>

                    {/* Triangle - center right */}
                    <div className="absolute top-1/2 right-20 transform -translate-y-1/2 hero-shape">
                        <div className="w-0 h-0 border-l-[40px] border-l-transparent border-b-[70px] border-b-[#5bb5cf]/10 border-r-[40px] border-r-transparent"></div>
                    </div>

                    {/* Circle - center left */}
                    <div className="absolute top-1/2 left-40 transform -translate-y-1/2 w-24 h-24 rounded-full bg-[#a17dc3]/10 hero-shape"></div>

                    {/* Very subtle grid pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBBMzAgMzAgMCAxIDEgMCAzMGEzMCAzMCAwIDAgMSA2MCAweiIgc3Ryb2tlPSIjYTE3ZGMzIiBzdHJva2Utb3BhY2l0eT0iLjAzIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
                </div>

                <div className="max-w-4xl relative z-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 text-gray-900 text-left">
                        <span className="bg-gradient-to-r from-[#e75a94] to-[#5bb5cf] inline-block text-transparent bg-clip-text">
                            MAISS
                        </span>{" "}
                        - Management and Information Student Society
                    </h1>
                    <p className="text-xl text-black-600 mb-12 text-left">
                        We are a student-run organization that provides a community
                        for those passionate about the intersection of business and technology
                        to learn, grow, and connect.
                    </p>
                </div>


            </section>

            <section className="container mx-auto flex justify-center relative overflow-hidden">
                <div className="w-full relative z-10">
                    <motion.div
                        ref={carouselRef}
                        style={{
                            opacity: carouselOpacity,
                            y: carouselY,
                        }}
                        className="w-full mt-8"
                    >
                        <ImageCarousel images={carouselImages} />
                    </motion.div>
                </div>
            </section>



            {/* About MAISS Section */}
            <section className="container mx-auto py-16 px-4">
                <h1 className="text-[black] uppercase font-large font-bold text-4xl mb-12">More About MAISS</h1>
                <hr className="mb-12 -mt-8"></hr>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Us */}
                    <div className="flex flex-col">
                        <div className="mb-4 overflow-hidden rounded-lg">
                            <Image
                                src="/images/maiss2.png"
                                alt="About Us"
                                width={300}
                                height={200}
                                className="w-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-4">ABOUT US</h3>
                        <p className="text-sm text-[#3c3c3c]">
                            Established in 2010 by BIM alumni, the Management Information Student Society (MAISS) fosters a
                            supportive community for those passionate about business and technology. MAISS enhances professional,
                            academic, and social growth for students. We are open to all majors and anyone interested in the
                            business-tech field!
                        </p>
                    </div>

                    {/* Board */}
                    <div className="flex flex-col">
                        <div className="mb-4 overflow-hidden rounded-lg">
                            <Image
                                src="/images/maiss3.png"
                                alt="Board"
                                width={1500}
                                height={1500}
                                quality={100}
                                className="w-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-4">BOARD</h3>
                        <p className="text-sm text-[#3c3c3c]">
                            Our board is dedicated to exploring the intersection of Business and Technology while bringing valuable
                            insights from their experiences in MAISS, as well as related internships and careers. We are passionate
                            about giving back and strive to foster professional growth and social connections within the UCI
                            community.
                        </p>
                    </div>

                    {/* Events */}
                    <div className="flex flex-col">
                        <div className="mb-4 overflow-hidden rounded-lg">
                            <Image
                                src="/images/maiss4.png"
                                alt="Events"
                                width={300}
                                height={200}
                                className="w-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-4">EVENTS</h3>
                        <p className="text-sm text-[#3c3c3c]">
                            MAISS offers Mentorship and Internship Programs to help you build leadership, technical, and
                            interpersonal skills in business and tech. Gain career insights through panels and develop essential
                            skills through our workshops on SQL, interview and resume prep. Beyond professional growth, MAISS hosts
                            fun events creating a supportive community!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

