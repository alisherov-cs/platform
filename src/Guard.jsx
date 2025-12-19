import { Navigate, Outlet } from "react-router-dom";
import { useAuthMe } from "./api/me";

export const AuthGuard = () => {
  const { data: me, isLoading } = useAuthMe();

  if (isLoading) return "loading...";

  if (!isLoading && !me?.data) return <Navigate to="/auth/login" />;

  return <Outlet />;
};
