import React from 'react';
import PDFViewer from '@/components/sections/donate/PDFViewer';
import Image from "next/image";

export const metadata = {
    title: "Donate | FRC Team 2658",
    description: "Donate to Σ-Motion and support our team",
};

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="relative select-none h-clampLarge overflow-hidden bg-black">
                <Image
                    src="https://cdn.team2658.org/web-public/trident.jpeg"
                    alt="2023 Robot, Trident"
                    fill={true}
                    className="object-cover brightness-50 blur-sm absolute"
                />
                <h1 className="text-center py-8 text-5xl sm:text-r8xl font-bold absolute inset-0 text-teamYellow-100">
                    Donate
                </h1>
            </div>
            <div className="flex justify-center w-full sm:w-3/4 lg:w-1/2 mx-auto p-4 bg-teamYellow-500 rounded-xl">
                <PDFViewer />
            </div>
        </div>
    );
}