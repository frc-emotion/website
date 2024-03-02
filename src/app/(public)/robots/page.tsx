import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/home/Hero";
import RobotPanel from "@/components/sections/robots/robot";
import Image from "next/image";

export const metadata = {
	title: "Robots | FRC Team 2658",
	description:
		"Previous Σ-Motion Robots from FRC Team 2658, in Rancho Bernardo, California",
};

export default function Robot() {
	return (
		<main className="bg-black w-full">
			<div className="relative h-clampLarge overflow-hidden">
				<Image
					src="https://cdn.team2658.org/web-public/trident.jpeg"
					alt="2023 Robot, Trident"
					fill={true}
					className="absolute object-cover blur-sm brightness-50"
				/>
				<h1 className="absolute inset-0 py-8 text-center text-r8xl font-bold text-teamYellow-100">
					Robots
				</h1>
			</div>
			<RobotPanel/>
		</main>
	);
}
