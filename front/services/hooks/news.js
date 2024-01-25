'use client';

import useSWR from "swr";
import { getNews, getNewsById } from "@/services/api/news";

export const useGetNews = () => {
    const data = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/news`,
        getNews
    );
    return data;
};

export const useGetNewsById = (id) => {
    const data = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/news/${id}`,
        getNewsById
    );
    return data ;
};