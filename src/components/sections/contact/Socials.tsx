import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaGithub,
    FaGit,
    FaEnvelope,
} from "react-icons/fa";
import "./index.scss";
import Link from "next/link";

const socialDimension = 30;
const social = [
    {
        name: "Instagram",
        username: "@frcteam2658",
        link: "https://instagram.com/frcteam2658",
        icon: FaInstagram,
        hoverColor: "group-hover:text-[#dd2a7b]",
    },
    {
        name: "Facebook",
        username: "@frcteam2658",
        link: "https://www.facebook.com/frcteam2658",
        icon: FaFacebook,
        hoverColor: "group-hover:text-[#1877f2]",
    },
    {
        name: "Twitter",
        username: "@frcteam2658",
        link: "https://twitter.com/FRCTeam2658",
        icon: FaTwitter,
        hoverColor: "group-hover:text-[#1DA1F2]",
    },
    {
        name: "YouTube",
        username: "team2658",
        link: "https://www.youtube.com/user/team2658",
        icon: FaYoutube,
        hoverColor: "group-hover:text-[#FF0000]",
    },
    {
        name: "GitHub",
        username: "frc-emotion",
        link: "https://www.github.com/frc-emotion",
        icon: FaGithub,
        hoverColor: "group-hover:text-gray-500",
    },
    {
        name: "Email",
        username: "frcteam2658@gmail.com", // Needs to be changed to something that isnt so long lol
        link: "mailto:frcteam2658@gmail.com",
        icon: FaEnvelope,
        hoverColor: "group-hover:text-gray-500",
    },
];

export default function Socials() {
    return (
        <section className="text-teamYellow-100 bg-neutral-700 rounded-xl py-8 mx-6">
            <h2 className="text-center font-bold text-r4xl m-8">Socials</h2>
            <ul className="inset-x-0 bottom-16 grid grid-cols-2 lg:grid-cols-3 gap-8 p-6 -2xs:grid-cols-1">
                {social.map((social) => (
                    <Link
                        href={social.link}
                        key={social.name}
                        prefetch={false}
                        className={`group hover:opacity-100`}
                    >
                        <center>
                            <social.icon
                                className={`h-[30px] w-[30px] ${social.hoverColor} transition-all ease-in-out duration-300`}
                            />

                            <span className="group-hover:opacity-50 transition-all ease-in-out duration-300">
                                {social.username}
                            </span>
                        </center>
                    </Link>
                ))}
            </ul>
        </section>
    );
}
