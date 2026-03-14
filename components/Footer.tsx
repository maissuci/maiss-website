import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-brand-pink/10 via-brand-lavender/10 to-brand-blue/10 py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div>
                        <div className="text-xl font-display font-semibold bg-gradient-to-r from-brand-pink via-brand-lavender to-brand-blue inline-block text-transparent bg-clip-text mb-4">
                            MAISS
                        </div>
                        <p className="text-muted text-sm">
                        University of California, Irvine Paul Merage School of Business, Irvine, CA 92697
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-ink mb-4">Organization</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-muted hover:text-brand-lavender text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-muted hover:text-brand-lavender text-sm">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/board" className="text-muted hover:text-brand-lavender text-sm">
                                    Board
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted hover:text-brand-lavender text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-sm font-semibold text-ink mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="https://www.instagram.com/maissuci/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand-lavender text-sm">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/maissuci/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand-lavender text-sm">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="https://discord.gg/TBzFGd6TVa" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand-lavender text-sm">
                                    Discord
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted hover:text-brand-lavender text-sm">
                                    TikTok
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-mist mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted text-sm">© 2025 MAISS at UCI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
