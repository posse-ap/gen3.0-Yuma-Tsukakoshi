'use client';

import useSWR from "swr";
import { useEffect, useState, useCallback } from "react";
import { getNews, getNewsById } from "@/services/api/news";

export const useGetNews = () => {
    const [ News, setNews] = useState([]);
    const fetchNews = useCallback(async () => {
        const news = await getNews();
        setNews(news);
    }, []);

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);
    return News;
};

export const useGetNewsById = (id) => {
    const [ News, setNews] = useState([]);
    const fetchNews = useCallback(async () => {
        const news = await getNewsById(id);
        setNews(news);
    }, []);

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);
    return News;
};