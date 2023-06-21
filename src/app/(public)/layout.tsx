import { Bebas_Neue, Raleway } from "next/font/google";
import "../../styles/globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
	title: "FRC Team 2658",
	description:
		"Team Σ-Motion is a high school FIRST robotics team at Rancho Bernardo High School dedicated to promoting Science, Technology, Engineering, and Mathematics.",
};

const raleway = Raleway({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-raleway",
});

const bebas_neue = Bebas_Neue({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-bebas-neue",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${raleway.variable} font-sans ${bebas_neue.variable}`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
