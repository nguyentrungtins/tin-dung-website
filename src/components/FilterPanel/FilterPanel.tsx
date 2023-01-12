import { useRef, useState, useEffect } from "react";
import FilterIcon from "../../../public/svgs/FilterIcon.svg";
import Image from "next/image";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
interface isShowInterface {
  left: boolean;
  right: boolean;
}

const FilterPanel = () => {
  const ref = useRef<null | HTMLUListElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const scroll = (scrollOffset: number, btn: number) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="flex gap-3.5 py-1  border-b-[1px] border-solid border-gray-light my-3">
      <button
        className="w-[40px] h-[40px] justify-self-center bg-white border-solid border-[1px] border-black cursor-pointer hidden sm:flex items-center justify-center"
        onClick={() => scroll(-200, 0)}
      >
        <BsArrowLeft size={18} />
      </button>

      <ul
        className="scrollbar-hide flex overflow-x-auto whitespace-nowrap scroll-smooth flex-r h-[45px] w-full snap-mandatory snap-x flex-1 items-center "
        ref={ref}
      >
        <li className="text-center mr-[20px] text-sm lg:text-base inline-block w-[100px] text-[#767677] flex-none cursor-pointer">
          X Mand. RTL
        </li>
        <li className="text-center mr-[20px] text-sm lg:text-base inline-block w-[100px] text-[#767677] flex-none cursor-pointer">
          X Mand. RTL
        </li>
        <li className="text-center mr-[20px] text-sm lg:text-base inline-block w-[100px] text-[#767677] flex-none cursor-pointer">
          X Mand. RTL
        </li>
        <li className="text-center mr-[20px] text-sm lg:text-base inline-block w-[100px] text-[#767677] flex-none cursor-pointer">
          X Mand. RTL
        </li>
        <li className="text-center mr-[20px] text-sm lg:text-base inline-block w-[100px] text-[#767677] flex-none cursor-pointer">
          X Mand. RTL
        </li>
        <li className="text-center mr-[20px] text-sm lg:text-base inline-block w-[100px] text-[#767677] flex-none cursor-pointer">
          X Mand. RTL
        </li>
        <li className="text-center mr-[20px] text-sm lg:text-base inline-block w-[100px] text-[#767677] flex-none cursor-pointer">
          X Mand. RTL
        </li>
        <li className="text-center mr-[20px] text-sm lg:text-base inline-block w-[100px] text-[#767677] flex-none cursor-pointer">
          X Mand. RTL
        </li>
        <li className="text-center mr-[20px] text-sm lg:text-base inline-block w-[100px] text-[#767677] flex-none cursor-pointer">
          X Mand. RTL
        </li>
      </ul>

      <button
        className="hidden w-[40px] h-[40px] justify-self-center bg-white border-solid border-[1px] border-black cursor-pointer sm:flex items-center justify-center"
        onClick={() => scroll(200, 1)}
      >
        <BsArrowRight size={18} />
      </button>

      <span className="hidden sm:flex justify-evenly items-center h-[40px] border-[1px] border-black border-solid text-sm lg:text-base font-bold w-[145px] cursor-pointer">
        Filter & Sort
        <Image
          src={FilterIcon}
          priority={true}
          alt="Human Icon"
          width={24}
          height={17.4}
        />
      </span>
    </div>
  );
};
export default FilterPanel;
