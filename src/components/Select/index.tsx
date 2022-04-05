import { useState } from "react";
import { Icon } from "../Icon";
import styles from "./styles.module.scss";

export function Select({label}) {
    const [show, setShow] = useState(false);
    return (
        <div className={styles.select}>
            <span className={styles.title}>{label}</span>
            <button onClick={() => setShow(!show)}>
                Selecione
                <Icon name={"chevron-down"} color={"#999"} size={14} />
            </button>
            <div className={styles.body + ` ${!show ? styles.hidden : null}`}>

            </div>
            <div className={styles.overflow + ` ${!show ? styles.hidden : null}`} onClick={() => setShow(!show)}></div>
        </div>
    )
}