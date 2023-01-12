import UpBar from "./UpBar";
import icon from "../../../public/images/Logo.png";
import humanIcon from "../../../public/svgs/HumanIcon.svg";
import cartIcon from "../../../public/svgs/CartIcon.svg";
import heartIcon from "../../../public/svgs/HeartIcon.svg";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import Nhot from "./NavBarSub/Nhot";
const NavBar = () => {
  return (
    <div>
      <UpBar />
      <nav className="flex justify-between items-center h-[80px] px-[3%] border-b-[1px] border-solid border-gray-light">
        <span className="flex-1 lg:hidden">
          <AiOutlineMenu
            size={30}
            className="cursor-pointer"
          />
        </span>
        <ul className="hidden lg:flex h-[50%] items-center gap-[3%] lg:flex-1">
          <li className="flex items-center h-full font-light border-black border-solid cursor-pointer group hover:border-b-[3px] transition-all ease-linear">
            <a className="text-base font-semibold uppercase font-roboto lg:tracking-widest">
              Nhớt
            </a>
            <Nhot />
          </li>

          <li className="flex items-center h-full font-light border-black border-solid cursor-pointer group hover:border-b-[3px] transition-all ease-linear">
            <a className="text-base font-semibold uppercase font-roboto lg:tracking-widest">
              Vỏ Ruột
            </a>
            <Nhot />
          </li>
          <li className="flex items-center h-full font-light border-black border-solid cursor-pointer group hover:border-b-[3px] transition-all ease-linear">
            <a className="text-base font-semibold uppercase font-roboto lg:tracking-widest">
              Nhông Sên Dĩa
            </a>
            <Nhot />
          </li>
          <li className="flex items-center h-full font-light border-black border-solid cursor-pointer group hover:border-b-[3px] transition-all ease-linear">
            <a className="text-base font-semibold uppercase font-roboto lg:tracking-widest">
              Bình Ắc Quy
            </a>
            <Nhot />
          </li>
        </ul>
        <a
          className="cursor-pointer"
          href="#"
        >
          <Image
            src={icon}
            width={45}
            height={35}
            priority={true}
            alt="logo"
          />
        </a>
        <div className="flex-1 flex justify-end h-[32px] ">
          <div className="flex py-1 pr-1.5 pl-3 bg-none lg:bg-gray-light">
            <input
              className="hidden text-base border-none outline-none lg:flex placeholder:text-base bg-gray-light"
              type="text"
              placeholder="Search"
            />
            <BiSearch
              size={20}
              className="flex h-full align-middle cursor-pointer"
            />
          </div>
          <div className="flex ml-[20px] items-center gap-[30px]">
            <Image
              className="w-[20px] h-[20px] text-[30px] cursor-pointer"
              src={humanIcon}
              priority={true}
              alt="Human Icon"
              width={21.02}
              height={20}
            />
            <span className="hidden">
              <Image
                className="w-[20px] h-[20px] text-[30px] cursor-pointer"
                src={heartIcon}
                priority={true}
                alt="Heart Icon"
                width={21.86}
                height={15}
              />
            </span>
            <Image
              className="w-[20px] h-[20px] text-[30px] cursor-pointer"
              src={cartIcon}
              priority={true}
              alt="Cart Icon"
              width={17.26}
              height={20}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
