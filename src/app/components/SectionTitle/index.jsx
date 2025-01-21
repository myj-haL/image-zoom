import styles from "./index.module.css";

export default function sectionTitle ({subTitle, title}) {
  return (
    <div className={styles.wrap}>
      <span className={styles.sub_title}>{subTitle}</span>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}