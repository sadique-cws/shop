"use client"
import { cn } from '@/lib/utils'
import { Compass, IndianRupee, Layout, ShoppingBasket, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const adminRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/admin",
    },
    {
        icon: Compass,
        label: "Manage Categories",
        href: "/admin/category",
    },
    {
        icon: ShoppingBasket,
        label: "Manage Products",
        href: "/admin/product",
    },
    {
        icon: IndianRupee,
        label: "Manage Orders",
        href: "/admin/order",
    },
    {
        icon: Users,
        label: "Manage Users",
        href: "/admin/user",
    }
]


const SidebarRoutes = () => {

    const pathname = usePathname();

    return (
        <div className='flex flex-col'>
            {adminRoutes.map((route, index) => {
                const isSelected = pathname === route.href;
                const Icon = route.icon;
                return (
                    <Link key={index} href={route.href} className={cn("text-slate-800 py-3 px-5 w-full flex items-center", isSelected && "bg-slate-200")}> 
                    <Icon className='h-6 w-6 mr-2'/>
                    {route.label}
                    </Link>);
            })}
        </div>
    )
}

export default SidebarRoutes