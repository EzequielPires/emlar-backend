import { useState } from "react";
import { Icon } from "../Icon";
import styles from "./styles.module.scss";
export function Filter() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        let body = document.querySelector('body');
        !show ? body.style.overflow = "hidden" : body.style.overflow = "auto";
        setShow(!show);
    };
    return (
        <>
            <button className={styles.btn_filter} onClick={handleShow}>
                <Icon name={"sliders"} color={"#333"} size={18} />
                Filtrar
            </button>
            <div className={styles.body + ` ${show ? styles.show : null}`}>
                <button className={styles.btn_close} onClick={handleShow}>
                    <Icon name={"close"} color={"#555"} size={18} />
                </button>
                <h4 className={styles.title}>Filtrar imóveis</h4>
                <div className={styles.tab_button}>
                    <button>Comprar</button>
                    <button>Alugar</button>
                </div>
                <div className={styles.section}>
                    <span className={styles.title}>Cidade</span>
                    <div className={styles.select}>
                        <div className={styles.select_box}>
                            <input type="checkbox" name="catalao" id="catalao" />
                            <label htmlFor="catalao">Catalão</label>
                        </div>
                        <div className={styles.select_box}>
                            <input type="checkbox" name="campo-alegre" id="campo-alegre" />
                            <label htmlFor="campo-alegre">Campo Alegre</label>
                        </div>
                        <div className={styles.select_box}>
                            <input type="checkbox" name="ipameri" id="ipameri" />
                            <label htmlFor="ipameri">Ipameri</label>
                        </div>
                        <div className={styles.select_box}>
                            <input type="checkbox" name="ouvidor" id="ouvidor" />
                            <label htmlFor="ouvidor">Ouvidor</label>
                        </div>
                        <div className={styles.select_box}>
                            <input type="checkbox" name="goiania" id="goiania" />
                            <label htmlFor="goiania">Goiânia</label>
                        </div>
                    </div>
                </div>
                <footer className="d-flex gap-3">
                    <button>Limpar</button>
                    <button>Filtrar</button>
                </footer>
            </div>
            <div className={styles.overflow + ` ${show ? styles.show : null}`} onClick={handleShow}>

            </div>
        </>
    )
}