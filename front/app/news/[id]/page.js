"use client";
import { useGetNewsById } from "@/services/hooks/news";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

export default function Page({params}) {
    const id = params.id;
    let news = useGetNewsById(id);
    news = news[0];

    return (
        <Card className="py-4">
            <CardBody className="py-2">
                <img
                    alt="Card background"
                    className="overflow-hidden bg-no-repeat bg-cover w-full"
                    height={1080}
                    width={1920}
                    src={news?.thumbnail_url}
                />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h1 className="font-bold text-xl">{news?.title}</h1>
                <p className="text-tiny uppercase font-bold">{news?.text}</p>
            </CardHeader>
        </Card>
    )
}