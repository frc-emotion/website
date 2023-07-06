import ContactForm from "@/components/sections/contact/ContactForm";
import Socials from "@/components/sections/contact/Socials";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "Contact Us | FRC Team 2658",
	description: "Get in touch with Σ-Motion and follow our socials",
};

export default function Home() {
	return (
		<main className="relative flex flex-col justify-center bg-black py-8">
			<div className="relative inset-x-0 top-0 h-clampXL w-full overflow-hidden object-cover">
				<Image
					src="https://cdn.team2658.org/web-public/lvr-stands.jpg"
					alt="Σ-Motion at the Las Vegas Regional"
					fill={true}
					className="absolute overflow-hidden object-cover blur-sm brightness-50"
				/>
				<h1 className="absolute inset-0 my-16 text-center text-r8xl font-bold text-teamYellow-100">
					Contact Us
				</h1>
				<Link
					href={"mailto:frcteam2658@gmail.com"}
					className="absolute px-2 text-center text-r2xl text-teamYellow-100 bottom-8 inset-x-0"
				>
					Email us at frcteam2658@gmail.com
				</Link>
			</div>
			<ContactForm />
			<Socials />
		</main>
	);
}
