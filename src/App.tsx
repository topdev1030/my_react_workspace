import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import {
  Home,
  News,
  Dashboard,
  CustomerReports,
  CustomerUploads,
  AdminReports,
  AdminUploads,
} from "@/pages";

// components
import { BaseLayout, RouteGuard } from "@/components";

// types
import { USER_ROLE } from "@/types";
import { AdminMessages } from "./pages/admin/messages";
import config from "./config";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/version" element={<div>{{config.api.mode}'v1'}</div>} /> */}
        <Route
          path="/version"
          element={<div>{`${config.api.mode} -v1.3`}</div>}
        />

        {/* Auth Pages */}
        <Route element={<BaseLayout />}>
          {/* Common */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Admin */}
          <Route element={<RouteGuard roles={[USER_ROLE.CUSTOMER]} />}>
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/uploads" element={<AdminUploads />} />
            <Route path="/admin/messages" element={<AdminMessages />} />
          </Route>

          {/* Customer */}
          <Route element={<RouteGuard roles={[USER_ROLE.CUSTOMER]} />}>
            <Route path="/news" element={<News />} />
            <Route path="/intel-hub/reports" element={<CustomerReports />} />
            <Route path="/intel-hub/uploads" element={<CustomerUploads />} />
          </Route>
        </Route>

        {/* Not Found Pages */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
