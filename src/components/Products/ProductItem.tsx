import Image from "next/legacy/image";
// import img from "../../public/images/"
import { useState } from "react";
const myLoader = (url: string): string => {
  return url;
};

const ProductItem = () => {
  const [img1, setImg1] = useState(false);

  const onMouseHandler = (type: boolean): void => {
    setImg1(type);
  };
  return (
    <div className="flex flex-col relative mr-[5px] mb-[5px] min-h-[400px] hover:border-solid hover:border-2 hover:border-black">
      <div
        className="relative h-full"
        onMouseEnter={onMouseHandler.bind(null, true)}
        onMouseLeave={onMouseHandler.bind(null, false)}
      >
        <Image
          className={img1 ? "opacity-100" : "opacity-0"}
          loader={myLoader.bind(
            null,
            "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f7ad99968b04227a7b6ad1d017f07cd_9366/racer-tr21-shoes.jpg"
          )}
          src={"me.png"}
          layout="fill"
          priority={true}
          alt="logo"
          objectFit="cover"
          objectPosition="center bottom"
        />
        <Image
          className={img1 ? "opacity-0" : "opacity-100"}
          loader={myLoader.bind(
            null,
            "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4fc3a5c648064c9ea30cad1d017fcf10_9366/racer-tr21-shoes.jpg"
          )}
          src={"me.png"}
          layout="fill"
          priority={true}
          alt="logo"
          objectFit="cover"
          objectPosition="center bottom"
        />

        <span className="absolute z-50 bottom-0 left-2.5 bg-white px-2.5 pt-[3px] text-sm lg:text-base">
          <span className="line-through text-light">90000$</span>
          <span className="ml-1 text-red">89990$</span>
        </span>
      </div>
      <div className="text-sm px-2.5 pt-2.5 pb-5 lg:text-base">
        <p className="">Swift Run Shoes </p>
        <p className="text-light">Men`s Originals</p>
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