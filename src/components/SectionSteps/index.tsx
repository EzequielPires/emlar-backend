import Step1 from "../../assets/icons/step-1.svg";
import Step2 from "../../assets/icons/step-2.svg";
import Step3 from "../../assets/icons/step-3.svg";
import styles from "./styles.module.scss";

export function SectionSteps() {
    return (
        <section className={styles.section_steps}>
            <div className="container d-flex gap-4">
                <div className={styles.title}>
                    <h2>Entenda como o Em<span>Lar</span> funciona</h2>
                    <p>São apena 3 passos</p>
                </div>
                <div className={styles.item}>
                    <img src={Step1.src} alt="" />
                    <p>Busque pelo imóvel que gostaria de morar.</p>
                </div>
                <div className={styles.item}>
                    <img src={Step2.src} alt="" />
                    <p>Agende uma visita no dia e horário que gostaria.</p>
                </div>
                <div className={styles.item}>
                    <img src={Step3.src} alt="" />
                    <p>Faça uma proposta e pronto. Tudo digital e sem burocracia.</p>
                </div>
            </div>
        </section>
    )
}