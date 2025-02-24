import Image from "next/image";
import styles from "./index.module.css";

export default function Contacts () {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h3 className={styles.title}>Contacts</h3>
        <p className={styles.sub_title}>언제나 어떤 의견이든 소중히 귀담아 들으며 성장하겠습니다.</p>

        <div className={styles.sns_list}>
          <a href="mailto:myj262@gmail.com">
            <Image 
              src="./main/icon-mail.svg"
              alt="mail icon"
              width={50}
              height={50}
              className={styles.icons}
            />
          </a>
          <a href="tel:+821026189434">
            <Image 
              src="./main/icon-call.svg"
              alt="call icon"
              width={50}
              height={50}
              className={styles.icons}
            />
          </a>
          <a href="https://www.linkedin.com/in/yujung-moon-dev" target="_blank">
            <Image 
              src="./main/icon-linkedin.svg"
              alt="linked icon"
              width={50}
              height={50}
              className={styles.icons}
            />
          </a>
        </div>

      </div>
      <p className={styles.copyright}>
        © 2025. Moon Yu-jeong Portfolio. All rights reserved.
      </p>
    </div>
  )
}