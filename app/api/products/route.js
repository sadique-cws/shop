import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import slugify from "slugify";

export const POST = async (req) => {
    try{
        const data = await req.json();

        const product =await db.product.create({
            data:{...data, 
                price: +data.price, 
                discount_price: +data.discount_price,
                slug: slugify(data.title)
            }
        })

        if(product){
            return NextResponse.json(product);
        }
    }
    catch(error){
        console.log("PRODUCT INSERT ERROR: ", error.message);
        return new NextResponse("internal error", {status:500})
    }
}