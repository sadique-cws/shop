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

const formSchema = z.object({
    title: z.string().min(2, {
        message: "cat title must be at least 2 characters.",
    }),
    description: z.string().min(1),
})

export function InsertCategory() {

    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            title: "",
            description: "",
        }
    })

    const {isSubmitting, isValid} = form.formState;

    const onSubmit = async (data) => {
        let category = await fetch(`/api/category`, {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        router.refresh();
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
                                <Input placeholder="enter category title" {...field} />
                            </FormControl>
                          
                            <FormMessage />
                        </FormItem>
                    )}
                />
               
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="enter category description" {...field} />
                            </FormControl>
                            <FormDescription>
                                description of category is optional 
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full"  disabled={!isValid || isSubmitting}>Submit</Button>
            </form>
        </Form>
    )
}
