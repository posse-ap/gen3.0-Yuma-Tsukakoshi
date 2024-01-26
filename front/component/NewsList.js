'use client';

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const NewsList = ({News}) => {
    return (
        <>
            {News?.map((news) => (
                <Card className="py-4">
                    <CardBody className="overflow-visible py-2">
                        <img
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={news.thumbnail_url}
                        />
                    </CardBody>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h1 className="font-bold text-xl">{news.title}</h1>
                        <p className="text-tiny uppercase font-bold">{news.text}</p>
                    </CardHeader>
                </Card>
            ))}
        </>
    );
};

export default NewsList;
