import Link from "next/link";
import "./index.css";
import { cookies } from "next/dist/client/components/headers";

export default async function Blog() {
	const cookieJar = cookies();
	const auth = cookieJar.get("auth")?.value === "true";
	return (
		<main>
			{!auth ? (
				<></>
			) : (
				<div className="text-center">
					<Link href="blog/new" className="text-center text-rxl underline">
						New Post
					</Link>
				</div>
			)}
		</main>
	);
}
