import AboutUsText from "@/components/sections/about/AboutUs";
import { Metadata } from "next";
import Image from "next/image";
import ".//index.css";
import Grid3x2 from "@/components/containers/Grid3x2";

export const metadata: Metadata = {
	title: "About Us | FRC Team 2658",
	description:
		"Team Σ-Motion is a high school FIRST robotics team at Rancho Bernardo High School dedicated to promoting Science, Technology, Engineering, and Mathematics.",
};

export default function AboutPage() {
	return (
		<main className="min-h-[55vh]">
			<div className="overflow-hidden h-[30vh] justify-center flex-col flex bgAbout">
				<h1 className="font-bold 2xl:text-[200px] xl:text-[160px] lg:text-[140px] text-[85px] text-center">
					About Us
				</h1>
			</div>
			<AboutUsText yellow>
				We are an FRC Robotics team founded in 2008, by and for high
				school students. We are dedicated to giving students an
				experience that will help them in our ever-evolving world. We
				are a 100% student-run team, so students get the amazing
				opportunity to learn from their older peers and teammates. We
				show students what it's like to work on a project as a team, and
				how fun it is when the robot you built is the one that wins.
				Since its establishment in 2007 by Jeff Bush and Richard Lin,
				the Σ-Motion team has designed and built over 10 robots which it
				used in the FIRST Competitions around the country.
			</AboutUsText>
			<h2 className="px-4 pt-4 text-xl md:text-4xl bg-teamYellow-400 ">Team Structure</h2>
			<AboutUsText yellow>
				Team 2658 is built through a simple and effective leadership
				structure. Our team is split up into 5 different subteams:
				Build, Design, Software, Electrical, and Marketing/Business.
				Each subteam provides the training and ability for every single
				member and allows them to strive based on their participation
				and commitment to our team. Elected subteam leads manage their
				respective subteams and plan out their training goals. Above the
				leads lie the executives-President, Vice President, Secretary,
				Treasurer, and Advisors- where managerial responsibilities are
				dispersed. Our mentors play an important role in our upbringing
				as a team, their assistance and guidance to the team's decisions
				and current skills.
			</AboutUsText>
			<Grid3x2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique sapiente neque culpa tempora laudantium odio, numquam minus odit quam!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique sapiente neque culpa tempora laudantium odio, numquam minus odit quam!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique sapiente neque culpa tempora laudantium odio, numquam minus odit quam!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique sapiente neque culpa tempora laudantium odio, numquam minus odit quam!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique sapiente neque culpa tempora laudantium odio, numquam minus odit quam!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique sapiente neque culpa tempora laudantium odio, numquam minus odit quam!</p>
			</Grid3x2>
		</main>
	);
}
