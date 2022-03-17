import styles from "./styles.module.scss";

export function Icon({ name, size, color }) {
    return (
        <i
            className={styles.icon + ` fa-${name}`}
            style={{
                width: size,
                height: size,
                background: color
            }}
        ></i>
    )
}