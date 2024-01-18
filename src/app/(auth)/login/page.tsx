"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";

type formData = {
	username: string;
	password: string;
};

export type User = {
	username: string;
	email: string;
	firstname: string;
	lastname: string;
	accountType: number;
	token: string;
};

async function submitForm(
	e: FormEvent<HTMLFormElement>,
	formData: formData,
	router: AppRouterInstance
) {
	e.preventDefault();
	console.log("logging in");
	try {
		const response = await fetch(
			"https://api.team2658.org/v2/users/login",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			}
		);

		const json = await response.json();

		// user accountLevel instead of isVerified/isAdmin
		// 0 - unverified, 1 - base, 2 - lead, 3 - admin

		if (response.status == 200) {
			localStorage.setItem("token", json.token);
			const user: User = {
				username: json.username,
				email: json.email,
				firstname: json.firstname,
				lastname: json.lastname,
				token: json.token,
				accountType: json.accountType,
			};
			localStorage.setItem("userObj", JSON.stringify(user));
			document.cookie = `auth=${user.accountType}`;
			document.cookie = `user=${JSON.stringify(user)}`;
			document.cookie = `token=${user.token}`;
			if (json.accountType == 0)
				alert("Please see a lead to have your account verified.");
			router.push("/");
		} else {
			if (response.status != 200) {
				alert(`${response.status} Error: ${json.message}`);
			} else {
				alert(`Uncaught error. See stack trace.`);
			}
			localStorage.removeItem("token");
			localStorage.removeItem("userObj");
			document.cookie = `auth=""`;
			document.cookie = `user=""`;
			document.cookie = 'token=""';
		}
	} catch (error) {
		console.error(error);
	}
}

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const [confirmDel, setConfirmDel] = useState(false);

	const dialogref = useRef<HTMLDialogElement>(null);

	const [thisUser, setThisUser] = useState<string | null>(null);
	useEffect(() => {
		const user = localStorage.getItem("userObj");
		if (user) {
			setThisUser(user);
		}
	}, [router]);

	if (thisUser)
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
								Logged In as {JSON.parse(thisUser).username}
							</h1>
							<div className="mt-3 flex items-center justify-center">
								<button
									onClick={() => {
										localStorage.removeItem("token");
										localStorage.removeItem("userObj");
										document.cookie = `auth=""`;
										document.cookie = `user=""`;
										document.cookie = 'token=""';
										router.push("/");
									}}
									className="w-[50%] rounded bg-neutral-800 py-2 font-bold text-white hover:bg-neutral-900"
								>
									Log Out
								</button>
								<Link
									href="/"
									className="w-[50%] rounded border-neutral-800 py-2 font-bold text-black hover:bg-neutral-900 text-center border-2 mx-4"
								>
									Go to Home Page
								</Link>
							</div>
							<div className="mt-3 items-center justify-center text-center">
								<p>
									To delete your account, click the link
									below. No user data will be kept after your
									account is deleted.
								</p>
								<br />
								<button
									onClick={() => {
										dialogref.current?.showModal();
									}}
									className="rounded-md bg-red-600 p-2 font-bold text-gray-900 hover:bg-red-900"
								>
									Delete Account
								</button>
							</div>
						</div>
					</div>
				</div>
				<dialog
					ref={dialogref}
					className={
						"p-16 flex flex-col bg-gray-800 text-white" +
						dialogref.current?.open
							? ""
							: " hidden"
					}
				>
					<h2 className="font-bold text-xl m-2">
						Are you sure you want to delete your account?
					</h2>
					<div className="flex flex-row align-bottom relative mt-8">
						<input
							type="checkbox"
							checked={confirmDel}
							onChange={(e) => {
								setConfirmDel(e.target.checked);
							}}
							className="h-fill mx-2 bottom-0"
						/>
						<h4 className="font-bold">Check this box to confirm</h4>
					</div>
					<button
						onClick={() => {
							if (!confirmDel) return;
							fetch("https://api.team2658.org/v2/users/me", {
								method: "DELETE",
								headers: {
									"Authorization":
										"Bearer " + JSON.parse(thisUser).token,
								},
							}).then(() => {
								localStorage.removeItem("token");
								localStorage.removeItem("userObj");
								document.cookie = `auth=""`;
								document.cookie = `user=""`;
								document.cookie = 'token=""';
								router.push("/");
							});
						}}
						className="rounded-md bg-red-600 p-2 font-bold text-white hover:bg-red-900 mt-8 mb-4 mx-8 px-4"
					>
						Yes
					</button>
					<button
						onClick={() => {
							dialogref.current?.close();
						}}
						className="rounded-md bg-gray-700 p-2 font-bold text-white hover:bg-gray-900 mb-16 px-4"
					>
						No
					</button>
				</dialog>
			</main>
		);

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
								submitForm(
									e,
									{
										username: username,
										password: password,
									},
									router
								);
							}}
						>
							<div className="grid grid-cols-1">
								<div className="block p-1.5">
									<label
										htmlFor="usernameInput"
										className="text-gray-700"
									>
										Username
									</label>
									<input
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
							<Link
								href="/forgot"
								className="text-gray-500 hover:text-gray-700"
							>
								Forgot password?
							</Link>
							<Link
								href="/register"
								className="text-gray-500 hover:text-gray-700"
							>
								Create account
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
