import AdminNavbar from "./admin/_components/admin-navbar";
import Sidebar from "./admin/_components/sidebar";

export default function AdminLayout({ children }) {
    return (
        <div>
            <div className="md:hidden">
                <AdminNavbar />
            </div>
            <div className="hidden md:flex ">
                <div className="w-2/12">
                    <Sidebar />
                </div>
                <div className="w-10/12">
                    <AdminNavbar />
                    <div className="p-4">
                    {children}
                    </div>
                </div>
            </div>
        </div>
    )
}