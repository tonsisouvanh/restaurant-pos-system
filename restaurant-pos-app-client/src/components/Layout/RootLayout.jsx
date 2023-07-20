import Header from "./Header";
import Sidebar from "./Sidebar";

function RootLayout({ children, showSidebarAndHeader = true }) {
  return (
    <div className="flex">
      {showSidebarAndHeader && <Sidebar /> }
      <div className="flex-1">
        {showSidebarAndHeader && <Header /> }
        <main className="flex-grow p-4">{children}</main>
      </div>
    </div>
  );
}

export default RootLayout;
