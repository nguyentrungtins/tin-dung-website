import Image from "next/legacy/image";
// import img from "../../public/images/"
import { useState } from "react";
import { Product } from "../../types";

import { NextPage } from "next";
const myLoader = (url: string): string => {
  return url;
};

const ProductItem: NextPage<{ products: Product }> = ({ products }) => {
  const [img1, setImg1] = useState(false);
  const imgUrl: string = products.image[0];
  const priceAfterSale: number = (products.actualPrice * products.sale) / 100;
  console.log(imgUrl);
  const onMouseHandler = (type: boolean): void => {
    setImg1(type);
  };
  return (
    <div className="flex font-cond tracking-wide flex-col relative mr-[5px] mb-[5px] min-h-[400px] hover:border-solid hover:border-2 hover:border-black">
      <div
        className="relative h-full"
        onMouseEnter={onMouseHandler.bind(null, true)}
        onMouseLeave={onMouseHandler.bind(null, false)}
      >
        <Image
          className={img1 ? "opacity-100" : "opacity-0"}
          loader={myLoader.bind(null, imgUrl)}
          src={"me.png"}
          layout="fill"
          priority={true}
          alt="logo"
          objectFit="cover"
          objectPosition="center bottom"
        />
        <Image
          className={img1 ? "opacity-0" : "opacity-100"}
          loader={myLoader.bind(null, imgUrl)}
          src={"me.png"}
          layout="fill"
          priority={true}
          alt="logo"
          objectFit="cover"
          objectPosition="center bottom"
        />

        <span className="absolute z-50 bottom-0 font-roboto left-2.5 bg-white px-2.5 pt-[3px] text-sm lg:text-base">
          <span className="line-through text-light">
            {products.originalPrice}
          </span>
          <span className="ml-1 text-red">{priceAfterSale}</span>
        </span>
      </div>
      <div className="text-sm px-2.5 pt-2.5 pb-5 lg:text-base">
        <p className="">{products.name}</p>
        <p className="text-light">{products.typename}</p>
        <p className="text-light">
          <span>3 Color</span>
          <span className="text-black"> · </span>
          <span className="text-black">best seller</span>
        </p>
      </div>
    </div>
  );
};
export default ProductItem;
