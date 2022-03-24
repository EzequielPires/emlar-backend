import Link from "next/link";
import Logo from "../../assets/images/logo.svg";
import { Icon } from "../Icon";
import styles from "./styles.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="d-flex">
                        <Link href="/">
                            <a className={styles.logo}>
                                <img src={Logo.src} alt="" />
                            </a>
                        </Link>
                        <ul className="d-flex">
                            <li>
                                <Link href="/">
                                    <a className={styles.active}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Imóveis para alugar</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex gap-3">
                        <button className={styles.login}>
                            Entrar
                        </button>
                        <button className={styles.btn_primary}>
                            Criar conta
                        </button>
                        <button className={styles.menu}>
                            <Icon name={"menu"} size={32} color={"#333"}/>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}