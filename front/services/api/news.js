import axios from "@/lib/axios";

export const getNews = async (url) => {
    try{
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
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