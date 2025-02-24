import styles from "./index.module.css";
import SectionTitle from "@/app/components/SectionTitle";
import skillsList from "./skillsList";
import Image from "next/image";

export default function Skills () {
  return (
    <div className={styles.container}>
      <div className={styles.inner}> 
        <SectionTitle 
          title="Skills"
          subTitle="Ability value"
        />

        <div className={styles.flex_wrap}>
          <Image 
            alt=""
            src="./main/skill-left.png"
            width={500}
            height={500}
            className={styles.left_img}
          />

          <div className={styles.right}>
            <ul className={styles.skill_list}>
              {skillsList.map((item, idx) => (
                <li key={item.id} className={styles.skill_item}>
                  <Image 
                    alt="skill icon"
                    src={item.img}
                    width={55}
                    height={55}
                    className={styles.skill_logo}
                  />
                  <p className={styles.skill_data}>{item.name}</p>
                </li>
              ))}
            </ul>

            <Image 
              alt="plus"
              src="./main/icon-plus.svg"
              width={25}
              height={25}
              className={styles.plus}
            />

            <p className={styles.other_skill}>
              Styled-components, UI Framework, 
              CSS Modules, Php, Amazon S3, Jira
            </p>

          </div>
        </div>


        <a href="" download className={styles.download}>
          Get my resume
        </a>
      </div>
    </div>
  )
}
