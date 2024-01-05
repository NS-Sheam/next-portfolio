"use client";
import { useQuery } from "@tanstack/react-query";

const localUrl = "http://localhost:3000"
const hostingUrl = process.env.NEXT_PUBLIC_HOSTING_URL;

const useBlogsData = () => {
    const {
        refetch,
        data: blogs = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const res = await fetch(`${hostingUrl}/allblog`);
            return res.json();
        },
    });

    return { blogs, isLoading, error, refetch };
};

export default useBlogsData;