import axios from "@/axios"

export const getItems = async () => {
    try {
        const response = await axios.get("/items")
        console.log("response of get items", response);
        return response.data;
    } catch (error) {
        console.error("error in get items", error)
    }
}