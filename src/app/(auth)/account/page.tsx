'use client';

import AccountPage from "@/components/AccountPage";
import useAuth from "@/hooks/useAuth";

export default function AccountPageRoute() {
    useAuth(true); // Protect this page

    return <AccountPage />;
}