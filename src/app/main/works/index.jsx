import styles from "./index.module.css";
import worksList from "./worksList";
import SectionTitle from "@/app/components/SectionTitle";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function Works () {
  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };
  
  // Create chunks with 3 items per group
  const groupedWorksList = chunkArray(worksList, 3);
  
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <SectionTitle 
          title="Works"
          subTitle="Company"
          option='white'
        />

        
        <Swiper className={styles.works_list} 
          pagination={true} 
          modules={[Pagination]} 
          slidesPerView={1} 
          spaceBetween={30}
          >
            {groupedWorksList.map((group, groupIdx) => (
              <SwiperSlide className={styles.works_item} key={groupIdx}>
                {group.map((item, idx) => (
                  <div className={styles.group} key={item.id}>
                    <div className={styles.group_left}>
                      <h3 className={styles.name}>
                        {item.company}
                        <p>{item.date}</p>
                      </h3>
                      <span className={styles.position}>{item.position}</span>
                    </div>

                    <ul className={styles.group_right}>
                      {item.role.map((item2) => (
                        <li key={item2.id}>
                          {item2.content}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}