'use client';

import Image from "next/image";

export default function Login() {
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
						<form className="mt-3">
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
									/>
								</label>
								<div className="mt-3 flex items-center justify-center">
									<button
										type="submit"
										className="w-[50%] rounded bg-neutral-800 py-2 font-bold text-white hover:bg-neutral-900"
										onClick={(e) => {
											e.preventDefault();
											
										}}
									>
										Login
									</button>
								</div>
							</div>
						</form>
						<div className="mt-3 flex lg:flex-row flex-col lg:space-x-10 -lg:space-y-2 items-center justify-center">
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
