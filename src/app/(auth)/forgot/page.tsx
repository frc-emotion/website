"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";

type formData = {
    email: string;
};

// async function submitForm(
// 	e: FormEvent<HTMLFormElement>,
// 	formData: formData,
// 	router: AppRouterInstance
// ) {
// 	e.preventDefault();
// 	console.log("preparing password reset");
// 	try {
// 		const response = await fetch(
// 			"https://api.team2658.org/v2/users/login",
// 			{
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify(formData),
// 			}
// 		);

// 		const json = await response.json();

// 		// user accountLevel instead of isVerified/isAdmin
// 		// 0 - unverified, 1 - base, 2 - lead, 3 - admin
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

export default function Forgot() {
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
                            Forgot Password
                        </h1>
                        <p className="text-center font-normal mt-3 mb-2 text-gray-500">
                            If the email provided matches an existing account,
                            <br />
                            we will email you a link to reset your password.
                        </p>
                        <form
                            className="mt-3"
                            onSubmit={(e) => {
                                // submitForm(
                                //     e,
                                //     {
                                //         email: email,
                                //     },
                                //     router
                                // );
                            }}
                        >
                            <div className="grid grid-cols-1">
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

                                <div className="mt-10 flex items-center justify-center">
                                    <button
                                        type="submit"
                                        className="w-[50%] rounded bg-neutral-800 py-2 font-bold text-white hover:bg-neutral-900"
                                    >
                                        Request reset
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
