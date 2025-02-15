"use client";

import styles from "./index.module.css";
import experienceList from "../experienceList";
import Image from "next/image";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useState } from "react";
import WorksModal from "@/app/components/WorksModal";

export default function Pc () {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalShow, setModalShow] = useState(false);


  return (
    <div className={styles.wrap}>
      <ResponsiveMasonry
        className={styles.container}
        columnsCount={3}
        gutterBreakpoints={{1024: "30px"}}
      >
        <Masonry className={styles.masonry_list}>
          {experienceList.map((item) => (
            <button type="button" className={styles.img_wrap} key={item.id} 
            onClick={() => {
              setModalShow(true)
              setSelectedItem(item)
            }}
            >
              {/* <Image alt="img" src={item.img} fill /> */}
              <img alt="img" src={item.img}  style={{ aspectRatio:item.ratio}}  />
            </button>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* 모달 */}
      {selectedItem &&
        <WorksModal
          show={modalShow}
          img={selectedItem.detailImg}
          explain={selectedItem.explain}
          name={selectedItem.name}
          skills={selectedItem.skills}
          {...(selectedItem.learn ? { learn: selectedItem.learn } : {})}
          onHide={() => {
            setModalShow(false);
            setSelectedItem(null);
          }}
        />
      }

    </div>

  )
}