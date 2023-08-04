import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ClickOutsideHandler from "./ClickOutsideHandler";

function RootLayout({ children, showSidebarAndHeader = true }) {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className="flex">
      {showSidebarAndHeader && (
        <ClickOutsideHandler setIsOpen={setOpenSidebar}>
          <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </ClickOutsideHandler>
      )}
      <div className="flex-1">
        {showSidebarAndHeader && (
          <ClickOutsideHandler setIsOpen={setOpenSidebar}>
            <Header
              hasNotification={true}
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
          </ClickOutsideHandler>
        )}
        <main className="flex-grow p-4">{children}</main>
      </div>
    </div>
  );
}

export default RootLayout;
