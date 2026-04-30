import { getItems } from "@/api/getItems.api";
import { useQuery } from "@tanstack/react-query";

// Items
export const useItems = () => {
    return useQuery({
        queryKey: ["items"],
        queryFn: getItems,
    });
}
