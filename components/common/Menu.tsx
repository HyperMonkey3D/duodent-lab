"use client";

import {menu, menuProducts} from "@/app/utils/data";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface MenuAction {
  optionState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Menu: React.FC<MenuAction> = ({ optionState }) => {
  const [isMenuOptionClicked, setIsMenuOptionClicked] = optionState;
  const actionButtonClass = "bg-duo-orange text-white py-2 px-10";
  const pathname = usePathname()

  const clicked = () => {
    setIsMenuOptionClicked(true);
  };

  return (
    <div className="h-screen fixed left-0 right-0 top-20 z-50">
        {
            pathname === "/" && (
                <ul>
                    {menu.map((item) => {
                        const {index, title, route} = item;
                        return (
                            <li
                                key={index}
                                className={
                                    title === "Hablemos"
                                        ? `${actionButtonClass}`
                                        : "bg-white py-2 px-10 border-b border-duo-light-gray"
                                }
                                onClick={clicked}
                            >
                                <Link href={route}>{title}</Link>
                            </li>
                        );
                    })}
                </ul>
            )
        }
        {
            pathname === "/productos" && (
                <ul>
                    {menuProducts.map((item) => {
                        const {index, title, route} = item;
                        return (
                            <li
                                key={index}
                                className={
                                    title === "Hablemos"
                                        ? `${actionButtonClass}`
                                        : "bg-white py-2 px-10 border-b border-duo-light-gray"
                                }
                                onClick={clicked}
                            >
                                <Link href={route}>{title}</Link>
                            </li>
                        );
                    })}
                </ul>
            )
        }

        <div className="bg-black opacity-90 h-full w-full"></div>
    </div>
  );
};

export default Menu;
