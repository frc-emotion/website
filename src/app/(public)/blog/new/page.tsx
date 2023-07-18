import { cookies } from "next/dist/client/components/headers"
import PostForm from "./PostForm";
import './index.css'
import { User } from "@/app/(auth)/login/page";

export default function Blog() {
    const cookieJar = cookies();
    const auth = cookieJar.get("auth")?.value === "true";
    const userCookie = cookieJar.get("user")?.value;
	const user = userCookie ? (JSON.parse(userCookie) as User) : null;
    return <main className="flex flex-col">
        <h1 className="text-r4xl font-bold text-center font-sans">Make a New Post</h1>
        {auth ? <PostForm author={user?.firstname + " " + user?.lastname} token={String(user?.token)}/> : <h2 className="font-bold text-center text-rxl">You are not authorized to make a new post.</h2>}
    </main>
}