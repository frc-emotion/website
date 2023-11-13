"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Link from "next/link";
import { User } from "@/app/(auth)/login/page";

type formData = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    password2: string | undefined;
    subteam: string;
};

async function submitForm(
    e: FormEvent<HTMLFormElement>,
    formData: formData,
    router: AppRouterInstance
) {
    e.preventDefault();
    if (formData.password !== formData.password2) {
        alert("Passwords don't match");
        return;
    }
    // This should be validating itself client-side. Uncomment if we have issues in the future.
    // if (formData.subteam == "") {
    //     alert("Please select a Subteam");
    //     return;
    // }
    console.log("registering user");
    try {
        const response = await fetch(
            "https://api.team2658.org/v2/users/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        const json = await response.json();

        if (response.status == 200 || response.status == 201) {
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
            router.push("/");
        } else {
            if (response.status != 200 && response.status != 201) {
                alert(`${response.status} Error: ${json.message}`);
            } else {
                alert("Uncaught error. See stack trace.");
            }
        }
    } catch (e) {
        console.error(e);
    }
}

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subteam, setSubteam] = useState("");
    // TODO: use state for error message instead of alert
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
                                submitForm(
                                    e,
                                    {
                                        firstname: firstName,
                                        lastname: lastName,
                                        email: email,
                                        phone: phone,
                                        username: username,
                                        password: password,
                                        password2: password2,
                                        subteam: subteam,
                                    },
                                    router
                                );
                            }}
                        >
                            <div className="grid grid-cols-1">
                                <div className="grid grid-cols-2 space-x-5 w-full">
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
                                            htmlFor="lastName"
                                            className="text-gray-700"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            placeholder=""
                                            value={lastName}
                                            onChange={(e) => {
                                                setLastName(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 space-x-5 w-full">
                                    <div className="p-1.5">
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
                                    <div className="p-1.5">
                                        <label
                                            htmlFor="subteam"
                                            className="text-gray-700"
                                        >
                                            Subteam
                                        </label>
                                        <select
                                            required
                                            id="subteamSelect"
                                            name="subteam"
                                            onChange={(e) => {
                                                setSubteam(e.target.value);
                                            }}
                                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        >
                                            <option value=""></option>
                                            <option value="build">Build</option>
                                            <option value="design">
                                                Design
                                            </option>
                                            <option value="electrical">
                                                Electrical
                                            </option>
                                            <option value="software">
                                                Software
                                            </option>
                                            <option value="marketing">
                                                Marketing
                                            </option>
                                            <option value="executive">
                                                Executive
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 space-x-5 w-full">
                                    <div className="p-1.5">
                                        <label
                                            htmlFor="username"
                                            className="text-gray-700"
                                        >
                                            Username
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="username"
                                            name="username"
                                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            placeholder=""
                                            value={username}
                                            onChange={(e) => {
                                                setUsername(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="p-1.5">
                                        <label
                                            htmlFor="phone"
                                            className="text-gray-700"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            pattern="[0-9]{10}"
                                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            placeholder=""
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                            }}
                                        />
                                    </div>
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
