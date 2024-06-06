import Link from "next/link";
import NavLink from "./nav-link";

import style from "./main-header.module.css"
export default function MainHeader(){
    return(
        <header className={style["main-header"]}>
            <div className={style.logo}>
                <Link href='/'>DailyNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink href="/archive">Archive</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}