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
			<Hero />
			<SponsorSnippet />
			<div className="pb-5 bg-teamYellow-500">
				{/* Mission Statement */}
				<div
					id="#about"
					className="grid grid-cols-1 2xl:grid-cols-3 pb-[10vh]"
				>
					<div className="col-span-1 lg:mx-[4vw] mx-[10vw]">
						<div className="flex-col">
							<h1 className="text-[50px] font-semibold">
								Team Info
							</h1>
							<p className="text-[17px]">
								FRC Team 2658, Σ-Motion, is the robotics team of Rancho Bernardo High School. We are located at 13010 Paseo Lucido, San Diego, CA 92128. 
							</p>
							<h2 className="text-[40px] font-semibold mt-10">
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
									className="text-[17px] underline font-semibold select-none"
									href="#"
								>
									Learn more
									<ArrowUpRightIcon className="h-[14px] w-[14px] text-black inline no-underline stroke-[4px] translate-x-1/4" />
								</Link>
							</div>
						</div>
					</div>
					<div className="mt-10 2xl:mt-0 col-span-1 2xl:col-span-2 flex w-full h-full items-center justify-center">
						<Image
							src="/about.jpeg"
							className="w-[90vw] sm:w-[80vw] 2xl:w-[60vw] select-none"
							width={6000}
							height={4000}
							alt="2658's 2023 robot, 'Trident'"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
