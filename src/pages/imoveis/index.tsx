import styles from "./styles.module.scss";
import { CardAnnouncement } from "../../components/CardAnnouncement";
import { Icon } from "../../components/Icon";
import { Filter } from "../../components/Filter";

export default function Imoveis() {
    const announcement = {
        img: "https://richtergruppe.com.br/wp-content/uploads/312484-como-escolher-o-momento-certo-para-vender-um-terreno-ou-imovel.jpg",
        title: "Rua José Felipe - Parque Independência",
        price: "500.000,00"
    }
    return (
        <>
            <nav className={styles.nav_search}>
                <div className="container d-flex justify-content-between py-3">
                    <div className="d-flex gap-3">
                        <button className={styles.btn_prev}>
                            <Icon name={"menu"} color={"#555"} size={24} />
                        </button>
                        <div className={styles.search_input}>
                            <input type="text" placeholder="Procurar por bairro ou rua" />
                            <button>Buscar</button>
                        </div>
                    </div>
                    <Filter />
                </div>
            </nav>
            <div className={styles.content + " container d-flex flex-column align-items-center flex-wrap gap-4 mt-4"}>
                <div className="d-flex align-items-center justify-content-between w-100 pb-2" style={{ borderBottom: '1px solid #d3d3d3' }}>
                    <h3>Apartamentos e casas à venda em São José dos Campos</h3>
                    <span className={styles.total}>150 resultados</span>
                </div>
                <div className={styles.list}>
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                    <CardAnnouncement announcement={announcement} />
                </div>
            </div>
        </>
    );
}