import type { Metadata } from "next";

import HeroProducts from "@/components/sections/HeroProducts";
import PriceList from "@/components/sections/PriceList";

export const metadata: Metadata = {
  title: "Productos | DuoDent Laboratorio",
  description: "Encuentre las prótesis y productos dentales en los que trabajamos"
}

const Products = () => {
  return (
    <main>
      <HeroProducts />
      <PriceList />
    </main>
  );
};

export default Products;
