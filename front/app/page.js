'use client';

import { useGetNews } from "@/services/hooks/news";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from 'next/image';

export default function Home() {
  const data  = useGetNews();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">    
        {data?.map((news)=>{
        <Card className="py-4">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={news.thumbnail_url}
              width={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h2 className="font-bold text-large">{news.title}</h2>
            <p className="text-tiny uppercase font-bold">{news.text}</p>
          </CardHeader>
        </Card>
      })}
      </main>
    </div>
  );
}
