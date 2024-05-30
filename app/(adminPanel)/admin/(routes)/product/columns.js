"use client"

export const columns = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "MRP",
    cell: (row) => {
      return "₹" + row.getValue("price");
    }
  },
  {
    accessorKey: "discount_price",
    header: "price",
    cell: (row) => {
      return "₹" + row.getValue("discount_price") + "/-";
    }
  },
  {
    accessorKey: "category.title",
    header: "category",
  },
]
