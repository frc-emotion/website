import Image from "next/image";

export const metadata = {
    title: "Upcoming Events | FRC Team 2658",
    description: "Learn about Σ-Motion's upcoming events",
};

export default function UpcomingEvents() {
    return (
        <main className="bg-teamYellow-500 overflow-hidden relative">
            <div
                id="hero"
                className="relative select-none h-clampLarge overflow-hidden bg-black"
            >
                <Image
                    src="https://cdn.team2658.org/web-public/outreach/head.jpeg"
                    fill={true}
                    alt=""
                    className="object-cover brightness-50 blur-sm absolute"
                    priority={true}
                />
                <h1 className="absolute py-8 text-r8xl font-bold text-teamYellow-100 inset-0 text-center">
                    Upcoming Events
                </h1>
                
            </div>            
            <div id="content" className="mx-[6vw] mb-[8vh] mt-[4vh]">
                <div>
                    <div className="mt-[0.4rem] space-y-2">
                        <div id="Competitions">
                            <h2 className="text-r2xl font-bold">
                                Competitions
                            </h2>
                            <div id="upcomingEventsContent" className='mb-5'>
                                <div className="grid-rows-auto grid">
                                    <div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
                                        <div className="relative col-span-1 mb-5 mt-1 flex h-[45vh] select-none overflow-hidden rounded-lg md:mr-5">
                                            <Image
                                                src="https://raw.githubusercontent.com/CrookedTwig4/Pictures/refs/heads/main/DSC03435.JPG"
                                                alt="San Diego Regional 2025"
                                                fill={true}
                                                className='object-cover'
                                            />
                                        </div>
                                        <div className="col-span-1 mb-5 grid rounded-lg py-10 text-white -md:place-items-center"
                                        style={{ background: 'linear-gradient(0deg, rgba(26,26,26,1) 0%, rgba(44,44,44,1) 50%, rgba(26,26,26,1) 100%)' }}
                                        >
                                        <div className="mx-8 flex flex-col justify-center -md:items-center">
                                                <h3 className="text-r3xl font-bold text-white">
                                                    San Diego Regional 2025
                                                </h3>
                                                <h4 className="text-rxl">
                                                    March 21 - March 23
                                                </h4>
                                                <br></br>
                                                <p className="-md:mx-6 -md:text-center">
                                                    {/*Description?*/}
                                                </p>
                                                <div className="mt-3 flex flex-row space-x-3 font-semibold">
                                                    <p>more:</p>
                                                    <a
                                                        className="underline"
                                                        href="https://cafirst.org/wp-content/uploads/2025/01/2025-San-Diego-Regional-Public-Schedule.png"
                                                        aria-label="The schedule for the upcoming regional."
                                                        target="_blank"
                                                    >
                                                        Schedule
                                                    </a>
                                                    <a
                                                        className="underline"
                                                        href="https://www.thebluealliance.com/event/2025casd"
                                                        aria-label="San Diego Regional match results."
                                                        target="_blank"
                                                    >
                                                        Results
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div id="OffSeason">
                            <h2 className="text-r2xl font-bold">
                                Off-Season Competitions
                            </h2>
                            <div id="upcomingEventsContent" className='mb-5'>
                                <div className="grid-rows-auto grid">
                                    <div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
                                        
                                        {/* Fairbotics */}
                                        <div className="col-span-1 mb-5 grid rounded-lg py-10 text-white -md:place-items-center md:mr-5"
                                            style={{ background: 'linear-gradient(0deg, rgba(26,26,26,1) 0%, rgba(44,44,44,1) 50%, rgba(26,26,26,1) 100%)' }}
                                        >
                                            <div className="mx-8 flex flex-col justify-center -md:items-center text-white">
                                                <h3 className="text-r3xl font-bold">
                                                    Fairbotics 2025
                                                </h3>
                                                <h4 className="text-rxl">
                                                    June 18 - June 20
                                                </h4>
                                                <br></br>
                                                <p className="-md:mx-6 -md:text-center">
                                                    {/*Description?*/}
                                                </p>
                                                <div className="mt-3 flex flex-row space-x-3 font-semibold">
                                                    <p>more:</p>
                                                    <a
                                                        className="underline"
                                                        href="https://www.sdfair.com/p/participate/entry/student-showcase/students-high-school"
                                                        aria-label="Fairbotics 2025 announcement."
                                                        target="_blank"
                                                    >
                                                        Del Mar Fair
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative col-span-1 mb-5 mt-1 flex h-[45vh] select-none overflow-hidden rounded-lg">
                                            <Image
                                                src="https://raw.githubusercontent.com/CrookedTwig4/Pictures/refs/heads/main/DelMarFair2025.png"
                                                alt="Fairbotics 2025"
                                                fill={true}
                                                className='object-contain'
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Beach Blitz */}{/*
                                    <div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
                                        <div className="relative col-span-1 mb-5 mt-1 flex h-[45vh] select-none overflow-hidden rounded-lg md:mr-5">
                                            <Image
                                                src=""
                                                alt="Beach Blitz"
                                                fill={true}
                                                className='object-cover'
                                            />
                                        </div>
                                        <div className="col-span-1 mb-5 grid rounded-lg py-10 text-white -md:place-items-center"
                                            style={{ background: 'linear-gradient(0deg, rgba(26,26,26,1) 0%, rgba(44,44,44,1) 50%, rgba(26,26,26,1) 100%)' }}
                                        >
                                            <div className="mx-8 flex flex-col justify-center -md:items-center">
                                                <h3 className="text-r3xl font-bold text-white">
                                                    Beach Blitz 2025
                                                </h3>
                                                <h4 className="text-rxl">
                                                Dates TBD
                                                </h4>
                                                <br></br>
                                                <p className="-md:mx-6 -md:text-center">
                                                </p>
                                                <div className="mt-3 flex flex-row space-x-3 font-semibold">
                                                    {/*
                                                    <p>more:</p>
                                                    <a
                                                        className="underline"
                                                        href=""
                                                        aria-label="_____ _____"
                                                        target="_blank"
                                                    >
                                                        _____
                                                    </a>
                                                    */}{/*}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Battle at the Border */}{/*
                                    <div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
                                        <div className="col-span-1 mb-5 grid rounded-lg py-10 text-white -md:place-items-center md:mr-5"
                                            style={{ background: 'linear-gradient(0deg, rgba(26,26,26,1) 0%, rgba(44,44,44,1) 50%, rgba(26,26,26,1) 100%)' }}
                                        >
                                            <div className="mx-8 flex flex-col justify-center -md:items-center text-white">
                                                <h3 className="text-r3xl font-bold">
                                                    Battle at the Border 2025
                                                </h3>
                                                <h4 className="text-rxl">
                                                    Dates TBD
                                                </h4>
                                                <br></br>
                                                <p className="-md:mx-6 -md:text-center">
                                                
                                                </p>
                                                <div className="mt-3 flex flex-row space-x-3 font-semibold">
                                                    {/*
                                                    <p>more:</p>
                                                    <a
                                                        className="underline"
                                                        href=""
                                                        aria-label="_____ _____"
                                                        target="_blank"
                                                    >
                                                        _____
                                                    </a>
                                                    */}{/*
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative col-span-1 mb-5 mt-1 flex h-[45vh] select-none overflow-hidden rounded-lg">
                                            <Image
                                                src=""
                                                alt="Battle at the Border"
                                                fill={true}
                                                className='object-cover'
                                            />
                                        </div>
                                    </div>
                                        */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
