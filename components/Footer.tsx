import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#e75a94]/10 via-[#a17dc3]/10 to-[#5bb5cf]/10 py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div>
                        <div className="text-xl font-medium bg-gradient-to-r from-[#e75a94] via-[#a17dc3] to-[#5bb5cf] inline-block text-transparent bg-clip-text mb-4">
                            MAISS
                        </div>
                        <p className="text-gray-600 text-sm">
                        University of California, Irvine Paul Merage School of Business, Irvine, CA 92697
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-4">Organization</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/board" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                    Board
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="https://www.instagram.com/maissuci/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/maissuci/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="https://discord.gg/TBzFGd6TVa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                    Discord
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#a17dc3] text-sm">
                                    TikTok
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© 2025 MAISS at UCI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

