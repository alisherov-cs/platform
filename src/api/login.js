import { useMutation } from "@tanstack/react-query";
import { axiosPublic } from "./axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosPublic.post("/auth", data);
    },
  });
};
