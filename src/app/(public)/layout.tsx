import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}