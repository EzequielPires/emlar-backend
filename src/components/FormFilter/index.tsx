import { Icon } from "../Icon";
import styles from "./styles.module.scss";

export function FormFilter() {
    return (
        <form className={styles.form_filter} onSubmit={e => e.preventDefault()}>
            <div className={styles.item}>
                <span className={styles.title}>Localização</span>
                <button>
                    Selecione
                    <Icon name={"chevron-down"} color={"#999"} size={14}/>
                </button>
            </div>
            <div className={styles.item}>
                <span className={styles.title}>Tipo do imóvel</span>
                <button>
                    Selecione
                    <Icon name={"chevron-down"} color={"#999"} size={14}/>
                </button>
            </div>
            <div className={styles.item}>
                <span className={styles.title}>Preço</span>
                <button>
                    Selecione
                    <Icon name={"chevron-down"} color={"#999"} size={14}/>
                </button>
            </div>
            <div className={styles.item}>
                <button className={styles.submit}>Procurar</button>
            </div>
        </form>
    )
}