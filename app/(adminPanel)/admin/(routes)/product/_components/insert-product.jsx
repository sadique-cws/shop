"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"
import { Combobox } from "@/components/ui/combobox"
import FileUpload from "@/components/file-upload"

const formSchema = z.object({
    title: z.string().min(2),
    price: z.string().min(2),
    discount_price: z.string().min(2),
    categoryId: z.string().min(2),
    description: z.string().min(1),
    brand: z.string().min(1),
    image: z.string().min(1),
})

export function InsertProduct({categoryData}) {

    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            title: "",
            price: 0,
            discount_price: 0,
            categoryId: "",
            brand: "",
            image: null,
            description: "",
        }
    })

    const {isSubmitting, isValid} = form.formState;

    const onSubmit = async (data) => {
        const newProduct = await fetch(`/api/products`, {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        router.push("/admin/product");
    }

    

    return (
        <Form {...form}>
           
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 border p-3">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="enter title" {...field} />
                            </FormControl>
                          
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 
                 <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>price</FormLabel>
                            <FormControl>
                                <Input placeholder="enter price" {...field} />
                            </FormControl>
                          
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="discount_price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>discount_price</FormLabel>
                            <FormControl>
                                <Input placeholder="enter discount_price" {...field} />
                            </FormControl>
                          
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>brand</FormLabel>
                            <FormControl>
                                <Input placeholder="enter brand" {...field} />
                            </FormControl>
                          
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Select Category</FormLabel>
                            <FormControl className="w-full">
                                <Combobox className="w-full" options={categoryData} disabled={isSubmitting} {...field} />
                            </FormControl>
                          
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex">
                    <div className="flex-1">
                    <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select Image</FormLabel>
                            <FormControl>
                                <FileUpload 
                                endPoint="productImage" 
                                onChange={(url) => {
                                    if(url){
                                        field.onChange(url)
                                    }
                                }}/>    
                             </FormControl>
                          
                            <FormMessage />
                        </FormItem>
                    )}
                />
                    </div>
                    <div className="flex-1">
                        {}
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="enter description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full"  disabled={!isValid || isSubmitting}>Add Product</Button>
            </form>
        </Form>
    )
}
