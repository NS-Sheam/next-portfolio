"use client"
import { useQuery } from '@tanstack/react-query';
const localUrl = "http://localhost:3000"
// const hostingUrl = import.meta.env.HOSTING_URL
const hostingUrl = "https://my-portfolio-server-rho-three.vercel.app"
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