import Image from "next/image";
import FilterIcon from "../../../../public/svgs/FilterIcon.svg";

const Header = () => {
  return (
    <div className="mt-3 px-3 sm:mt-[30px] sm:px-0">
      <div className="flex items-center">
        <h1 className="font-cond flex-1 text-[25px] font-medium italic md:text-[35px] lg:text-[40px]">
          MEN'S BEST SELLING PRODUCTS
        </h1>
        <span className="flex h-[50px] w-[50px] cursor-pointer items-center justify-evenly font-bold sm:hidden md:hidden">
          <Image
            src={FilterIcon}
            priority={true}
            alt="Human Icon"
            width={24}
            height={17.4}
          />
        </span>
      </div>
      <p className="font-mont mt-2.5 max-w-[800px] text-sm font-normal md:text-base lg:text-lg">
        Trendsetting comes easy when you're showing off your skills in popular
        adidas men's gear. Give everyone a front row seat to catch your
        effortless style in best-selling sneakers, apparel and accessories.
        Score up to 65% off thousands of styles with code* OCTOBER. Offer valid
        10/21-10/26 online on both full price and sale items, while supplies
        last. Exclusions apply.
      </p>
    </div>
  );
};
export default Header;
