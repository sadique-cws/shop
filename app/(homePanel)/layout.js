import HomeNavbar from "./_components/home-navbar";

export default function HomeLayout({children}) {
    return (
        <div>
            <HomeNavbar/>
            {children}
        </div>
    )
}