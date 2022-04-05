import router from "next/router";
import { Icon } from "../Icon";
import { Select } from "../Select";
import styles from "./styles.module.scss";

export function FormFilter() {
    return (
        <>
            <div className={styles.tab_button}>
                <button>Comprar</button>
                <button>Alugar</button>
            </div>
            <form className={styles.form_filter} onSubmit={e => e.preventDefault()}>
                <Select label={"Localização"}/>
                <Select label={"Tipo do imóvel"}/>
                <Select label={"Preço"}/>
                <div className={styles.item}>
                    <button className={styles.submit} onClick={() => router.push('/imoveis')}>Procurar</button>
                </div>
            </form>
        </>
    )
}