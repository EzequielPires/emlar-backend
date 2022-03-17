import Image from "../../assets/images/image.png";
import styles from "./styles.module.scss";

export function SectionOuther () {
    return (
        <div className={styles.section_outher}>
            <div className="container d-flex justify-content-center">
                <div className={styles.gallery}>
                    <img src={Image.src} alt="" />
                </div>
                <div className={styles.content}>
                    <h2>Aqui seus sonhos ganham um <span>novo lar</span></h2>
                    <p>Através do Emlar você encontra diversas oportunidades de alugar e compar o imóvel que você procura de forma simples e rápida, em poucos passos você poderá realizar o sonho de um novo lar.</p>
                    <button>Veja ofertas</button>
                </div>
            </div>
        </div>
    )
}