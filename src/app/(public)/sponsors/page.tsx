import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/home/Hero";
import SponsorImages2022 from "@/components/sections/sponsors/SponsorImages2022";
import SponsorImages2023 from "@/components/sections/sponsors/SponsorImages2023";
import SponsorImages2024 from "@/components/sections/sponsors/SponsorImages2024";
import Image from "next/image";

export const metadata = {
    title: "Sponsors | FRC Team 2658",
    description:
        "Sponsorship information for FRC Team 2658, Σ-Motion, from Rancho Bernardo, California",
};

export default function Sponsor() {
    return (
        <main className="bg-black">
            <div className="relative overflow-hidden h-clampLarge">
                <Image
                    // src="https://cdn.team2658.org/web-public/trident.jpeg"
                    src="https://cdn.jsdelivr.net/gh/frc-emotion/images@main/trident.jpeg"
                    alt="2023 Robot, Trident"
                    fill={true}
                    className="object-cover absolute brightness-50 blur-sm"
                />
                <h1 className="text-center py-8 text-r8xl font-bold absolute inset-0 text-teamYellow-100">
                    Sponsors
                </h1>
            </div>
            <SponsorImages2024 />
            <SponsorImages2023 />
            <SponsorImages2022 />
        </main>
    );
}
