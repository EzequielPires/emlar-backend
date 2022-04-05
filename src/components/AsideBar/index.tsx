import Link from "next/link";
import { Icon } from "../Icon";
import Logo from "../../assets/images/logo-white.svg";
import styles from "./styles.module.scss";

export function AsideBar() {
    return (
        <nav className={styles.aside_bar}>
            <div className={styles.header}>
                <Link href={"/"}>
                    <img src={Logo.src} alt="" />
                </Link>
            </div>
            <ul>
                <li className={styles.active}>
                    <Link href="/">
                        <a><Icon name={"home"} size={24} color={"#fff"} />Dashboard</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a><Icon name={"user"} size={24} color={"#fff"} />User profiles</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a><Icon name={"setting"} size={24} color={"#fff"} />Settings</a>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/">
                        <a><Icon name={"arrow-right-squad"} size={24} color={"#fff"} />Imóveis</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a><Icon name={"arrow-right-squad"} size={24} color={"#fff"} />Tipos</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}