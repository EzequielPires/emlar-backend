import { AsideBar } from "../../components/AsideBar";
import { Navbar } from "../../components/Navbar";
import styles from "./styles.module.scss";

export default function Admin() {
    return (
        <div className={styles.admin}>
            <Navbar />
            <AsideBar />
        </div>
    )
}