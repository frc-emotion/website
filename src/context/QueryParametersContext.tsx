"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface QueryParamsContextProps {
    queryParams: Record<string, string | null>;
}

const QueryParamsContext = createContext<QueryParamsContextProps | undefined>(
    undefined
);

export const QueryParamsProvider = ({ children }: { children: React.ReactNode }) => {
    const searchParams = useSearchParams();
    const [queryParams, setQueryParams] = useState<Record<string, string | null>>({});

    useEffect(() => {
        const params: Record<string, string | null> = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        setQueryParams(params);
        console.log("QueryParamsProvider rendered with params:", params);
    }, [searchParams]);

    return (
        <QueryParamsContext.Provider value={{ queryParams }}>
            {children}
        </QueryParamsContext.Provider>
    );
};

export const useQueryParams = () => {
    const context = useContext(QueryParamsContext);
    if (!context) {
        throw new Error("useQueryParams must be used within a QueryParamsProvider");
    }
    return context.queryParams;
};
