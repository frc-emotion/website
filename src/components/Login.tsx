'use client';

import Image from "next/image";
import { useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from '../context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await login({ email, password });
        setLoading(false);
    };

    return (
        <main className="h-screen bg-teamYellow-500">
            <div className="flex h-full w-full items-center justify-center">
                <div className="rounded-lg bg-white px-[100px] shadow-2xl -hlg:px-[15%]">
                    <div className="my-10">
                        <div className="relative mb-2 flex w-full flex-col items-center justify-center">
                            <Image
                                src="/icon.png"
                                alt="App Icon"
                                width={175}
                                height={175}
                            />
                        </div>
                        <h1 className="p-3 text-center text-6xl font-bold">
                            Log in
                        </h1>
                        <form
                            className="mt-3"
                            onSubmit={handleSubmit}
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
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="block p-1.5">
                                    <label
                                        htmlFor="password"
                                        className="text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mt-3 flex items-center justify-center">
                                    <button
                                        type="submit"
                                        className={`w-[50%] rounded bg-neutral-900 py-2 font-bold text-white hover:bg-neutral-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? 'Logging in...' : 'Login'}
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            {/* <Link href="/register" className="text-blue-500 hover:underline">
                                Don't have an account? Register on the app.
                            </Link> */}
                            Don't have an account? Register on the app.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}