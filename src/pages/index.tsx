import { Inter } from "next/font/google";
import Navbar from "../components/navigation/Navbar";
import Hero from "../components/sections/home/Hero";
import Footer from "../components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<div className="h-[75vh] bg-teamYellow"></div>
				<div id="#about" className="grid grid-cols-1 lg:grid-cols-3 bg-teamYellow-600 py-[10vh]">
			<Footer />
		</main>
	);
}
