import { Outlet, Navigate } from "react-router-dom";

// redux
import { useAppSelector } from "@/redux";
import { selectUserRole } from "@/redux/auth";

// types
import { RouteGuardProps } from "./RouteGuard.types";

const RouteGuard = ({ roles = [] }: RouteGuardProps) => {
  const userRole = useAppSelector(selectUserRole);

  if (roles.includes(userRole) || roles.length === 0) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export { RouteGuard };
