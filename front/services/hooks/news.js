
import useSWR from "swr";
import { getNews, getNewsById } from "@/services/api/news";

export const useGetNews = () => {
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/news`,
        getNews
    );
    return { data, isLoading, error };
};

export const useGetNewsById = (id) => {
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/news/${id}`,
        getNewsById
    );
    return { data, isLoading, error };
};