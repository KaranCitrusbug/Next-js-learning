import Link from "next/link";

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
                        <Link href='news'>News</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}