import { useState } from "react";
import { AreaRange } from "../AreaRange";
import { Checkbox } from "../Checkbox";
import { Icon } from "../Icon";
import { PriceRange } from "../PriceRange";
import { Toggle } from "../Toggle";
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
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Tipo</span>
                    <div className="d-flex gap-2 flex-column">
                        <Checkbox label={"Apartamento"} id={"apartamento"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Casa"} id={"casa"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Casa de Condomínio"} id={"casa-de-condominio"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Kitnet/Studio"} id={"kitnet-Studio"} onChange={null} value={false} key={""} />
                    </div>
                </div>
                <PriceRange title={"Faixa de preço"} />
                <div className="mt-5"></div>
                <PriceRange title={"Condominio"} />
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Dormitórios</span>
                    <div className="d-flex gap-3">
                        <Toggle id={1} name="dormitorios" label={"1"} />
                        <Toggle id={2} name="dormitorios" label={"2"} />
                        <Toggle id={3} name="dormitorios" label={"3"} />
                        <Toggle id={4} name="dormitorios" label={"4"} />
                        <Toggle id={5} name="dormitorios" label={"5+"} />
                    </div>
                </div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Banheiros</span>
                    <div className="d-flex gap-3">
                        <Toggle id={1} name="banheiros" label={"1"} />
                        <Toggle id={2} name="banheiros" label={"2"} />
                        <Toggle id={3} name="banheiros" label={"3"} />
                        <Toggle id={4} name="banheiros" label={"4"} />
                        <Toggle id={5} name="banheiros" label={"5+"} />
                    </div>
                </div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Mobiliado?</span>
                    <div className="d-flex gap-3">
                        <Toggle id={1} name="mobi" label={"Sim"} />
                        <Toggle id={2} name="mobi" label={"Não"} />
                    </div>
                </div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Vagas</span>
                    <fieldset className="d-flex gap-3" id="vagas">
                        <Toggle id={1} name="vagas" label={"1"} />
                        <Toggle id={2} name="vagas" label={"2"} />
                        <Toggle id={3} name="vagas" label={"3"} />
                        <Toggle id={4} name="vagas" label={"4"} />
                        <Toggle id={5} name="vagas" label={"5+"} />
                    </fieldset>
                </div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Aceita pets</span>
                    <div className="d-flex gap-3">
                        <Toggle id={1} name="pets" label={"Sim"} />
                        <Toggle id={2} name="pets" label={"Não"} />
                    </div>
                </div>
                <div className="mt-5"></div>
                <AreaRange title={"Àrea"} />
                <div className="mt-5"></div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Condomínio</span>
                    <div className="d-flex gap-2 flex-column">
                        <Checkbox label={"Academia"} id={"apartamento"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Área verde"} id={"casa"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Brinquedoteca"} id={"casa-de-condominio"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Churrasqueira"} id={"kitnet-Studio"} onChange={null} value={false} key={""} />
                    </div>
                </div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Comodidades</span>
                    <div className="d-flex gap-2 flex-column">
                        <Checkbox label={"Apartamento cobertura"} id={"apartamento"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Ar condicionado"} id={"casa"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Banheira"} id={"casa-de-condominio"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Box"} id={"kitnet-Studio"} onChange={null} value={false} key={""} />
                    </div>
                </div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Mobílias</span>
                    <div className="d-flex gap-2 flex-column">
                        <Checkbox label={"Armários na cozinha"} id={"apartamento"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Armários no quarto"} id={"casa"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Armários nos banheiros"} id={"casa-de-condominio"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Cama de casal"} id={"kitnet-Studio"} onChange={null} value={false} key={""} />
                    </div>
                </div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Bem-estar</span>
                    <div className="d-flex gap-2 flex-column">
                        <Checkbox label={"Janelas grandes"} id={"apartamento"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Rua silenciosa"} id={"casa"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Sol da manhã"} id={"casa-de-condominio"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Sol da tarde"} id={"kitnet-Studio"} onChange={null} value={false} key={""} />
                    </div>
                </div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Eletrodomésticos</span>
                    <div className="d-flex gap-2 flex-column">
                        <Checkbox label={"Fogão"} id={"apartamento"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Fogão cooktop"} id={"casa"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Geladeira"} id={"casa-de-condominio"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Máquina de lavar"} id={"kitnet-Studio"} onChange={null} value={false} key={""} />
                    </div>
                </div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Cômodos</span>
                    <div className="d-flex gap-2 flex-column">
                        <Checkbox label={"Área de serviço"} id={"apartamento"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Cozinha americana"} id={"casa"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Home-office"} id={"casa-de-condominio"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Jardim"} id={"kitnet-Studio"} onChange={null} value={false} key={""} />
                    </div>
                </div>
                <div className={styles.section + " my-5"}>
                    <span className={styles.title}>Acessibilidade</span>
                    <div className="d-flex gap-2 flex-column">
                        <Checkbox label={"Banheiro adaptado"} id={"apartamento"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Corrimão"} id={"casa"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Piso tátil"} id={"casa-de-condominio"} onChange={null} value={false} key={""} />
                        <Checkbox label={"Quartos e corredores com portas amplas"} id={"kitnet-Studio"} onChange={null} value={false} key={""} />
                    </div>
                </div>
                <footer className="d-flex gap-3">
                    <button>Limpar</button>
                    <button>Filtrar</button>
                </footer>
            </div>
            <div className={styles.overflow + ` ${show ? styles.show : null}`} onClick={handleShow}></div>
        </>
    )
}