"use client";

import {menu, menuProducts} from "@/app/utils/data";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

import { useEffect, useState } from "react";
import menuIcon from "../../public/list1.svg";
import closeMenu from "../../public/close-menu.svg";
import Menu from "../common/Menu";
import Logo from "@/app/utils/Logo";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMenuOptionClicked, setIsMenuOptionClicked] = useState(false);
  const actionButtonClass =
    "ml-5 bg-duo-orange px-6 py-2 text-white rounded-lg";

  const pathname = usePathname()

  const menuButton = () => {
    if (!isClicked) {
      setIsClicked(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsClicked(false);
      document.body.style.overflow = "auto";
    }
  };

  //handle onclick event on individual menu item
  const close = () => {
    if (isClicked) {
      setIsClicked(false);
      document.body.style.overflow = "auto";
    }
  };

  //handle smooth scroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.href;
    if (href.includes("#")) {
      e.preventDefault();
      const targetID = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetID);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  //close mobile menu when menu item is clicked
  useEffect(() => {
    close();
    setIsMenuOptionClicked(false);
  }, [isMenuOptionClicked]);

  return (
    <div className="px-5 py-4 border-b border-slate-200 sticky-nav">
      <nav className="container m-auto flex justify-between bg-transparent xl:px-7">
        <Logo />
        <div className="block lg:hidden">
          <div className="relative bg-black  border border-black rounded-sm flex items-center px-3 py-2">
            <button onClick={menuButton}>
              {!isClicked ? (
                <Image src={menuIcon} alt="menu" width={25} />
              ) : (
                <Image src={closeMenu} alt="icon" width={25} />
              )}
            </button>
            {isClicked && (
              <Menu
                optionState={[isMenuOptionClicked, setIsMenuOptionClicked]}
              />
            )}
          </div>
        </div>
        <div className="hidden lg:block">
          {
            pathname === "/" && (
                  <ul className="flex items-center">
                    {menu.map((item) => {
                      const {index, title, route} = item;
                      return (
                          <li
                              key={`menu-${index}`}
                              className={
                                title === "Hablemos" ? `${actionButtonClass}` : `ml-5`
                              }
                          >
                            <Link href={route} onClick={handleScroll}>
                              {title}
                            </Link>
                          </li>
                      );
                    })}
                  </ul>
              )
          }
          {
            pathname === "/productos" && (
                  <ul className="flex items-center">
                    {menuProducts.map((item) => {
                      const {index, title, route} = item;
                      return (
                          <li
                              key={`menu-${index}`}
                              className={
                                title === "Hablemos" ? `${actionButtonClass}` : `ml-5`
                              }
                          >
                            <Link href={route} onClick={handleScroll}>
                              {title}
                            </Link>
                          </li>
                      );
                    })}
                  </ul>
              )
          }
        </div>
      </nav>
    </div>
  );
};

export default Nav;
