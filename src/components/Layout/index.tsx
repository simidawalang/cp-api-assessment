import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
      <div className="layout-content">
        <Sidebar />
        <div className="main-body">
          <Header />
          <main className="main-content">{children}</main>
        </div>
      </div>
  );
};

export default Layout;
