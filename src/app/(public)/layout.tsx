import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { cookies } from "next/dist/client/components/headers";
import { User } from "../(auth)/login/page";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieJar = cookies();
    const auth = cookieJar.get("auth");
    const userCookie = cookieJar.get("user")?.value;
    const user = userCookie ? (JSON.parse(userCookie) as User) : null;
    return (
        <>
            <Navbar auth={auth?.value === "true"} user={user} />
            {children}
            <Footer />
        </>
    );
}
