"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Reset() {
	const foo = new Array(9999).fill(0);
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [otp, setOtp] = useState("");
	const [show, setShow] = useState(false);

	return (
		<main className="py-16 px-4 items-center flex flex-col bg-teamYellow-500">
			<strong className="block text-5xl">
				DO NOT FORGET THIS PASSWORD. SAVE IT SOMEWHERE SAFE.
			</strong>
			<div className="w-fit my-16 p-8 bg-gray-200 rounded-lg">
				<div className="m-4 grid grid-cols-2">
					<label htmlFor="email" className="mx-4 font-bold">
						Email
					</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>

				<div className="m-4 grid-cols-2 grid">
					<label htmlFor="password" className="mx-4 font-bold">
						New Password
					</label>
					<div className="relative">
						<input
							type={show ? "text" : "password"}
							name="password"
							value={newPassword}
							onChange={(e) => {
								setNewPassword(e.target.value);
							}}
						/>
						<input
							onChange={(e) => {
								setShow(e.target.checked);
							}}
							type="checkbox"
							className="absolute z-10 right-4 top-[25%]"
						/>
					</div>
				</div>

				<div className="m-4 grid-cols-2 grid">
					<label htmlFor="code" className="mx-4 font-bold">
						Verification Code
					</label>
					<input
						type="text"
						name="code"
						value={otp}
						onChange={(e) => {
							setOtp(e.target.value);
						}}
					/>
				</div>

				<button
					className="m-4 p-4 bg-blue-300 rounded-md active:bg-blue-500"
					onClick={(e) => {
						e.preventDefault();
						fun(email, otp, newPassword).then((message) => {
							alert(message.message);
							if (message.status) {
								router.push("/login");
							}
						});
					}}
				>
					Reset Password
				</button>
			</div>
			{foo.map((_, i) => (
				<strong className="block m-4 text-5xl" key={i}>
					DO NOT FORGET YOUR NEW PASSWORD. SAVE IT SOMEWHERE SAFE.{" "}
				</strong>
			))}
		</main>
	);
}

const fun = async (
	email: string,
	otp: string,
	password: string
): Promise<{ message: string; status: boolean }> => {
	const res = await fetch(
		`https://api.team2658.org/v2/users/reset-password`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				code: otp,
				password,
			}),
			cache: "no-store",
			next: {
				revalidate: 0,
			},
		}
	);
	const json = await res.json();
	return {
		message: json.message,
		status: res.ok,
	};
};
