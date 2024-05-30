import { db } from '@/lib/db'
import { InsertProduct } from '../_components/insert-product'

const page = async () => {
  const categories = await db.category.findMany({
    orderBy:{
      title : "asc"
    }
  })
  return (
    <div> 
      <InsertProduct categoryData={categories.map(category => ({
        label:category.title,
        value:category.id
      }))}/>
    </div>
  )
}

export default page