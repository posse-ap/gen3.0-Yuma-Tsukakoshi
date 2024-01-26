import axios from "@/lib/axios";

export const getNews = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/news`, 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const news = await response.json();

        return news;

    } catch (e) {
        console.error(e);
    }
}

export const getNewsById = async (url) => {
    try{
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}