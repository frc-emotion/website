'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import accountApi from "@/utils/accountApi";

export default function AccountPage() {
    const { user: authUser, loading, logout } = useAuth();
    const [confirmDel, setConfirmDel] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(false);

    const handleDelete = async () => {
        if (!confirmDel || !authUser) return;
        setLoadingDelete(true);
        try {
            const response = await accountApi.delete('/delete');
            const data = response.data;
            alert(data.message || 'Account deleted successfully.');
            if (response.status === 200) {
                logout();
            }
        } catch (error: any) {
            console.error('Delete Account Error:', error);
            alert(
                error.response?.data?.error ||
                'An error occurred while deleting your account.'
            );
        } finally {
            setLoadingDelete(false);
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };
        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    if (!authUser) {
        return null;
    }

    return (
        <main className="min-h-screen bg-teamYellow-500 flex items-center justify-center p-4">
            <div className="rounded-lg bg-white px-8 py-12 shadow-2xl max-w-md w-full">
                <div className="flex flex-col items-center">
                    <Image
                        src="/icon.png"
                        alt="App Icon"
                        width={175}
                        height={175}
                        className="mb-6"
                    />
                    <h1 className="text-3xl font-bold text-center mb-4">
                        Logged In as {authUser.first_name} {authUser.last_name}
                    </h1>
                    <div className="flex w-full mt-4 space-x-4">
                        <button
                            onClick={logout}
                            className="flex-1 bg-neutral-800 text-white font-semibold py-2 px-4 rounded hover:bg-neutral-900 transition-colors"
                        >
                            Log Out
                        </button>
                        <Link
                            href="/"
                            className="flex-1 border border-neutral-800 text-black font-semibold py-2 px-4 rounded hover:bg-neutral-800 hover:text-white transition-colors text-center"
                        >
                            Home
                        </Link>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="mb-4">
                            To delete your account, click the button below. No user data will be kept after your account is deleted.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition-colors"
                        >
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setIsModalOpen(false);
                        }
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    {/* Modal Content */}
                    <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative">
                        <h2 id="modal-title" className="text-xl font-bold mb-4 text-gray-800 text-center">
                            Confirm Account Deletion
                        </h2>
                        <p id="modal-description" className="mb-6 text-center text-gray-600">
                            Are you sure you want to delete your account? This action cannot be undone.
                        </p>
                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                checked={confirmDel}
                                onChange={(e) => setConfirmDel(e.target.checked)}
                                id="confirmDelete"
                                className="h-4 w-4 ml-2 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                            />
                            <label htmlFor="confirmDelete" className="ml-2 text-gray-700 flex-1">
                                I understand that this action is irreversible.
                            </label>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleDelete}
                                className={`bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition-colors ${!confirmDel || loadingDelete ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!confirmDel || loadingDelete}
                            >
                                {loadingDelete ? 'Deleting...' : 'Yes, Delete'}
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}