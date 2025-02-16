import styles from "./index.module.css";
import SectionTitle from "@/app/components/SectionTitle";
import useResponsive from "@/hooks/useMediaQuery";
import Mobile from "./Mobile";
import Pc from "./Pc";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
          {innerWidth > 1024 && <p className={styles.gray}>(*주요 프로젝트 Click!)</p>}
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