import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const useAuth = (required: boolean = true) => {
    const { user, loading, logout } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (required && !loading && !user) {
            router.push('/login');
        }
    }, [user, loading, required, router]);

    return { user, loading, logout };
};

export default useAuth;