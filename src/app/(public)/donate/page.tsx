import React from 'react';
import PDFViewer from '@/components/sections/donate/PDFViewer';
import Image from "next/image";

export const metadata = {
    title: "Donate | FRC Team 2658",
    description: "Donate to Σ-Motion and support our team",
};

export default function Home ({ children }: { children: React.ReactNode }) {
    return (
        <div>
        <div className="relative overflow-hidden h-clampLarge mb-8  ">
                <Image
                    src="https://cdn.team2658.org/web-public/trident.jpeg"
                    alt="2023 Robot, Trident"
                    fill={true}
                    className="object-cover absolute brightness-50 blur-sm"
                />
                <h1 className="text-center py-8 text-r8xl font-bold absolute inset-0 text-teamYellow-100">
                    Donate
                </h1>
            </div>
        <div className="flex justify-center w-1/2 flex-col mx-auto bg-teamYellow-500 rounded-xl">
            <PDFViewer/>
        </div>
    </div>
    );
}
