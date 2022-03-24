import styles from "./styles.module.scss";
import { Header } from "../../components/Header";
import { Icon } from "../../components/Icon";
import { Footer } from "../../components/Footer";
import { useRouterScroll } from "@moxy/next-router-scroll";
import { useEffect } from "react";

export default function View() {
    const { updateScroll } = useRouterScroll();
    useEffect(() => {
        updateScroll();
    }, []);
    return (
        <>
            <Header />
            <div className={styles.view}>
                <div className={styles.gallery}>
                    <div className={styles.image_main} >
                        <img src="https://richtergruppe.com.br/wp-content/uploads/312484-como-escolher-o-momento-certo-para-vender-um-terreno-ou-imovel.jpg" alt="" />
                    </div>
                    <div className={styles.thumb + " d-flex flex-wrap"}>
                        <div className={styles.item}>
                            <img src="https://richtergruppe.com.br/wp-content/uploads/312484-como-escolher-o-momento-certo-para-vender-um-terreno-ou-imovel.jpg" alt="" />
                        </div>
                        <div className={styles.item}>
                            <img src="https://richtergruppe.com.br/wp-content/uploads/312484-como-escolher-o-momento-certo-para-vender-um-terreno-ou-imovel.jpg" alt="" />
                        </div>
                        <div className={styles.item}>
                            <img src="https://richtergruppe.com.br/wp-content/uploads/312484-como-escolher-o-momento-certo-para-vender-um-terreno-ou-imovel.jpg" alt="" />
                        </div>
                        <div className={styles.item}>
                            <img src="https://richtergruppe.com.br/wp-content/uploads/312484-como-escolher-o-momento-certo-para-vender-um-terreno-ou-imovel.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.content + " container d-flex justify-content-between"}>
                    <div className={styles.main}>
                        <h2 className={styles.title}>Apartamento no bairro São Cristóvão.</h2>
                        <p className={styles.subtitle}>R. José Costa Carvalho, 149D, São Cristóvão, Chapecó/SC</p>
                        <div className={styles.characteristics}>
                            <div className={styles.aside_header}>
                                <span>Somente aluguel:</span>
                                <span className={styles.price}>R$ 1640,00</span>
                            </div>
                            <div className={styles.aside_body}>
                                <div className={styles.line}>
                                    <span className={styles.name}>Condomínio</span>
                                    <span className={styles.price}>R$ 250,00</span>
                                </div>
                                <div className={styles.line}>
                                    <span className={styles.name}>IPTU</span>
                                    <span className={styles.price}>R$ 39,00</span>
                                </div>
                                <div className={styles.line}>
                                    <span className={styles.name}>Seguro Incêndio</span>
                                    <span className={styles.price}>R$ 20,00</span>
                                </div>
                                <div className={styles.line}>
                                    <span className={styles.name}>Total</span>
                                    <span className={styles.price}>R$ 1937,00</span>
                                </div>
                                <button>Agendar visita</button>
                                <p className={styles.text}>Sua visita é gratuita e livre de compromissos</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start w-100 flex-wrap gap-3">
                            <div className={styles.item_icon}>
                                <Icon name={"ruler-triangle"} color={"var(--main)"} size={32} />
                                <span>65m2</span>
                            </div>
                            <div className={styles.item_icon}>
                                <Icon name={"bed"} color={"var(--main)"} size={40} />
                                <span>2 quartos</span>
                            </div>
                            <div className={styles.item_icon}>
                                <Icon name={"garage"} color={"var(--main)"} size={40} />
                                <span>1 vaga</span>
                            </div>
                            <div className={styles.item_icon}>
                                <Icon name={"bath"} color={"var(--main)"} size={32} />
                                <span>2 banheiro</span>
                            </div>
                        </div>
                        <hr />
                        <h2 className={styles.title}>Descrição do proprietário</h2>
                        <p>Lindo apartamento térreo para você que tem medo de altura e não gosta de subir escadas.</p>
                        <hr />
                        <h2 className={styles.title}>Destaques</h2>
                        <div className="d-flex flex-column gap-4 mt-4">
                            <div className={styles.item}>
                                <div className={styles.item_icon}>
                                    <Icon name={"steak"} color={"var(--main)"} size={32} />
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className={styles.title}>Churrasqueira</h4>
                                    <p className={styles.subtitle}>O imóvel conta com churrasqueira</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.item_icon}>
                                    <Icon name={"ruler-triangle"} color={"var(--main)"} size={32} />
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className={styles.title}>Móveis sob medida</h4>
                                    <p className={styles.subtitle}>O imóvel conta com móveis sob medida em pelo menos 2 cômodos</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.item_icon}>
                                    <Icon name={"map-marked"} color={"var(--main)"} size={32} />
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className={styles.title}>Localização Privilegiada</h4>
                                    <p className={styles.subtitle}>Próximo de tudo o que você precisa no dia a dia</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.item_icon}>
                                    <Icon name={"shield-check"} color={"var(--main)"} size={32} />
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className={styles.title}>Bairro Seguro</h4>
                                    <p className={styles.subtitle}>O bairro deste imóvel é um dos mais seguros da cidade</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.item_icon}>
                                    <Icon name={"sort-circle"} color={"var(--main)"} size={32} />
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className={styles.title}>Elevador</h4>
                                    <p className={styles.subtitle}>O imóvel conta com elevador no condomínio</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.item_icon}>
                                    <Icon name={"paw"} color={"var(--main)"} size={32} />
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className={styles.title}>Aceita Pet</h4>
                                    <p className={styles.subtitle}>Permite animais de estimação no condomínio</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h2 className={styles.title}>Localização e vizinhança</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.9589342564755!2d-47.94801258458582!3d-18.165805590565537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a6666c4ca09061%3A0x988eafae945d0f96!2sPortal%20Catal%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1647917730224!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="272"
                            style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.25)", borderRadius: 8, marginTop: 24 }}
                            loading="lazy"></iframe>
                    </div>
                    <div className="d-flex flex-column" style={{height: "max-content", position: "sticky", top: "88px"}}>
                        <div className={styles.aside}>
                            <div className={styles.aside_header}>
                                <span>Somente aluguel:</span>
                                <span className={styles.price}>R$ 1640,00</span>
                            </div>
                            <div className={styles.aside_body}>
                                <div className={styles.line}>
                                    <span className={styles.name}>Condomínio</span>
                                    <span className={styles.price}>R$ 250,00</span>
                                </div>
                                <div className={styles.line}>
                                    <span className={styles.name}>IPTU</span>
                                    <span className={styles.price}>R$ 39,00</span>
                                </div>
                                <div className={styles.line}>
                                    <span className={styles.name}>Seguro Incêndio</span>
                                    <span className={styles.price}>R$ 20,00</span>
                                </div>
                                <div className={styles.line}>
                                    <span className={styles.name}>Total</span>
                                    <span className={styles.price}>R$ 1937,00</span>
                                </div>
                                <button>Agendar visita</button>
                                <p className={styles.text}>Sua visita é gratuita e livre de compromissos</p>
                            </div>
                        </div>
                        <button className={styles.btn_large}>Quero fazer uma proposta</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}