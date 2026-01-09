"use client"

// Board member data
const boardMembers = [
    {
        id: 1,
        name: "Andrew Ly",
        position: "President",
        image: "/images/people/andrew.JPG",
        year: "Junior",
        major: "BIM",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 2,
        name: "Aidan Jayakumar",
        position: "Executive Vice President",
        image: "/images/people/aidan.JPG",
        year: "Sophomore",
        major: "Business Administration",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 3,
        name: "Henry Lee",
        position: "Co-VP of External Affairs",
        image: "/images/people/henry.JPG",
        year: "Sophomore",
        major: "BIM & Data Science",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 4,
        name: "Trisha Illapani",
        position: "Co-VP of External Affairs",
        image: "/images/people/trisha.JPG",
        year: "Junior",
        major: "Business Administration",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 5,
        name: "Naveen Sanka",
        position: "Co-VP of External Affairs",
        image: "/images/people/naveen.png",
        year: "Sophomore",
        major: "Business Economics",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 6,
        name: "Bonnie Tran",
        position: "Co-VP of Marketing",
        image: "/images/people/bonnie.JPG",
        year: "Freshman",
        major: "Business Administration",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 7,
        name: "Travis Yen",
        position: "Co-VP of Marketing",
        image: "/images/people/travis.JPG",
        year: "Freshman",
        major: "Undeclared",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 8,
        name: "Lauren Nguyen",
        position: "Co-VP of Marketing",
        image: "/images/people/lauren.JPG",
        year: "Sophomore",
        major: "BIM",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 9,
        name: "Eshaan Rawat",
        position: "Co-VP of Professional Development",
        image: "/images/people/eshaan.JPG",
        year: "Sophomore",
        major: "Computer Science",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 10,
        name: "Amelia Jukita",
        position: "Co-VP of Professional Development",
        image: "/images/people/mia.JPG",
        year: "Sophomore",
        major: "BIM",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 11,
        name: "Marcus Cao",
        position: "VP of Finance",
        image: "/images/people/marcus.JPG",
        year: "Sophomore",
        major: "Business Administration",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 12,
        name: "Erin Tran",
        position: "Co-VP of Internal Affairs",
        image: "/images/people/erin.JPG",
        year: "Sophomore",
        major: "Business Economics",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 13,
        name: "Karissa Ting",
        position: "Co-VP of Internal Affairs",
        image: "/images/people/karissa.JPG",
        year: "Sophomore",
        major: "BIM",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 14,
        name: "Malak Shahin",
        position: "Co-VP of Community Development",
        image: "/images/people/malak.png",
        year: "Sophomore",
        major: "Business Administration",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
    {
        id: 15,
        name: "Tirza Kunaidy",
        position: "Co-VP of Community Development",
        image: "/images/people/tirza.JPG",
        year: "Sophomore",
        major: "Business Economics",
        quote:
            "Your quote why they joined MAISS. What they've gained here & Overall their experience in MAISS. 1-2 sentences.",
    },
]

// Split board members into top section (first 2) and bottom section
const topBoardMembers = boardMembers.slice(0, 2)
const tempBottomBoardMembers = boardMembers.slice(2, 15)

// Board member card component
function BoardMemberCard({ name, position, image }: { name: string; position: string; image: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full aspect-[3/4] overflow-hidden mb-2">
                <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-center">{name}</h3>
            <p className="text-sm text-gray-600 text-center">{position}</p>
        </div>
    )
}

export default function BoardPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Image Board */}
            <div className="relative w-full h-[600px] mb-16 mt-20">
                <img
                    src="/images/board1.JPG"
                    alt="MAISS Community"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
                    <h2
                        className="text-[4.5rem] leading-[1.1] font-medium text-white mb-8"
                        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                        Meet the Board
                    </h2>
                    <p
                        className="text-white text-xl max-w-2xl leading-relaxed"
                        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                       Meet the dedicated team leading MAISS — Our board members are passionate innovators, creators, and leaders 
                       with experience working at top companies in tech and business.
                    </p>
                </div>
            </div>
            
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500 bg-clip-text text-transparent mb-6 font-Inter">
                        Executive Committee
                    </h1>
                </div>


                {/* executive committee (2 people) */}
                <div className="grid grid-cols-2 max-w-3xl mx-auto gap-x-20 mb-16">
                    {topBoardMembers.map((member) => (
                        <BoardMemberCard key={member.id} name={member.name} position={member.position} image={member.image} />
                    ))}
                </div>

                {/* Section divider */}
                <div className="border-t border-gray-200 my-12"></div>

                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500 bg-clip-text text-transparent mb-6 font-Inter">
                        Board Members
                    </h1>
                </div>

                {/* board members */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-10 gap-x-20 mb-20">
                    {tempBottomBoardMembers.map((member) => (
                        <BoardMemberCard key={member.id} name={member.name} position={member.position} image={member.image} />
                    ))}
                </div>
            </div>
        </div>
    )
}
