import { db } from "@/lib/db"
import { CategoryTable } from "./_components/category-table"
import { InsertCategory } from "./_components/insert-category"
import { columns } from "./columns"

const page = async () => {

  const categories = await db.category.findMany({});
  return (
    <div className="flex gap-5">
        <div className="w-2/5">
        <div className="flex">
              <h2 className="font-semibold py-2 text-xl">Insert Category here</h2>
            </div>
            <InsertCategory/>
        </div>
        <div className="w-3/5">
            <div className="flex">
              <h2 className="font-semibold py-2 text-xl">All Categories (3)</h2>
            </div>
            <CategoryTable columns={columns} data={categories}/>
        </div>
    </div>
  )
}

export default page