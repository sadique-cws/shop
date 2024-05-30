import Image from "next/image";
import CategoriesNavbar from "../_components/categories-navbar";
import BannerSection from "../_components/banner-section";
import ProductSection from "../_components/product-section";

export default function Home() {
  return (
   <>
    <CategoriesNavbar/>
    {/* <BannerSection/> */}
    <ProductSection gridno={5}/>
   </>
  );
}
