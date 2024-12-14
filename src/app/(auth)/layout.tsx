import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <div className={`${inter.variable} font-inter`}>
                {children}
            </div>
        </AuthProvider>
    );
}