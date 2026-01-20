"use client"

import Link from "next/link"
import { Instagram, Mail, Linkedin, ChevronRight, DiscIcon as Discord } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function ContactPage() {
    return (
        
        <div className="container mx-auto px-4 py-12 max-w-5xl mt-20">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-100/40 to-pink-100/40 blur-3xl -z-10"></div>
            <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-blue-100/30 to-purple-100/30 blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-pink-100/30 to-purple-100/30 blur-3xl -z-10"></div>


            {/* Title */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500 bg-clip-text text-transparent mb-6 font-Inter">
                    Got Questions?
                </h1>
                <p className="text-xl text-black-600 max-w-3xl mx-auto font-Inter">
                    Feel free to reach out to us via email or social media. We're here to help!
                </p>
            </div>


            <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">

                {/* Instagram Card */}
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 text-white">
                            <Instagram className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold font-Inter">Instagram</h3>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <p className="text-gray-600">Follow us on Instagram for live updates.</p>
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant="ghost"
                            className="gap-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 pl-0"
                            asChild
                        >
                            <Link href="https://www.instagram.com/maissuci/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                @maissuci <ChevronRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Email Card */}
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                            <Mail className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold">Email</h3>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <p className="text-gray-600">Reach out to us directly via email.</p>
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant="ghost"
                            className="gap-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 pl-0"
                            asChild
                        >
                            <Link href="mailto:maiss.uci@gmail.com">
                                maiss.uci@gmail.com <ChevronRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* LinkedIn Card */}
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                            <Linkedin className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold">LinkedIn</h3>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <p className="text-gray-600">Connect with us professionally on LinkedIn.</p>
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant="ghost"
                            className="gap-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 pl-0"
                            asChild
                        >
                            <Link href="https://www.linkedin.com/in/maissuci/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                UCI MAISS <ChevronRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Discord Card */}
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 text-white">
                            <Discord className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold">Discord</h3>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <p className="text-gray-600">Join our community on Discord.</p>
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant="ghost"
                            className="gap-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 pl-0"
                            asChild
                        >
                            <Link href="https://discord.gg/TBzFGd6TVa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                MAISS Discord <ChevronRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>


            {/* FAQ Section */}
            <div className="mt-20 mb-12">
                <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                    <style jsx global>{`
            [data-state="open"] > div[data-accordion-content] {
              animation: slideDown 0.3s ease-out;
            }
            [data-state="closed"] > div[data-accordion-content] {
              animation: slideUp 0.3s ease-out;
            }
            @keyframes slideDown {
              from { height: 0; opacity: 0; }
              to { height: var(--radix-accordion-content-height); opacity: 1; }
            }
            @keyframes slideUp {
              from { height: var(--radix-accordion-content-height); opacity: 1; }
              to { height: 0; opacity: 0; }
            }
          `}</style>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium">How can I join MAISS?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            You can join MAISS by attending our general meetings and events. Sign up to be a paid member for exclusive resources!
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium">When are your general meetings?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            We host weekly general meetings on Wednesdays from 6:00 PM - 7:00 PM during the academic quarter. Follow our social media for specific dates and times!
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium">Do I need to be a Business Information Management major to join?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            No! MAISS welcomes students from all majors who are interested in the intersection of business and technology.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-medium">How can I become a board member?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            Board applications open during Spring quarter. Active membership and participation in MAISS events are highly encouraged.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-medium">What is the mentorship program?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            The mentorship program is a program that pairs experienced upperclassmen with first-year
                            and second-year students. Come to our "Meet the Mentors" event in the fall quarter to learn more!
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-lg font-medium">What is the internship program?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            This program allows interns to shadow board members over the course of winter quarter with the 
                            intention of becoming a board member in the following year. Applications open in the end of fall quarter.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
