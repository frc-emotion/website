import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { cookies } from "next/dist/client/components/headers";
import { User } from "../(auth)/login/page";
import { Bebas_Neue, Orbitron } from "next/font/google";

const bbnFont = Bebas_Neue({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-bebas-neue",
});

const orbFont = Orbitron({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-main",
});

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieJar = cookies();
	const auth = cookieJar.get("auth")?.value;
	const userCookie = cookieJar.get("user")?.value;
	const user = userCookie ? (JSON.parse(userCookie) as User) : null;
	return (
		<div
			id="publicLayout"
			className={`${bbnFont.variable} ${orbFont.variable} font-sans bg-black`}
		>
			<Navbar auth={auth ? true : false} user={user} />
			{children}
			<Footer />
		</div>
	);
}
