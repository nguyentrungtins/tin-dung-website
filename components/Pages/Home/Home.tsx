import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import FilterPanel from "../../FilterPanel/FilterPanel";
import PanigationBar from "../../Products/PanigationBar";
import ProductList from "../../Products/ProductList";
import _Header from "./Header";

interface Products {
  products: any;
}
const HomePage = () => {
  return (
    <div className="px-1 pt-0 sm:px-[10%] sm:pt-[40px]">
      <Breadcrumb />
      <_Header />
      <FilterPanel />
      <ProductList />
      <PanigationBar />
    </div>
  );
};

export default HomePage;
