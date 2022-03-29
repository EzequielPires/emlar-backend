import styles from "./styles.module.scss";

export function Toggle({id, label, name}) {
    return (
        <div className={styles.toggle}>
            <input type="radio" id={id+name} name={name} value={id} />
            <label htmlFor={id+name}>{label}</label>
        </div>
    )
}