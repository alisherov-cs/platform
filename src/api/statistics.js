import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "./axios";

export const useGetStatistics = () => {
  return useQuery({
    queryKey: ["/statistic/1"],
    queryFn: async () => {
      return (await axiosPrivate.get("/statistic/1")).data;
    },
  });
};

export const useUpdateStatistics = () => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosPrivate.patch("/statistic/1", data);
    },
  });
};
