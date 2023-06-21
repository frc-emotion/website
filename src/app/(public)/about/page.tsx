import AboutUs from "@/components/sections/about/AboutUs";
import { Metadata } from "next";
import Image from "next/image";
import ".//index.css";

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
			<AboutUs />
		</main>
	);
}
