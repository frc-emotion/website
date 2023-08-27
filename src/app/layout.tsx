import { Inter } from "next/font/google";
import "@/styles/globals.css";

export const metadata = {
	title: "FRC Team 2658",
	description:
		"Team Σ-Motion is a high school FIRST robotics team at Rancho Bernardo High School dedicated to promoting Science, Technology, Engineering, and Mathematics.",
};

const font = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-main",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${font.variable} font-sans bg-black`}>
				{children}
			</body>
		</html>
	);
}
