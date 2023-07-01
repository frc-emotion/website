import ContactForm from "@/components/sections/contact/ContactForm";
import Socials from "@/components/sections/contact/Socials";

export const metadata = {
	title: "Contact Us | FRC Team 2658",
	description: "Get in touch with Σ-Motion and follow our socials",
}

export default function Home() {
	return (
		<main className="bg-teamYellow-500 relativ py-8">
				<h1 className="text-8xl text-black font-bold text-center py-16">Contact Us</h1>
			<ContactForm />
			<Socials />
		</main>
	);
}
