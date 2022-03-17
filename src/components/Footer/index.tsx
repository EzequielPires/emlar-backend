import { Icon } from "../Icon";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className={styles.item + " col-md-4"}>
                        <Link href="/">
                            <a className={styles.logo}>
                                Em<span>Lar</span>
                            </a>
                        </Link>
                        <span className={styles.slogan}>Um novo lar para seus sonhos</span>
                        <div className="d-flex gap-3" style={{ marginTop: 64 }}>
                            <Link href="/">
                                <a ><Icon name={"instagram"} color={'var(--main)'} size={48} /></a>

                            </Link>
                            <Link href="/">
                                <a ><Icon name={"facebook"} color={'var(--main)'} size={48} /></a>

                            </Link>
                            <Link href="/">
                                <a ><Icon name={"linkedin"} color={'var(--main)'} size={48} /></a>

                            </Link>
                        </div>
                    </div>
                    <div className={styles.item + " col-md-4"}>
                        <h4>Navegação</h4>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/">
                            <a>Quero alugar</a>
                        </Link>
                        <Link href="/">
                            <a>Falar com um corretor</a>
                        </Link>
                        <Link href="/">
                            <a>Termos de uso</a>
                        </Link>
                        <Link href="/">
                            <a>Política de privacidade</a>
                        </Link>
                    </div>
                    <div className={styles.item + " col-md-4"}>
                        <button disabled className={styles.disabled}>
                            Newsletter
                        </button>
                        <span>Receba novidades no seu e-mail</span>
                        <form>
                            <input type="text" placeholder="Digite seu email" />
                            <button>Enviar</button>
                        </form>
                    </div>
                </div>
                <div className={styles.rodape}>
                    <span>EmLar © Todos os direitos reservados</span>
                    <div className="d-flex gap-4">
                        <Link href="/">
                            <a style={{ color: 'var(--main)', fontSize: 14, fontWeight: 600 }}>Anunciar Imóvel</a>
                        </Link>
                        <Link href="/">
                            <a style={{ color: 'var(--main)', fontSize: 14, fontWeight: 600 }}>Queremos o seu Feedback</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}