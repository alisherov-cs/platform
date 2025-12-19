import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "./axios";

export const useAuthMe = () => {
  return useQuery({
    queryKey: ["/auth_me"],
    queryFn: async () => {
      return await axiosPrivate.get("/auth_me");
    },
    retry: false,
  });
};
