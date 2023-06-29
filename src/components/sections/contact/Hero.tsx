import { motion } from "framer-motion";
import ContactForm from "@/components/sections/contact/ContactForm";
import Socials from "@/components/sections/contact/Socials";

export default function Hero() {
	return (
		<div id="#hero" className="bg-teamYellow-500 grid px-[5vw] z-0">
			<div id="heroHeader">
				<h1 className="2xl:text-[200px] xl:text-[160px] lg:text-[140px] text-[85px] font-semibold w-full text-center">
					Σ-Motion
				</h1>
				<div className="font-semibold px-[10vw] xl:text-[28px] lg:text-[20px] lg:mt-[-30px] grid md:grid-rows-1 md:grid-cols-4 grid-rows-3 grid-cols-1">
					<p className="md:text-left text-center">Contact</p>
					<p className="text-center md:col-span-2">
						Rancho Bernardo High School
					</p>
					<p className="md:text-right text-center">Social Media</p>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<ContactForm />
				<div><br></br></div> {/*TODO: Add a component for displaying map*/}
				<Socials />
			</div>
				
			
		</div>
	);
}

