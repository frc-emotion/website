"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Link from "next/link";

type formData = {
	username: string;
	password: string;
};

// async function submitForm(
// 	e: FormEvent<HTMLFormElement>,
// 	formData: formData,
// 	router: AppRouterInstance
// ) {
// 	e.preventDefault();
// 	console.log("logging in");
// 	try {
// 		const response = await fetch(
// 			"https://api.team2658.org/v1/users/login",
// 			{
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify(formData),
// 			}
// 		);

// 		const json = await response.json();

// 		if (response.status === 200 && json && json.isVerified) {
// 			alert(`Succesfully logged in as ${json.username}!`);
// 			localStorage.setItem("token", json.token);
// 			document.cookie = `auth=${json.isVerified};admin=${json.isAdmin}`;
// 			router.back();
// 		} else {
// 			alert(
// 				`${
// 					response.ok
// 						? ""
// 						: `Error ${response.status}: ${response.statusText}\n`
// 				} ${json?.message ?? ""} ${
// 					json?.isVerified == false
// 						? "\nPlease get your account verified by a team lead or advisor"
// 						: ""
// 				}`
// 			);
// 			localStorage.removeItem("token");
// 			document.cookie = `auth=false;admin=false`;
// 		}
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

async function createAccount(
	Username: string,
	Password: string,
	FirstName: string,
	LastName: string,
	Email: string,
	router: AppRouterInstance
) {
	try {
		const request: RequestInit = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: Username,
				password: Password,
				firstname: FirstName,
				lastname: LastName,
				email: Email,
			}),
			redirect: "follow",
		};
		const response = await fetch(
			"https://api.team2658.org/v1/users/register",
			request
		);
		const txt = await response.text();
		if (response.status === 201) {
			alert(
				"Account created successfully!\nPlease see a lead to get your account verified."
			);
			router.push("/login");
		} else {
			alert(
				`Error ${response.status}: ${response.statusText}\n${
					txt.slice(
						12,
						txt.length - 2
					) /* Error message from server */
				}`
			);
		}
	} catch (e) {
		console.error(`COULD NOT CREATE ACCOUNT: ERROR ${e}`);
	}
}

export default function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const router = useRouter();

	return (
		<main className="h-screen bg-teamYellow-500">
			<div className="flex h-full w-full items-center justify-center">
				<div className="rounded-lg bg-white px-[100px] shadow-2xl -hlg:px-[15%]">
					<div className="my-10">
						<div className="relative mb-2 flex w-full flex-col items-center justify-center">
							<Image
								src="/icon.png"
								alt=""
								width={175}
								height={175}
							/>
						</div>
						<h1 className="p-3 text-center text-6xl font-bold">
							Create an Account
						</h1>
						<form
							className="mt-3"
							onSubmit={(e) => {
								if (password2 !== password) return;
								e.preventDefault();
								createAccount(
									username,
									password,
									firstName,
									lastName,
									email,
									router
								);
							}}
						>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 space-x-5 w-fit">
									<div className="p-1.5">
										<label
											htmlFor="firstName"
											className="text-gray-700"
										>
											First Name
										</label>
										<input
											required
											type="text"
											id="firstName"
											name="firstName"
											className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
											placeholder=""
											value={firstName}
											onChange={(e) => {
												setFirstName(e.target.value);
											}}
										/>
									</div>
									<div className="p-1.5">
										<label
											htmlFor="firstName"
											className="text-gray-700"
										>
											Last Name
										</label>
										<input
											required
											type="text"
											id="firstName"
											name="firstName"
											className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
											placeholder=""
											value={lastName}
											onChange={(e) => {
												setLastName(e.target.value);
											}}
										/>
									</div>
								</div>
								<div className="block p-1.5">
									<label
										htmlFor="email"
										className="text-gray-700"
									>
										Email
									</label>
									<input
										required
										type="email"
										id="email"
										name="email"
										className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										placeholder=""
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</div>
								<div className="block p-1.5">
									<label
										htmlFor="usernameInput"
										className="text-gray-700"
									>
										Username
									</label>
									<input
										required
										type="text"
										id="usernameInput"
										name="usernameInput"
										className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										placeholder=""
										value={username}
										onChange={(e) => {
											setUsername(e.target.value);
										}}
									/>
								</div>
								<div className="block p-1.5">
									<label
										htmlFor="passwordInput"
										className="text-gray-700"
									>
										Password
									</label>
									<input
										required
										type="password"
										id="passwordInput"
										name="passwordInput"
										className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										placeholder=""
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
								</div>
								<div className="block p-1.5">
									<label
										htmlFor="passwordInputRepeat"
										className="text-gray-700"
									>
										Repeat Password{" "}
										<span
											className={
												password &&
												password != password2
													? "text-red-400 text-sm"
													: "hidden"
											}
										>
											Passwords don't match
										</span>
									</label>
									<input
										required
										type="password"
										id="passwordInputRepeat"
										name="passwordInputRepeat"
										className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										placeholder=""
										value={password2}
										onChange={(e) => {
											setPassword2(e.target.value);
										}}
									/>
								</div>
								<div className="mt-3 flex items-center justify-center">
									<button
										type="submit"
										className="w-[50%] rounded bg-neutral-800 py-2 font-bold text-white hover:bg-neutral-900"
									>
										Register
									</button>
								</div>
							</div>
						</form>
						<div className="mt-3 flex flex-col items-center justify-center lg:flex-row lg:space-x-10 -lg:space-y-2">
							<Link
								href="/login"
								className="text-gray-500 hover:text-gray-700"
							>
								Log In to Existing Account
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
