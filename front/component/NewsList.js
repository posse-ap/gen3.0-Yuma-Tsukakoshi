'use client';

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from 'next/image';

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
                            width={270}
                            height={150}
                        />
                    </CardBody>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h2 className="font-bold text-large">{news.title}</h2>
                        <p className="text-tiny uppercase font-bold">{news.text}</p>
                    </CardHeader>
                </Card>
            ))}
        </>
    );
};

export default NewsList;
