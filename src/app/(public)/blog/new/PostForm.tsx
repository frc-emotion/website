"use client";
import { useEffect, useState } from "react";
import "./index.css";
import { useRouter } from "next/navigation";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

async function submitForm({
	title,
	body,
	tagsStr,
	pub,
	author,
	token,
}: {
	title: string;
	body: string;
	tagsStr: string;
	pub: boolean;
	author: string;
	token: string;
}) {
	const tags = tagsStr ? tagsStr.split(",").map((tag) => tag.trim()) : [];
	const bod = JSON.stringify({
		title: title,
		author: author,
		date: Date.now(),
		body: body,
		tags: tags,
		public: String(pub),
	});

	const response = await fetch("https://api.team2658.org/v1/blog", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authentication": "Bearer " + token,
		},
		body: bod,
	});
	if (response.ok) {
		const json = await response.json();
		const id = json._id as string;
		return [0, id];
	}
	console.log(await response.text());
	console.log(bod);
	return [1, response.status];
}

export default function PostForm({
	author,
	token,
}: {
	author: string;
	token: string;
}) {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [tagsStr, setTagsStr] = useState("");
	const [pub, setPublic] = useState(false);
	const router = useRouter();
	const [Preview, setPreview] = useState(<></>);

	useEffect(() => {
		RenderMDX(body).then((res) => setPreview(res));
	}, [body]);

	return (
		<div className="xl:grid grid-cols-2">
			<form
				className="flex flex-col mx-32"
				onSubmit={(e) => {
					e.preventDefault();
					submitForm({
						title: title,
						body: body,
						tagsStr: tagsStr,
						pub: pub,
						author: author,
						token: token,
					}).then((res) => {
						if (res[0] === 0) {
							alert(
								`Post submitted successfully!\nPost URL:\n https://team2658.org/blog/${res[1]}`
							);
							router.push("/blog/" + res[1]);
						} else {
							alert(
								"Error submitting post. Status code: " + res[1]
							);
						}
					});
				}}
			>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<label htmlFor="tags">Tags (separate with commas)</label>
				<input
					type="text"
					name="tags"
					id="tags"
					value={tagsStr}
					onChange={(e) => setTagsStr(e.target.value)}
				/>
				<label htmlFor="body">Post Body (MDX Markdown)</label>
				<textarea
					name="body"
					id="body"
					value={body}
					onChange={(e) => setBody(e.target.value)}
					required
				/>
				<div className="flex-row flex items-center">
					<label htmlFor="public" className="my-0 mx-2 h-min">
						Public
					</label>
					<input
						type="checkbox"
						name="public"
						id="public"
						className="my-0 mx-2"
						checked={pub}
						onChange={(e) => setPublic(e.target.checked)}
					/>
				</div>
				<button type="submit" className="btn w-fit">
					Submit
				</button>
			</form>
			<div className="min-h-[80vh]">
				<h1 className="text-center text-r3xl font-bold">
					Markdown Preview
				</h1>
				<div className="mx-8 my-8 p-8 rounded-xl bg-neutral-900 overflow-scroll min-h-[90%]">
					{Preview}
				</div>
			</div>
		</div>
	);
}

async function RenderMDX(source: string) {
	const serialized = await serialize(source, {
		mdxOptions: {
			development: process.env.NODE_ENV === "development",
		},
	});
	return <MDXRemote {...serialized} />;
}
