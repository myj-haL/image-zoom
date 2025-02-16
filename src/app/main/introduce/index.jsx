import styles from "./index.module.css";
import introList from "./introList";

export default function Introduce () {

  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.sub_title}>Introduce</span>
          <h3 className={styles.title}>저는 UI 마크업 개발자, <br className={styles.line_wrap}/>웹 퍼블리셔 <br className={styles.line_wrap} />문유정 입니다.</h3>
        </div>

        <div className={styles.right}>
          {introList.map((item, idx) => (
            <div className={styles.intro_box} key={item.id}>
              <span className={styles.category}>{item.category}</span>
              {item.number && 
                <span className={styles.number}>{item.number} <p className={styles.plus}>+</p></span>
              }
              <p className={styles.contents}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}