import styles from "./index.module.css";
import worksList from "./worksList";
import SectionTitle from "@/app/components/SectionTitle";

export default function Works () {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <SectionTitle 
          title="Works"
          subTitle="Company"
        />

        <div className={styles.works_list}>
          {worksList.map((item, idx) => (
            <div className={styles.works_item} key={item.id}></div>
          ))}
        </div>
      </div>
    </div>
  )
}