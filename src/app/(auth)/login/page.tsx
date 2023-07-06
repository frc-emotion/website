"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";

type formData = {
	username: string;
	password: string;
};

async function submitForm(e: FormEvent<HTMLFormElement>, formData: formData) {
	e.preventDefault();
	console.log("logging in");
	try {
		const response = await fetch("https://api.team2658.org/v1/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		const json = await response.json();

		if (response.status === 200) {
			alert(`Succesfully logged in as ${json.username}!`)
		} else {
			alert(`Error ${response.status}: ${json.message}`);
		}
	} catch (error) {
		console.error(error);
	}
}

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

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
							Log in
						</h1>
						<form
							className="mt-3"
							onSubmit={(e) => {
								submitForm(e, {
									username: username,
									password: password,
								});
							}}
						>
							<div className="grid grid-cols-1">
								<label className="block p-1.5">
									<span className="text-gray-700">
										Username
									</span>
									<input
										type="text"
										id="usernameInput"
										className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										placeholder=""
										value={username}
										onChange={(e) => {
											setUsername(e.target.value);
										}}
									/>
								</label>
								<label className="block p-1.5">
									<span className="text-gray-700">
										Password
									</span>
									<input
										type="password"
										id="passwordInput"
										className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										placeholder=""
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
								</label>
								<div className="mt-3 flex items-center justify-center">
									<button
										type="submit"
										className="w-[50%] rounded bg-neutral-800 py-2 font-bold text-white hover:bg-neutral-900"
									>
										Login
									</button>
								</div>
							</div>
						</form>
						<div className="mt-3 flex flex-col items-center justify-center lg:flex-row lg:space-x-10 -lg:space-y-2">
							<a
								href="#"
								className="text-gray-500 hover:text-gray-700"
							>
								Forgot password?
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-gray-700"
							>
								Create account
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
