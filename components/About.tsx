"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import PartnersCarousel from "@/components/ui/partners-carousel"

export default function AboutPage() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()

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

    // Partner logos data 
    const partnerLogos = [
        { name: "Applied Materials", logo: "/images/companies/amat.svg" },
        { name: "Apple", logo: "/images/companies/apple2.png" },
        { name: "Deloitte", logo: "/images/companies/deloitte.svg" },
        { name: "Deustch Bank", logo: "/images/companies/deutsche.svg" },
        { name: "Google", logo: "/images/companies/goog.svg" },
        { name: "JPM", logo: "/images/companies/jpm.svg" },
        { name: "Meta", logo: "/images/companies/meta.svg" },
        { name: "Microsoft", logo: "/images/companies/msft.svg" },
    ]
    const partnerLogos2 = [
        { name: "Nvidia", logo: "/images/companies/nvid.svg" },
        { name: "PlayStation", logo: "/images/companies/play.svg" },
        { name: "Palantir", logo: "/images/companies/pltr.svg" },
        { name: "Oracle", logo: "/images/companies/oracle.svg" },
        { name: "PwC", logo: "/images/companies/pwc.svg" },
        { name: "SoFi", logo: "/images/companies/sofi.svg" },
        { name: "Amazon", logo: "/images/companies/zon.svg" },
        { name: "Red Bull", logo: "/images/companies/redbull.svg" },
        { name: "Capital One", logo: "/images/companies/capone.svg" },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-800 mt-20">

            {/* Image Board */}
            <div className="relative w-full h-[600px] mb-16">
                <img
                    src="/images/maiss14.png"
                    alt="MAISS Community"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
                    <h2
                        className="text-[4.5rem] leading-[1.1] font-medium text-white mb-8"
                        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                        About MAISS
                    </h2>
                    <p
                        className="text-white text-xl max-w-2xl leading-relaxed"
                        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                        MAISS strives to bridge the gap between business and technology,
                        providing opportunities for professional growth and community building.
                    </p>
                </div>
            </div>

            <main className="flex-grow">

                {/* History Section */}
                <section className="container mx-auto py-16 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto">

                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-col md:flex-row gap-6"
                            >
                                <div className="md:w-1/4">
                                    <div className="text-xl font-medium bg-gradient-to-r from-[#e75a94] to-[#a17dc3] inline-block text-transparent bg-clip-text">
                                        2010
                                    </div>
                                </div>
                                <div className="md:w-3/4">
                                    <h3 className="text-xl font-medium mb-2 text-gray-900">Foundation</h3>
                                    <p className="text-gray-600">
                                        MAISS was founded by a group of BIM majors in 2010 who recognized the need for a student organization that
                                        focused on the intersection of business and technology.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex flex-col md:flex-row gap-6"
                            >
                                <div className="md:w-1/4">
                                    <div className="text-xl font-medium bg-gradient-to-r from-[#a17dc3] to-[#5bb5cf] inline-block text-transparent bg-clip-text">
                                        2020
                                    </div>
                                </div>
                                <div className="md:w-3/4">
                                    <h3 className="text-xl font-medium mb-2 text-gray-900">Growth & Expansion</h3>
                                    <p className="text-gray-600">
                                        By 2020, MAISS had grown to dozens of active members with an established alumni network,
                                        offering workshops, panels, and social events.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="flex flex-col md:flex-row gap-6"
                            >
                                <div className="md:w-1/4">
                                    <div className="text-xl font-medium bg-gradient-to-r from-[#a17dc3] to-[#e75a94] inline-block text-transparent bg-clip-text">
                                        Today
                                    </div>
                                </div>
                                <div className="md:w-3/4">
                                    <h3 className="text-xl font-medium mb-2 text-gray-900">Innovation & Impact</h3>
                                    <p className="text-gray-600">
                                        Today, MAISS continues to innovate and expand its offerings, with a focus on emerging technologies
                                        and industry trends.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Industry Partners Section */}
                <section className="container mx-auto py-20 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBBMzAgMzAgMCAxIDEgMCAzMGEzMCAzMCAwIDAgMSA2MCAweiIgc3Ryb2tlPSIjYTE3ZGMzIiBzdHJva2Utb3BhY2l0eT0iLjAzIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10 pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <h2 className="text-3xl font-medium mb-4 text-gray-900">
                                <span className="bg-gradient-to-r from-[#e75a94] to-[#5bb5cf] inline-block text-transparent bg-clip-text">
                                    Our Experience
                                </span>
                            </h2>
                            <p className="text-black-600 mb-8 max-w-xl mx-auto">
                                MAISS has countless members with competitive internships and full-time experience
                                at Fortune 500 companies, prestigious firms, and unicorn startups.
                            </p>
                        </motion.div>

                        <PartnersCarousel partners={partnerLogos} direction="right" />
                        <div className="h-6"></div>
                        <PartnersCarousel partners={partnerLogos2} direction="left" />
                    </div>
                </section>

                {/* Three Pillars Section */}
                <section className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">

                        {/* Academic Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col md:flex-row gap-8 items-center mb-20"
                        >
                            <div className="md:w-1/2 rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/maiss16.png"
                                    alt="MAISS Academic"
                                    width={1439}
                                    height={508}
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-4xl font-medium mb-6 text-[#b67db4]">Academic</h3>
                                <p className="text-gray-700">
                                    Representing BIM students by fostering relationships among fellow peers, faculty, and staff within the
                                    Donald Bren School of <span className="font-semibold">Information and Computer Sciences</span> and the 
                                     <span className="font-semibold"> Paul Merage School of Business</span>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Professional Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col md:flex-row-reverse gap-8 items-center mb-20"
                        >
                            <div className="md:w-1/2 rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/maiss15.png"
                                    alt="MAISS Professional"
                                    width={1439}
                                    height={508}
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-4xl font-medium mb-6 text-[#8ab4e8]">Professional</h3>
                                <p className="text-gray-700">
                                    MAISS provides year-round mentorship and internship programs to support professional development and
                                    leadership growth. Our events cover fields like software engineering, product management, consulting,
                                    marketing, and UI/UX. With guest speakers from{" "}
                                    <span className="font-semibold">Fortune 500 companies</span>, members gain insider career insights and
                                    answers to their questions. Additionally, MAISS offers professional development workshops, including
                                    Python, SQL, interview skills, resume building, and personalized coffee chats.
                                </p>
                            </div>
                        </motion.div>

                        {/* Social Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col md:flex-row gap-8 items-center"
                        >
                            <div className="md:w-1/2 rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/maiss7.JPG"
                                    alt="MAISS Social"
                                    width={1439}
                                    height={508}
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-4xl font-medium mb-6 text-[#b67db4]">Social</h3>
                                <p className="text-gray-700">
                                    Beyond our determination towards success, MAISS is also a fun community to make unforgettable
                                    memories. You will be able to create <span className="font-semibold">lifelong friendships</span> with
                                    those who have aligned interests as you and embark on fun activities such as beach days, retreats,
                                    slime socials, and food adventures!
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
                <div className="h-12"></div>

                {/* Values Section
                <section className="container mx-auto py-20 px-6 bg-gradient-to-r from-[#e75a94]/5 via-[#a17dc3]/5 to-[#5bb5cf]/5">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-medium mb-4 text-gray-900">
                                <span className="bg-gradient-to-r from-[#e75a94] to-[#5bb5cf] inline-block text-transparent bg-clip-text">
                                    Our Values
                                </span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white p-8 rounded-lg shadow-sm"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-[#e75a94] to-[#a17dc3] rounded-lg mb-6 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium mb-3 text-gray-900">Innovation</h3>
                                <p className="text-gray-600">
                                    We embrace new ideas, technologies, and approaches, encouraging our members to think creatively and
                                    push boundaries.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-white p-8 rounded-lg shadow-sm"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-[#a17dc3] to-[#5bb5cf] rounded-lg mb-6 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium mb-3 text-gray-900">Community</h3>
                                <p className="text-gray-600">
                                    We foster a supportive and inclusive environment where students can connect, collaborate, and grow
                                    together.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="bg-white p-8 rounded-lg shadow-sm"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-[#e75a94] to-[#5bb5cf] rounded-lg mb-6 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium mb-3 text-gray-900">Excellence</h3>
                                <p className="text-gray-600">
                                    We strive for excellence in all our programs and initiatives, setting high standards and continuously
                                    seeking to improve.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section> */}
            </main>


        </div>
    )
}
