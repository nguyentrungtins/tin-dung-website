import backBtnSgv from "../../public/svgs/backBtnSvg.svg";
import Image from "next/image";
import styles from "./BackBtn.module.scss";

const BackBtn = () => {
  return (
    <>
      <span className={styles.container}>
        <Image
          src={backBtnSgv}
          priority={true}
          alt="Human Icon"
          width={15}
          height={15}
        />
      </span>
    </>
  );
};
export default BackBtn;
