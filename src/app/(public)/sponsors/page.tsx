import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/home/Hero";
import SponsorImages2022 from "@/components/sections/sponsors/SponsorImages2022";
import SponsorImages2023 from "@/components/sections/sponsors/SponsorImages2023";

export const metadata = {
	title: "Sponsors | FRC Team 2658", 
	description: "Sponsorship information for FRC Team 2658, Σ-Motion, from Rancho Bernardo, California",
}

export default function Sponsor() {
	return (
		<main>
			<h1 className="text-9xl font-bold text-center py-32 bg-black text-teamYellow-400">Sponsors</h1>
			<SponsorImages2023 />
			<SponsorImages2022 />
		</main>
	);
}
