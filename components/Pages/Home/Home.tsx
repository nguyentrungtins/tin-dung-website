import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import FilterPanel from "../../FilterPanel/FilterPanel";
import PanigationBar from "../../Products/PanigationBar";
import ProductList from "../../Products/ProductList";
import _Header from "./Header";
import { Product, productInterface } from "../../../types";

import { NextPage } from "next";
const HomePage: NextPage<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="px-1 pt-0 sm:px-[10%] sm:pt-[40px]">
      <Breadcrumb />
      <_Header />
      <FilterPanel />
      <ProductList products={products} />
      <PanigationBar />
    </div>
  );
};

export default HomePage;
