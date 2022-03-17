import { CardAnnouncement } from "../CardAnnouncement";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styles from "./styles.module.scss";

const announcement = {
    img: "https://richtergruppe.com.br/wp-content/uploads/312484-como-escolher-o-momento-certo-para-vender-um-terreno-ou-imovel.jpg",
    title: "Rua Castanho Mirin",
    price: "500.000,00"
}

export function SectionHighlights() {
    return (
        <div className={styles.section_highlights}>
            <div className="container">
                <h4 className={styles.title}>Imóveis em destaque</h4>
                <div className={styles.wrap}>
                    <Swiper
                        modules={[Navigation]}
                        id={styles.swiper}
                        spaceBetween={24}
                        slidesPerView={'auto'}
                        navigation
                    >
                        <SwiperSlide id={styles.swiper_slide}><CardAnnouncement announcement={announcement} /></SwiperSlide>
                        <SwiperSlide id={styles.swiper_slide}><CardAnnouncement announcement={announcement} /></SwiperSlide>
                        <SwiperSlide id={styles.swiper_slide}><CardAnnouncement announcement={announcement} /></SwiperSlide>
                        <SwiperSlide id={styles.swiper_slide}><CardAnnouncement announcement={announcement} /></SwiperSlide>
                        <SwiperSlide id={styles.swiper_slide}><CardAnnouncement announcement={announcement} /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}