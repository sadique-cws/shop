import React from 'react'
import { ProductTable } from './_components/product-table'
import { columns } from './columns'
import Link from 'next/link'
import { db } from '@/lib/db'

const page = async () => {
  const products = await db.product.findMany({
    include:{category:true}
  });
  console.log(products);
  return (
    <div>
        <div className="flex my-3 justify-between items-center">
          <h2 className="text-xl font-semibold">All Product ({products.length})</h2>

          <Link href="/admin/product/insert" className='bg-green-600 text-white px-3 py-2 rounded-sm hover:bg-green-800'>Add Product</Link>
        </div>

        <ProductTable columns={columns} data={products}/>
    </div>
  )
}

export default page