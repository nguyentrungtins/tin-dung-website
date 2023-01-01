import ProductItem from "./ProductItem";
const ProductList = ({ products }) => {
  // console.log("from ProductList", products);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.map((item, index) => {
            return <ProductItem key={index} products={products}></ProductItem>;
          })}
      </div>
    </div>
  );
};
export default ProductList;
