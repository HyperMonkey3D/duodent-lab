"use client";

import { menu } from "@/app/utils/data";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Vector1.svg";
import { useEffect, useState } from "react";
import menuIcon from "../../public/list1.svg";
import closeMenu from "../../public/close-menu.svg";
import Menu from "../common/Menu";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMenuOptionClicked, setIsMenuOptionClicked] = useState(false);
  const actionButtonClass =
    "ml-5 bg-duo-orange px-6 py-2 text-white rounded-lg";

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
      console.log("href", href);
      const targetID = href.replace(/.*\#/, "");
      console.log("href replaced", targetID);
      const elem = document.getElementById(targetID);
      console.log("elem", elem);
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
    <div className="px-5 py-4 border-b border-slate-200">
      <nav className="container m-auto flex justify-between bg-white xl:px-7">
        <div className="flex items-center">
          <Image src={logo} alt={"logo"} />
          <div className="flex items-end bg-white ml-3 ">
            <Link href={"/"}>
              <h3 className="text-3xl sm:text-4xl font-bold bg-white">
                DuoDent
              </h3>
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="relative bg-black  border border-black rounded-sm flex items-center px-3 py-2">
            <button onClick={menuButton}>
              {isClicked === false ? (
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
          <ul className="flex items-center">
            {menu.map((item) => {
              const { index, title, route } = item;
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
        </div>
      </nav>
    </div>
  );
};

export default Nav;
