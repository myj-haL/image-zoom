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
              <Image alt="images" src={item.img} width={300} height={300} />
            </div>
            <ul className={styles.intro}>
              <li>
                <span>Project name</span>
                <p>{item.name}</p>
              </li>
              <li>
                <span>Skills</span>
                <p>{item.skills}</p>
              </li>
              <li>
                <span>Details of work</span>
                <p>{item.explain}</p>
              </li>
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}