import "../styles/globals.css";

export const metadata = {
	title: "FRC Team 2658",
	description: "FRC Team 2658 Σ-Motion",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
