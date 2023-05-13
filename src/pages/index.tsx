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
      <div className="h-[75vh] bg-[#eafa33]"></div>
			<Footer />
		</main>
	);
}
