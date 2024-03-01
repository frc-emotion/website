// "use client";

import { redirect } from "next/navigation";

// import Image from "next/image";
// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
// import Link from "next/link";

// export default function Forgot() {
// 	const [email, setEmail] = useState("");
// 	const router = useRouter();

// 	return (
// 		<main className="h-screen bg-teamYellow-500">
// 			<div className="flex h-full w-full items-center justify-center">
// 				<div className="rounded-lg bg-white px-[100px] shadow-2xl -hlg:px-[15%]">
// 					<div className="my-10">
// 						<div className="relative mb-2 flex w-full flex-col items-center justify-center">
// 							<Image
// 								src="/icon.png"
// 								alt=""
// 								width={175}
// 								height={175}
// 							/>
// 						</div>
// 						<h1 className="p-3 text-center text-r6xl font-bold">
// 							Forgot Password
// 						</h1>
// 						<p className="text-center font-normal mt-3 mb-2 text-gray-500">
// 							You will be emailed a code to reset your password.
// 							SAVE IT SOMEWHERE SAFE SO YOU DO NOT FORGET IT.
// 						</p>
// 						<form
// 							className="mt-3"
// 							onSubmit={(e) => {
// 								e.preventDefault();
// 								foo(email).then((it) => {
// 									alert(it.message);
// 									if (it.status) {
// 										router.push("/reset-password");
// 									}
// 								});
// 							}}
// 						>
// 							<div className="grid grid-cols-1">
// 								<div className="block p-1.5">
// 									<label
// 										htmlFor="email"
// 										className="text-gray-700"
// 									>
// 										Email
// 									</label>
// 									<input
// 										required
// 										type="email"
// 										id="email"
// 										name="email"
// 										className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
// 										placeholder=""
// 										value={email}
// 										onChange={(e) => {
// 											setEmail(e.target.value);
// 										}}
// 									/>
// 								</div>

// 								<div className="mt-10 flex items-center justify-center">
// 									<button
// 										type="submit"
// 										className="w-[50%] rounded bg-neutral-800 py-2 font-bold text-white hover:bg-neutral-900"
// 									>
// 										Request reset
// 									</button>
// 								</div>
// 							</div>
// 						</form>
// 						<div className="mt-3 flex flex-col items-center justify-center lg:flex-row lg:space-x-10 -lg:space-y-2">
// 							<Link
// 								href="/login"
// 								className="text-gray-500 hover:text-gray-700"
// 							>
// 								Log In to Existing Account
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// 	);
// }

// async function foo(
// 	email: string
// ): Promise<{ message: string; status: boolean }> {
// 	const res = await fetch(
// 		"https://api.team2658.org/v2/users/forgot-password",
// 		{
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({ email }),
// 		}
// 	);
// 	const status = res.status;
// 	const json = await res.json();
// 	return { message: json.message, status: res.ok };
// }
export default async function Page() {
	redirect("https://api.team2658.org/pages/forgot-password");
}
