import React from 'react';
import PDFViewer from '@/components/sections/donate/PDFViewer';


export const metadata = {
    title: "Donate | FRC Team 2658",
    description: "Donate to Σ-Motion and support our team",
};

export default function Home ({ children }: { children: React.ReactNode }) {
    return (
        <div>
        <h1 className="text-3xl font-bold">Donate</h1>
        <p>Thank you for considering a donation!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Donate Now
        </button>
        <div className="mt-8">
            <PDFViewer>{children}</PDFViewer>
        </div>
    </div>
    );
}
