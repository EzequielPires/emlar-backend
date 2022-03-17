import Link from "next/link";
import Banner from "../../assets/images/banner.png";
import { FormFilter } from "../FormFilter";
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
                                Em<span>Lar</span>
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
                        <button className={styles.contact}>
                            <Icon name={"whatsapp"} size={24} color={"#00c013"} />
                            Falar com um corretor
                        </button>
                        <button className={styles.btn_primary}>
                            Anunciar imóvel
                        </button>
                    </div>
                </div>
            </nav>
            <div className={styles.body}>
                <div className="container d-flex">
                    <div className={styles.content}>
                        <h1>Encontre o lugar perfeito para morar</h1>
                        <p>Alugue seu imóvel de forma simples e rápida com preços acessíveis e com uma ótima qualidade</p>
                        <FormFilter />
                    </div>
                    <div className={styles.content_image}>
                        <img src={Banner.src} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}