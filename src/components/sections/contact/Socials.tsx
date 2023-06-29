import {
	FaInstagram,
	FaFacebook,
	FaTwitter,
	FaYoutube,
	FaGithub,
	FaGit,
} from "react-icons/fa";
import Link from "next/link";

const socialDimension = 30;
const social = [
	{
		name: "Instagram",
		username: "@frcteam2658",
		link: "https://instagram.com/frcteam2658",
		icon: FaInstagram,
		hoverColor: "text-[#dd2a7b]",
	},
	{
		name: "Facebook",
		username: "@frcteam2658",
		link: "https://www.facebook.com/frcteam2658",
		icon: FaFacebook,
		hoverColor: "text-[#1877f2]",
	},
	{
		name: "Twitter",
		username: "@frcteam2658",
		link: "https://twitter.com/FRCTeam2658",
		icon: FaTwitter,
		hoverColor: "text-[#1DA1F2]",
	},
	{
		name: "YouTube",
		username: "@team2658",
		link: "https://www.youtube.com/user/team2658",
		icon: FaYoutube,
		hoverColor: "text-[#FF0000]",
	},
	{
		name: "GitHub",
		username: "@frc-emotion",
		link: "https://www.github.com/frc-emotion",
		icon: FaGithub,
		hoverColor: "text-gray-500",
	},
	{
		name: "Email",
		username: "frcteam2658@gmail.com", // Needs to be changed to something that isnt so long lol
		link: "mailto:frcteam2658@gmail.com",
		icon: FaGithub
	}
];

export default function Socials() {
    return (
      <ul className="grid grid-cols-3 gap-4 p-6">
        {social.map((social) => (
		
        <Link
        href={social.link}
        key={social.name}
        prefetch={false}
		>
		<center><social.icon className={`h-[${socialDimension}px] w-[${socialDimension}px] hover:${social.hoverColor}`} />{social.username}</center>
        </Link> 
        ))}
      </ul>
    );
          
  }