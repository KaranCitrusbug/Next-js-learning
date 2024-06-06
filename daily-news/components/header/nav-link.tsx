"use client";

import { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import style from './main-header.module.css'

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? style.active : undefined}>
      {children}
    </Link>
  );
}
