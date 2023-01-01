import ProductItem from "./ProductItem";
import { Product } from "../../types";
import { NextPage } from "next";

const ProductList: NextPage<{ products: Product[] }> = ({ products }) => {
  // console.log("from ProductList", products);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.map((item: Product) => {
            return <ProductItem key={item.id} products={item}></ProductItem>;
          })}
      </div>
    </div>
  );
};
export default ProductList;
