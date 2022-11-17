import styles from "./DownBar.module.scss";
import { useState } from "react";
import Link from "next/link";
interface IsClickInterface {
  connected: boolean;
  type: string;
}
const DownBar = () => {
  const [isClicked, setIsClicked] = useState<IsClickInterface[]>([]);
  const clickHandler = () => {};
  return (
    <div className={styles.container}>
      <ul>
        <li onClick={clickHandler}>
          <a href="#">Castrol</a>
        </li>
        <li onClick={clickHandler}>
          <a href="#">Shell</a>
        </li>
        <li onClick={clickHandler}>
          <a href="#">Motul</a>
        </li>
        <li onClick={clickHandler}>
          <a href="#">Khác</a>
        </li>
      </ul>
    </div>
  );
};
// function NavigationLink({ href, text, router }): {
//   const isActive = router.asPath === (href === "/home" ? "/" : href);
//   return (
//     <Link href={href === "/home" ? "/" : href} passHref>
//       <a
//         href={href === "/home" ? "/" : href}
//         className={`${isActive && "nav_item_active"} nav_item`}
//       >
//         {text}
//       </a>
//     </Link>
//   );
// }

export default DownBar;
