'use client';

import Login from "@/components/Login";
import useAuth from "@/hooks/useAuth";

export default function LoginPage() {
    useAuth(false);

    return <Login />;
}