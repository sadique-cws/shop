import { createUploadthing } from "uploadthing/next";
 
const f = createUploadthing();
 
 
export const ourFileRouter = {
  productImage: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(() => {})
}

