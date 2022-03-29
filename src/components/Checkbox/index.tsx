import styles from "./styles.module.scss";

export function Checkbox({ id, label, value, onChange }) {
    return (
        <div className={styles.input_box}>
            <input
                type="checkbox"
                name={id}
                id={id}
                checked={value}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}