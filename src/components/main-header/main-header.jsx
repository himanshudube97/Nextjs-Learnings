import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background"
import { usePathname } from "next/navigation";
import NavLink from "@/components/main-header/nav"
const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="textimage" priority />
      </Link>
      <NavLink/>
    </header>
    </>
  );
};

export default MainHeader;
