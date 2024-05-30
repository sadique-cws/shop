import { db } from "@/lib/db";
import Link from "next/link";

const CategoriesNavbar = async () => {

  const items = await db.category.findMany({});
  return (
    <div className='h-auto flex-1 flex justify-center items-center py-2 px-4 bg-sky-800'>

      {items.map((cat, i) => (
      <Link key={i}  href="" className="flex flex-col gap-y-2 items-center px-3 text-white">
          <h5>{cat.title}</h5>
        </Link>))}

    </div>
  )
}

export default CategoriesNavbar