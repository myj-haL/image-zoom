"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import styles from "./index.module.css";
import Image from "next/image";

export default function WorksModal ({img, name, explain, learn, skills, ...props}) {
  const closeModal = () => {
    props.onHide();
  }

  return (
    <Modal className={styles.modal}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={styles.modal_inner}>
        <button className={styles.close} type="button" onClick={closeModal}>
          <Image alt="close" src="./icon-close.svg" width={30} height={30} />
        </button>
        <h3 className={styles.title}>
          <p className={styles.sub_title}>Project Name</p>
          {name}
        </h3>
        
        <div className={styles.contents}>
          <div className={styles.left}>
            <p className={styles.explain}>{explain}</p>

            {learn && 
            <span className={styles.use_learn}>
              <p className={styles.category}>[Learn]</p>
              <p className={styles.learn_data}>{learn}</p>
            </span>
            }
            
            <span>
              <p className={styles.category}>[Skills]</p>
              <p>{skills}</p>
            </span>
          </div>
          <Image alt="img" src={img} width={1000} height={1000} className={styles.detail_img} />
        </div>
      </Modal.Body>
    </Modal>
  )
}