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
        hoverColor: "hover:text-[#dd2a7b]",
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/frcteam2658/",
        icon: FaFacebook,
        hoverColor: "hover:text-[#1877f2]",
    },
    {
        name: "Twitter",
        link: "https://twitter.com/FRCTeam2658",
        icon: FaTwitter,
        hoverColor: "hover:text-[#1DA1F2]",
    },
    {
        name: "YouTube",
        link: "https://www.youtube.com/user/team2658",
        icon: FaYoutube,
        hoverColor: "hover:text-[#FF0000]",
    },
    {
        name: "GitHub",
        link: "https://www.github.com/frc-emotion",
        icon: FaGithub,
        hoverColor: "hover:text-gray-500",
    },
];

export default function Footer() {
    return (
        <div id="footer">
            {/* TODO: Finish footer w/ links or other elements LATER once the rest of the site is built */}
            <div
                className="grid grid-cols-2 bg-black px-[5vw] text-teamYellow-400"
                id="footerMain"
            >
                <div
                    className="col-span-2 flex h-full flex-col items-center justify-center py-[7vh]"
                    id="footerPrimaryInfo"
                >
                    <h1 className="-mt-5 select-none text-r7xl font-bold">
                        Σ-Motion
                    </h1>
                    <p className="text-rsm">
                        FRC Team 2658 - Rancho Bernardo High School
                    </p>
                    <p className="text-rsm">
                        13010 Paseo Lucido - San Diego, CA 92128
                    </p>
                    <div
                        className="mt-[1.5rem] flex items-center space-x-5"
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
        </div>
    );
}
