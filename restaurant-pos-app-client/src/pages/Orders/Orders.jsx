import Header from "../../components/Layout/Header"
import Sidebar from "../../components/Layout/Sidebar"

const Orders = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      {/* Right side content */}
      <div className="w-full overflow-hidden">
        <Header />
        <main className="flex-grow p-4">
          <h1>orders</h1>
        </main>
      </div>
    </div>
  )
}

export default Orders