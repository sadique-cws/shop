import ProductSection from "@/app/(homePanel)/_components/product-section";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { db } from "@/lib/db";
import { formatPrice } from "@/lib/format";
import Image from "next/image";

const page = async ({ params }) => {
    const { productSlug, categorySlug } = params;

    const product = await db.product.findUnique({
        where: {
            slug: productSlug
        },
        include: {
            category: true
        }
    })
    return (
        <div className="flex flex-1 px-[10%] gap-10 flex-col py-10 ">
           <div className="flex gap-10">
           <div className="w-3/12">
                <Image width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', objectFit: "cover", }} src={product.image} />
            </div>
            <div className="w-9/12">
                <div className="flex flex-col gap-3">
                <h3>
                        <span className="text-slate-500">{product.category.title}</span>
                    </h3>
                    <h1 className="text-xl font-semibold text-slate-800">{product.title}</h1>
                    <p className="text-green-600 font-medium">Special Price</p>
                    <div className="flex gap-3 items-end">
                        <h2 className="text-4xl font-bold">{formatPrice(product.discount_price)}</h2>
                        <h5 className="text-slate-600 text-lg"><del>{formatPrice(product.price)}</del></h5>
                        <span className="text-green-600 text-xl">{ Math.ceil((product.price - product.discount_price) / product.price  * 100) }% Off</span>
                    </div>

                    <h3>
                        <span className="text-slate-500">Brand: </span>
                        <span className="text-slate-900 font-semibold">{product.brand}</span>
                    </h3>
                    
                </div>
            </div>
           </div>

            <div className="flex flex-1">
                <Card>
                    <CardContent>
                    <div className="text-slate-600 font-semibold my-2">Description</div>
                        <CardDescription>
                            {product.description}
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>

            <ProductSection gridno={4}/>
        </div>
    )
}

export default page