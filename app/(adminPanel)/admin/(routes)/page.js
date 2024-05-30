import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/db";
import { IndianRupee, ListChecks, Loader2, ShoppingBasket, Users } from "lucide-react";
import { any } from "zod";

const page = async () => {
    const categoryCount = await db.category.count();
    const productCount = await db.product.count();
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="grid grid-cols-4 mt-5 gap-3">
                <Card className="bg-yellow-600 text-white">
                    <CardContent className="flex items-center p-4 ">
                        <ShoppingBasket className="w-12 h-12 mr-3"/>
                        <div className="flex flex-col">
                        <CardTitle className="text-xl">{productCount}</CardTitle>
                        <CardDescription className="text-white">Total Products</CardDescription>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-pink-600 text-white">
                    <CardContent className="flex items-center p-4 ">
                        <ListChecks className="w-12 h-12 mr-3"/>
                        <div className="flex flex-col">
                        <CardTitle className="text-xl">{categoryCount}</CardTitle>
                        <CardDescription className="text-white">Total Categories</CardDescription>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-sky-600 text-white">
                    <CardContent className="flex items-center p-4 ">
                        <IndianRupee className="w-12 h-12 mr-3"/>
                        <div className="flex flex-col">
                        <CardTitle className="text-xl">40+</CardTitle>
                        <CardDescription className="text-white">Total Orders</CardDescription>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-green-600 text-white">
                    <CardContent className="flex items-center p-4 ">
                        <Users className="w-12 h-12 mr-3"/>
                        <div className="flex flex-col">
                        <CardTitle className="text-xl">40+</CardTitle>
                        <CardDescription className="text-white">Total Users</CardDescription>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default page;