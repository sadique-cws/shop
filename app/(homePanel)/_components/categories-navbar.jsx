import Link from "next/link";
import { FaBagShopping,FaPhone } from "react-icons/fa6";

const CategoriesNavbar = () => {

  const items = [
    {
      id: 1,
      name: "Furniture",
      Icon: FaBagShopping,
    },
    {
      id: 2,
      name: "Electronics",
      Icon: FaPhone,
    }
  ]
  return (
    <div className='h-auto flex-1 flex justify-center items-center p-4'>

      {items.map((cat, i) => (
      <Link  href="" className="flex flex-col gap-y-2 items-center p-3">
          <cat.Icon className="w-10 h-10 text-sky-600" />
          <h5>{cat.name}</h5>
        </Link>))}

    </div>
  )
}

export default CategoriesNavbar