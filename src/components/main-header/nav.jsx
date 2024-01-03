"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import classes from "@/components/main-header/nav.module.css"
const NavLink = () => {
    const path = usePathname();
    return (
        <nav className={classes.nav}>
        <ul>
          <li>
            <Link className={path.startsWith("/meals") ?classes.active :""} href="/meals">Browse Meals</Link>{" "}
          </li>
          <li>
            <Link className={path.startsWith("/community")? classes.active: ""} href="/community">Foodies Community</Link>{" "}
          </li>
        </ul>
      </nav>
    );
};

export default NavLink;