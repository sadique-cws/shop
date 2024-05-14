import AdminNavbar from "./admin/_components/admin-navbar";

export default function AdminLayout({children}){
    return (
        <div>
            <AdminNavbar/>
            {children}
        </div>
    )
}