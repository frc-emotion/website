"use client";

import Link from "next/link";
import {
	FaInstagram,
	FaFacebook,
	FaTwitter,
	FaYoutube,
	FaGithub,
} from "react-icons/fa";

// social icons object: {name, link, icon, hover-color}
const socialDimension = 30;
const social = [
	{
		name: "Instagram",
		link: "https://instagram.com/frcteam2658",
		icon: FaInstagram,
		hoverColor: "text-[#dd2a7b]",
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/frcteam2658/",
		icon: FaFacebook,
		hoverColor: "text-[#1877f2]",
	},
	{
		name: "Twitter",
		link: "https://twitter.com/FRCTeam2658",
		icon: FaTwitter,
		hoverColor: "text-[#1DA1F2]",
	},
	{
		name: "YouTube",
		link: "https://www.youtube.com/user/team2658",
		icon: FaYoutube,
		hoverColor: "text-[#FF0000]",
	},
	{
		name: "GitHub",
		link: "https://www.github.com/frc-emotion",
		icon: FaGithub,
		hoverColor: "text-gray-500",
	},
];

export default function Footer() {
	return (
		<div id="footer">
			{/* TODO: Finish footer w/ links or other elements LATER once the rest of the site is built */}
			<div
				className="grid grid-cols-2 bg-black text-white px-[5vw]"
				id="footerMain"
			>
				<div
					className="items-center col-span-2 py-[7vh] flex flex-col h-full justify-center"
					id="footerPrimaryInfo"
				>
					<h1 className="text-[5.5rem] -mt-5 font-bold select-none">
						Σ-Motion
					</h1>
					<p>FRC Team 2658 - Rancho Bernardo High School</p>
					<p>13010 Paseo Lucido - San Diego, CA 92128</p>
					<div
						className="flex items-center space-x-5 mt-[1.5rem]"
						id="socialIcons"
					>
						{social.map((social) => (
							<Link
								href={social.link}
								key={social.name}
								prefetch={false}
							>
								<social.icon
									className={`h-[${socialDimension}px] w-[${socialDimension}px] hover:${social.hoverColor}`}
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
			{/* TODO: Get contributors list and rank by most contributions */}
			{/* <div
				id="footer-copyright"
				className="h-[4.5vh] w-full flex items-center bg-white"
			>
				<div id="footer-copyright-text" className="w-full mx-[5vw]">
					<p className="text-black text-left" my-auto>
						Developed for{" "}
						<Link
							href="https://github.com/frc-emotion"
							prefetch={false}
						>
							Σ-Motion
						</Link>{" "}
						by
					</p>
				</div>
			</div> */}
		</div>
	);
}
