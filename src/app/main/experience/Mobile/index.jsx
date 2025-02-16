import styles from "./index.module.css";
import experienceList from "../experienceList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";

export default function Mobile () {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.works_slide}
        autoHeight={true}
      >
        {experienceList.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.img_wrap}>
              <Image alt="images" src={item.img} width={300} height={300} className={styles.thumbnail} />
            </div>
            <ul className={styles.intro}>
              <li className={styles.item}>
                <span className={styles.category}>Project name</span>
                <p className={styles.category_item}>{item.name}</p>
              </li>
              <li className={styles.item}>
                <span className={styles.category}>Skills</span>
                <p className={styles.category_item}>{item.skills}</p>
              </li>
              <li className={styles.item}>
                <span className={styles.category}>Details of work</span>
                <p className={styles.category_item}>{item.explain}</p>
              </li>
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}