import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { cookies } from "next/dist/client/components/headers";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    const cookieJar = cookies();
    const auth = cookieJar.get("auth");
    return (
        <>
            <Navbar auth={auth?.value==='true'} />
            {children}
            <Footer />
        </>
    )
}