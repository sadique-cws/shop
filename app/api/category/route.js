import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req){
    let {title, description} = await req.json();

    try{
        let category =  await  db.Category.create({
            data: {
                title,
                slug: slugify(title),
                description
            }
        });
    
        if(category){
            return NextResponse.json(category);
        }
    }
    catch(error){
        console.log("INSERT category" + error.message);
        return new NextResponse("internal error", {status:500});
    }
}