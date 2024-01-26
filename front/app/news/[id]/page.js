"use client";
import { useGetNewsById } from "@/services/hooks/news";

export default function Page({params}) {
    const id = params.id;
    let news = useGetNewsById(id);
    news = news[0];

    return (
    <p>{news.title}</p>
    )
}