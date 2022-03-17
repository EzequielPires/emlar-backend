import { Icon } from "../Icon";
import styles from "./styles.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className={styles.item + " col-md-4"}>
                        <a href="/" className={styles.logo}>
                            Em<span>Lar</span>
                        </a>
                        <span className={styles.slogan}>Um novo lar para seus sonhos</span>
                        <div className="d-flex gap-3" style={{marginTop: 64}}>
                            <a href="/"><Icon name={"instagram"} color={'var(--main)'} size={48} /></a>
                            <a href="/"><Icon name={"facebook"} color={'var(--main)'} size={48} /></a>
                            <a href="/"><Icon name={"linkedin"} color={'var(--main)'} size={48} /></a>
                        </div>
                    </div>
                    <div className={styles.item + " col-md-4"}>
                        <h4>Navegação</h4>
                        <a href="">Home</a>
                        <a href="">Quero alugar</a>
                        <a href="">Falar com um corretor</a>
                        <a href="">Termos de uso</a>
                        <a href="">Política de privacidade</a>
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
                        <a href="" style={{color: 'var(--main)', fontSize: 14, fontWeight: 600}}>Anunciar Imóvel</a>
                        <a href="" style={{color: 'var(--main)', fontSize: 14, fontWeight: 600}}>Queremos o seu Feedback</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}