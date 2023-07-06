import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/home/Hero";
import SponsorImages2022 from "@/components/sections/sponsors/SponsorImages2022";
import SponsorImages2023 from "@/components/sections/sponsors/SponsorImages2023";
import Image from "next/image";

export const metadata = {
	title: "Sponsors | FRC Team 2658",
	description:
		"Sponsorship information for FRC Team 2658, Σ-Motion, from Rancho Bernardo, California",
};

export default function Sponsor() {
	return (
		<main className="bg-black">
			<div className="relative h-clampLarge overflow-hidden">
				<Image
					src="https://cdn.team2658.org/web-public/trident.jpeg"
					alt="2023 Robot, Trident"
					fill={true}
					className="absolute object-cover blur-sm brightness-50"
				/>
				<h1 className="absolute inset-0 py-8 text-center text-r8xl font-bold text-teamYellow-100">
					Sponsors
				</h1>
			</div>
			<SponsorImages2023 />
			<SponsorImages2022 />
		</main>
	);
}
