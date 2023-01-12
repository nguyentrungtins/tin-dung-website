import { FaChevronDown } from "react-icons/fa";
const UpBar = () => {
  return (
    <div className="flex w-full h-[40px] bg-black items-center justify-center gap-2.5">
      <p className="text-[0.7rem] font-medium text-white cursor-pointer sm:text-[0.725rem] font-mont">
        MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TRÊN 2 TRIỆU
      </p>
      <span className="flex text-[0.7rem] text-white cursor-pointer sm:text-lg">
        <FaChevronDown />
      </span>
    </div>
  );
};
export default UpBar;
