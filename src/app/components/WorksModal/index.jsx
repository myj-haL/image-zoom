"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./index.module.css";
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';

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
          <Image alt="close" src="/icon-close.svg" width={30} height={30} />
        </button>
        <h3 className={styles.title}>
          <p>Project Name</p>
          {name}
        </h3>
        
        <div className={styles.contents}>
          <div className={styles.left}>
            <p>{explain}</p>
            <span>
              <p className={styles.category}>[Learn]</p>
              <p>{learn}</p>
            </span>
            <span>
              <p className={styles.category}>[Skills]</p>
              <p>{skills}</p>
            </span>
          </div>
          <Image alt="img" src={img} width={1000} height={1000} />
        </div>
      </Modal.Body>
    </Modal>
  )
}