'use client';

import React from "react";
import NewsList from "@/component/NewsList";
import { useGetNews } from "@/services/hooks/news";

export default function Home() {
  const News = useGetNews();
  console.log(News);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">    
        <NewsList News={News}/>
      </main>
    </div>
  );
}
