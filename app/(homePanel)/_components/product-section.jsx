import React from 'react'
import ProductCard from './product-card'
import { db } from '@/lib/db'
import { cn } from '@/lib/utils'

const ProductSection = async ({gridno}) => {
  const products = await db.product.findMany({
    include:{category:true}
  })
  return (
    <div className={cn('grid gap-5 p-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-6', gridno && `xl:grid-cols-${gridno}`)}>
       {
        products.map((product,i) => (<ProductCard key={i} {...product}/>))
       }
        
       
    </div>
  )
}

export default ProductSection