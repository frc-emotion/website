import { Bebas_Neue, Orbitron } from "next/font/google";
import '@/styles/globals.css'

export const metadata = {
    title: "FRC Team 2658",
    description:
        "Team Σ-Motion is a high school FIRST robotics team at Rancho Bernardo High School dedicated to promoting Science, Technology, Engineering, and Mathematics.",
};

const font = Orbitron({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-main",
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
				className={`${bebas_neue.variable} ${font.variable} font-sans bg-black`}
			>
				{children}
			</body>
		</html>
	);
}
