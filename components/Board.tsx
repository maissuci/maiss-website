"use client"

// Board member data
const boardMembers = [
    {
        id: 1,
        name: "Andrew Ly",
        position: "President",
        image: "/images/people/andrew.JPG",
    },
    {
        id: 2,
        name: "Aidan Jayakumar",
        position: "Executive Vice President",
        image: "/images/people/aidan.JPG",
    },
    {
        id: 3,
        name: "Henry Lee",
        position: "Co-VP of External Affairs",
        image: "/images/people/henry.JPG",
    },
    {
        id: 4,
        name: "Trisha Illapani",
        position: "Co-VP of External Affairs",
        image: "/images/people/trisha.JPG",
    },
    {
        id: 5,
        name: "Naveen Sanka",
        position: "Co-VP of External Affairs",
        image: "/images/people/naveen.png",
    },
    {
        id: 6,
        name: "Bonnie Tran",
        position: "Co-VP of Marketing",
        image: "/images/people/bonnie.JPG",
    },
    {
        id: 7,
        name: "Travis Yen",
        position: "Co-VP of Marketing",
        image: "/images/people/travis.JPG",
    },
    {
        id: 8,
        name: "Lauren Nguyen",
        position: "Co-VP of Marketing",
        image: "/images/people/lauren.JPG",
    },
    {
        id: 9,
        name: "Stephanie Santos",
        position: "Co-VP of Marketing",
        image: "/images/people/stephanie.jpg",
    },
    {
        id: 10,
        name: "Eshaan Rawat",
        position: "Co-VP of Professional Development",
        image: "/images/people/eshaan.JPG",
    },
    {
        id: 11,
        name: "Amelia Jukita",
        position: "Co-VP of Professional Development",
        image: "/images/people/mia.JPG",
    },
    {
        id: 12,
        name: "Marcus Cao",
        position: "VP of Finance",
        image: "/images/people/marcus.JPG",
    },
    {
        id: 13,
        name: "Erin Tran",
        position: "Co-VP of Internal Affairs",
        image: "/images/people/erin.JPG",
    },
    {
        id: 14,
        name: "Karissa Ting",
        position: "Co-VP of Internal Affairs",
        image: "/images/people/karissa.JPG",
    },
    {
        id: 15,
        name: "Malak Shahin",
        position: "Co-VP of Community Development",
        image: "/images/people/malak.png",
    },
    {
        id: 16,
        name: "Tirza Kunaidy",
        position: "Co-VP of Community Development",
        image: "/images/people/tirza.JPG",
    }, 
    //intern list starts here 
    {
        id: 17,
        name: "Prakruthi Praveen",
        position: "External Affairs Intern",
        image: "/images/people/prakruthi.JPG",
    },
    {
        id: 18,
        name: "Lena Ponulak",
        position: "External Affairs Intern",
        image: "/images/people/lena.JPG",
    },
    {
        id: 19,
        name: "Neeva Mehta",
        position: "Marketing Intern",
        image: "/images/people/neeva.JPG",
    },
    {
        id: 20,
        name: "Melinda Do",
        position: "Marketing Intern",
        image: "/images/people/melinda.JPG",
    },
    {
        id: 21,
        name: "Kristin Francisco",
        position: "Marketing Intern",
        image: "/images/people/kristin.JPG",
    },
    {
        id: 22, 
        name: "Aithy Ho", 
        position: "Professional Development Intern", 
        image: "/images/people/aithy.JPG", 
    }, 
    {
        id: 23, 
        name: "Pranav Sethia", 
        position: "Professional Development Intern", 
        image: "/images/people/pranav.JPG", 
    }, 
    {
        id: 24,
        name: "Kurtis Lin",
        position: "Finance Intern",
        image: "/images/people/kurtis.JPG",
    },
    {
        id: 25,
        name: "Jade Chiang",
        position: "Internal Affairs Intern",
        image: "/images/people/jade.jpg",
    },
    {
        id: 26,
        name: "Aaryan Angadi",
        position: "Internal Affairs Intern",
        image: "/images/people/aaryan.JPG",
    },
    {
        id: 27,
        name: "Kristy Slu",
        position: "Community Development Intern",
        image: "/images/people/kristy.JPG",
    },
    {
        id: 28,
        name: "Sanika Patwardhan",
        position: "Community Development Intern",
        image: "/images/people/sanika.JPG",
    },
]

// Split board members into top section (first 2) and bottom section
const topBoardMembers = boardMembers.slice(0, 2)
const tempBottomBoardMembers = boardMembers.slice(2, 16)
const internMembers = boardMembers.slice(16)

// Board member card component
function BoardMemberCard({ name, position, image }: { name: string; position: string; image: string }) {
    return (
        <div className="flex flex-col items-center rounded-2xl border border-mist bg-white p-4 shadow-soft">
            <div className="w-full aspect-[3/4] overflow-hidden mb-3 rounded-xl">
                <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold text-center text-ink">{name}</h3>
            <p className="text-sm text-muted text-center">{position}</p>
        </div>
    )
}

export default function BoardPage() {
    return (
        <div className="min-h-screen bg-white text-ink">
            {/* Image Board */}
            <div className="relative w-full h-[600px] mb-16 mt-20">
                <img
                    src="/images/board1.JPG"
                    alt="MAISS Community"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/65"></div>
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
                    <h2
                        className="text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-display font-semibold text-white mb-6 text-balance"
                    >
                        Meet the Board
                    </h2>
                    <p
                        className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed"
                    >
                       Meet the dedicated team leading MAISS — Our board members are passionate innovators, creators, and leaders 
                       with experience working at top companies in tech and business.
                    </p>
                </div>
            </div>
            
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted mb-3">Leadership</p>
                    <h1 className="text-4xl md:text-5xl font-display font-semibold bg-gradient-to-r from-brand-pink via-brand-lavender to-brand-blue bg-clip-text text-transparent">
                        Executive Committee
                    </h1>
                </div>


                {/* executive committee (2 people) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-8 mb-16">
                    {topBoardMembers.map((member) => (
                        <BoardMemberCard key={member.id} name={member.name} position={member.position} image={member.image} />
                    ))}
                </div>

                {/* Section divider */}
                <div className="border-t border-gray-200 my-12"></div>

                {/* Title */}
                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted mb-3">Our Team</p>
                    <h1 className="text-4xl md:text-5xl font-display font-semibold bg-gradient-to-r from-brand-pink via-brand-lavender to-brand-blue bg-clip-text text-transparent">
                        Board Members
                    </h1>
                </div>

                {/* board members */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-10 gap-x-10 mb-20">
                    {tempBottomBoardMembers.map((member) => (
                        <BoardMemberCard key={member.id} name={member.name} position={member.position} image={member.image} />
                    ))}
                </div>

                {/* Section divider */}
                <div className="border-t border-gray-200 my-12"></div>

                {/* Title */}
                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted mb-3">Future Board</p>
                    <h1 className="text-4xl md:text-5xl font-display font-semibold bg-gradient-to-r from-brand-pink via-brand-lavender to-brand-blue bg-clip-text text-transparent">
                        Interns
                    </h1>
                </div>

                {/* interns */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-10 gap-x-10 mb-20">
                    {internMembers.map((member) => (
                        <BoardMemberCard key={member.id} name={member.name} position={member.position} image={member.image} />
                    ))}
                </div>

            </div>
        </div>
    )
}
