import styles from "./index.module.css";
import SectionTitle from "@/app/components/SectionTitle";
import useResponsive from "@/hooks/useMediaQuery";
import Mobile from "./Mobile";
import Pc from "./Pc";

export default function Experience () {
  const innerWidth = useResponsive();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <SectionTitle
            title="Projects"
            subTitle="Experience"
          />
          {innerWidth > 1024 && <p>(*주요 프로젝트)</p>}
        </div>

        {innerWidth > 1024 ? 
          <Pc /> 
          :
          <Mobile />
        }
      </div>
    </div>
  )
}