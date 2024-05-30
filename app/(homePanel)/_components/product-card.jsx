import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { formatPrice } from '@/lib/format'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ title,slug, image,brand, price, discount_price,category }) => {
  return (
    <Link href={`/${category.slug}/${slug}`}>
      <Card>
      <Image width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: '250px',objectFit:"contain", }} src={image} />
      <CardContent className="mt-3">
        <CardTitle className="text-md text-slate-600 font-semibold capitalize line-clamp-2" title={title}>{title}</CardTitle>
        <h6>{brand}</h6>
        <h2>{formatPrice(discount_price)} <del>{formatPrice(price)}</del></h2>
      </CardContent> 
    </Card>
    </Link>
  )
}

export default ProductCard