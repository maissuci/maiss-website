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
            <section className="pt-36 pb-20 px-6 flex justify-center relative overflow-hidden">
                {/* Simplified Geometric Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Large blurred circle - top left */}
                    <motion.div
                        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#e75a94] to-[#a17dc3] opacity-10 blur-2xl hero-blob"
                        style={{ willChange: "transform" }}
                        animate={{ x: [0, 26, 0], y: [0, -28, 0], scale: [1, 1.05, 1] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    />

                    {/* Large blurred circle - bottom right */}
                    <motion.div
                        className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-[#a17dc3] to-[#5bb5cf] opacity-10 blur-2xl hero-blob"
                        style={{ willChange: "transform" }}
                        animate={{ x: [0, -22, 0], y: [0, 18, 0], scale: [1, 1.04, 1] }}
                        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    />

                    {/* Square - top right */}
                    <div className="absolute top-20 right-40 w-32 h-32 rotate-45 hero-shape">
                        <motion.div
                            className="w-full h-full bg-[#e75a94]/10"
                            style={{ willChange: "transform" }}
                            animate={{ x: [0, 16, 0], y: [0, -18, 0], rotate: [0, 4, 0] }}
                            transition={{ duration: 11, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                        />
                    </div>

                    {/* Hexagon - bottom left */}
                    <motion.div
                        className="absolute bottom-20 left-60 w-40 h-40 hero-shape"
                        style={{ willChange: "transform" }}
                        animate={{ x: [0, 18, 0], y: [0, 16, 0] }}
                        transition={{ duration: 13, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <polygon points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25" fill="#a17dc3" fillOpacity="0.08" />
                        </svg>
                    </motion.div>

                    {/* Triangle - center right */}
                    <div className="absolute top-1/2 right-20 -translate-y-1/2 hero-shape">
                        <motion.div
                            className="w-0 h-0 border-l-[40px] border-l-transparent border-b-[70px] border-b-[#5bb5cf]/10 border-r-[40px] border-r-transparent"
                            style={{ willChange: "transform" }}
                            animate={{ x: [0, -16, 0], y: [0, 18, 0], rotate: [0, -3, 0] }}
                            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                        />
                    </div>

                    {/* Circle - center left */}
                    <div className="absolute top-1/2 left-40 -translate-y-1/2 w-24 h-24 hero-shape">
                        <motion.div
                            className="w-full h-full rounded-full bg-[#a17dc3]/10"
                            style={{ willChange: "transform" }}
                            animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
                            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                        />
                    </div>

                    {/* Smaller accent shapes */}
                    <div className="absolute top-28 left-1/3 w-6 h-6 hero-shape">
                        <motion.div
                            className="w-full h-full rounded-full bg-[#5bb5cf]/15"
                            style={{ willChange: "transform" }}
                            animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                        />
                    </div>
                    <div className="absolute top-40 right-32 w-5 h-5 hero-shape">
                        <motion.div
                            className="w-full h-full bg-[#e75a94]/15 rotate-12"
                            style={{ willChange: "transform" }}
                            animate={{ x: [0, -10, 0], y: [0, 8, 0], rotate: [12, 18, 12] }}
                            transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                        />
                    </div>
                    <div className="absolute bottom-28 right-1/3 w-7 h-7 hero-shape">
                        <motion.div
                            className="w-full h-full rounded-full bg-[#a17dc3]/12"
                            style={{ willChange: "transform" }}
                            animate={{ x: [0, 10, 0], y: [0, 12, 0] }}
                            transition={{ duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                        />
                    </div>

                    {/* Very subtle grid pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBBMzAgMzAgMCAxIDEgMCAzMGEzMCAzMCAwIDAgMSA2MCAweiIgc3Ryb2tlPSIjYTE3ZGMzIiBzdHJva2Utb3BhY2l0eT0iLjAzIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-4xl relative z-10"
                >
                    <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">MAISS at UCI</p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight mb-6 text-ink text-left text-balance">
                        <span className="bg-gradient-to-r from-[#e75a94] to-[#5bb5cf] inline-block text-transparent bg-clip-text">
                            MAISS
                        </span>{" "}
                        - Management and Information Student Society
                    </h1>
                    <p className="text-lg md:text-xl text-muted mb-12 text-left max-w-2xl leading-relaxed">
                        We are a student-run organization that provides a community
                        for those passionate about the intersection of business and technology
                        to learn, grow, and connect.
                    </p>
                </motion.div>


            </section>

            <section className="container mx-auto flex justify-center relative overflow-hidden">
                <div className="w-full max-w-6xl relative z-10">
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
                <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-muted mb-3">Explore</p>
                        <h1 className="text-4xl md:text-5xl font-display font-semibold text-ink">More About MAISS</h1>
                    </div>
                </div>
                <div className="h-px bg-mist mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Us */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col rounded-2xl border border-mist bg-white/80 p-5 shadow-soft"
                    >
                        <div className="mb-4 overflow-hidden rounded-xl">
                            <Image
                                src="/images/maiss2.png"
                                alt="About Us"
                                width={300}
                                height={200}
                                className="w-full object-cover"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-ink text-left mb-3">About Us</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Established in 2010 by BIM alumni, the Management Information Student Society (MAISS) fosters a
                            supportive community for those passionate about business and technology. MAISS enhances professional,
                            academic, and social growth for students. We are open to all majors and anyone interested in the
                            business-tech field!
                        </p>
                    </motion.div>

                    {/* Board */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="flex flex-col rounded-2xl border border-mist bg-white/80 p-5 shadow-soft"
                    >
                        <div className="mb-4 overflow-hidden rounded-xl">
                            <Image
                                src="/images/maiss3.png"
                                alt="Board"
                                width={1500}
                                height={1500}
                                quality={100}
                                className="w-full object-cover"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-ink text-left mb-3">Board</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Our board is dedicated to exploring the intersection of Business and Technology while bringing valuable
                            insights from their experiences in MAISS, as well as related internships and careers. We are passionate
                            about giving back and strive to foster professional growth and social connections within the UCI
                            community.
                        </p>
                    </motion.div>

                    {/* Events */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col rounded-2xl border border-mist bg-white/80 p-5 shadow-soft"
                    >
                        <div className="mb-4 overflow-hidden rounded-xl">
                            <Image
                                src="/images/maiss4.png"
                                alt="Events"
                                width={300}
                                height={200}
                                className="w-full object-cover"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-ink text-left mb-3">Events</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            MAISS offers Mentorship and Internship Programs to help you build leadership, technical, and
                            interpersonal skills in business and tech. Gain career insights through panels and develop essential
                            skills through our workshops on SQL, interview and resume prep. Beyond professional growth, MAISS hosts
                            fun events creating a supportive community!
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
