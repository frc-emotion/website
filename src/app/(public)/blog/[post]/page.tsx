import { MDXRemote } from "next-mdx-remote/rsc";
import "../index.css";
import { cookies } from "next/dist/client/components/headers";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

export const MDX_SOURCE_URL = "https://api.team2658.org/v1/blog";

export type BlogPost = {
	title: string;
	"_id": string; //mongoDB id
	author: string;
	date: number; //unix timestamp
	body: string;
	tags: string[];
	public: boolean;
};

type Props = {
	params: { post: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const post = params.post;

	// fetch data
	const response = await fetch(`${MDX_SOURCE_URL}/${post}`);

	if (response.ok) {
		const blogPost: BlogPost = await response.json();

		return {
			title: `${blogPost.title} | Team 2658 Blog`,
			keywords: blogPost.tags,
			publisher: blogPost.author,
		};
	}
	return {
		title: "Blog Post Not Found",
	};
}

async function getMDX(post: string, auth: boolean) {
	const response = await fetch(`${MDX_SOURCE_URL}/${post}`);
	if (response.ok) {
		const blogPost: BlogPost = await response.json();
		if (blogPost.public || auth) {
			return blogPost;
		}
		return {
			title: "UNAUTHORIZED",
			"_id": post,
			author: "UNAUTHORIZED",
			date: blogPost.date,
			body: `# This post is private. Please log in to view it.`,
			tags: [],
			public: false,
		};
	} else {
		return {
			title: `Error ${response.status}: ${response.statusText}`,
			"_id": post,
			author: "meow",
			date: Date.now(),
			body: `Error ${response.status}: ${response.statusText}`,
			tags: [],
			public: true,
		};
	}

	// return `${post}`;
}

export default async function BlogPost({
	params,
}: {
	params: { post: string };
}) {
	const auth = cookies().get("auth")?.value === "true";
	const source = await getMDX(params?.post, auth);
	return (
		<main>
			<h1 className="text-center text-r4xl font-bold">{source.title}</h1>
			<h2 className="text-center text-r2xl font-semibold">
				{source.author}
				{"\t"}
				<span className="opacity-75 text-rxl">
					{new Date(source.date).toLocaleString()}
				</span>
			</h2>
			{/* <h3 className="text-center text-rxl font-semibold opacity-60">{"# "}{source.tags.map((it) => `${it} `)}</h3> */}
			<div className="text-center text-rxl font-semibold opacity-60 ">
				<span>{"# "}</span>
				{ source?.tags?.length === 0 ? <span className="italic">No tags</span> : //if there are tags, map through and display links for each one, else display "No tags"
				source?.tags?.map((tag) => {
					return (
						<Link className="hover:underline" key={tag} href={`/blog/tag/${tag}`}>
							{tag}{" "}
						</Link>
					);
				})}
			</div>
			<article>
				<MDXRemote source={source.body} />
			</article>
		</main>
	);
}
