import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/home/Hero";
import SponsorSnippet from "@/components/sections/home/SponsorSnippet";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            {/* TODO: Finish sponsor snippet once sponsor page is finished */}
            {/* <SponsorSnippet /> */}
            <div className="h-[7.5vh] bg-teamYellow-500" />
            <div className="bg-teamYellow-500 pb-5">
                {/* Mission Statement */}
                <div
                    id="#about"
                    className="grid grid-cols-1 pb-[10vh] lg:grid-cols-2 2xl:grid-cols-3"
                >
                    <div className="col-span-1 mx-[10vw] lg:mx-[4vw]">
                        <div className="flex-row">
                            <h1 className="text-[50px] font-semibold">
                                About Us
                            </h1>
                            <p className="text-[17px]">
                                We are an FRC Robotics team founded in 2008, by
                                and for high school students. We are dedicated
                                to giving students an experience that will help
                                them in our ever-evolving world. We are a 100%
                                student-run team, so students get the amazing
                                opportunity to learn from their older peers and
                                teammates. We show students what it's like to
                                work on a project as a team, and how fun it is
                                when the robot you built is the one that wins.
                                Since its establishment in 2007 by Jeff Bush and
                                Richard Lin, the Σ-Motion team has designed and
                                built over 10 robots which it used in the FIRST
                                Competitions around the country.
                            </p>
                            <h2 className="mt-10 text-[40px] font-semibold">
                                Mission Statement
                            </h2>
                            <p className="text-[17px]">
                                Team Σ-Motion's purpose is to create a
                                student-run FRC team in cooperation with
                                advisors and mentors. We aim to educate and
                                spread STEM knowledge and FIRST values by
                                engaging in events that directly highlight and
                                showcase the intrigue and excitement of
                                robotics, while creating an enjoyable and
                                inclusive environment that strives for
                                excellence. We believe outreach is crucial to
                                our success and something that defines us as a
                                team. For 14 years we have attended and
                                sponsored community events to inspire others in
                                STEAM.
                            </p>
                            <div className="mt-10">
                                <Link
                                    className="select-none text-[17px] font-semibold underline"
                                    href="#"
                                >
                                    Learn more
                                    <ArrowUpRightIcon className="inline h-[14px] w-[14px] translate-x-1/4 stroke-[4px] text-black no-underline" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 mt-10 flex h-full w-full items-center justify-center lg:mt-0 2xl:col-span-2">
                        <div className="relative h-full w-[90vw] select-none sm:w-[80vw] lg:w-[45vw] 2xl:w-[60vw] -lg:h-[50vh]">
                            <Image
                                src="/about.jpeg"
                                fill={true}
                                alt=""
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
