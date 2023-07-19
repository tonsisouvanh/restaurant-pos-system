import Header from "./Header";
import Sidebar from "./Sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="flex-grow p-4">{children}</main>
      </div>
    </div>
  );
}

export default RootLayout;
