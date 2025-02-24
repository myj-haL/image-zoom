"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from '@gsap/react'; 
import Introduce from "./main/introduce";
import Contacts from "./main/contacts";
import Skills from "./main/skills";
import Works from "./main/works";
import Experience from "./main/experience";

export default function Home() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const wrapRef = useRef(null);
  const firstSecRef = useRef(null);
  const imgBoxRef = useRef(null);
  const titleBoxRef = useRef(null);
  console.clear();

  useGSAP(() => {
    const wrapEl = wrapRef.current;
    const firstSecEl = firstSecRef.current;
    const scaleValue = window.innerWidth < 1024 ? 5.5 : 4.5;
    const zValue = window.innerWidth >= 1024 ? 450 : 650;

    gsap
      .timeline({
      defaults: {
        duration: 1, // 기본 지속 시간
      },
      scrollTrigger: {
        trigger: wrapEl, // 전체 타임라인의 ScrollTrigger
        scrub: 1,        // 스크롤과 동기화
        start: "top top",
        end: "+=200%",
        pin: true,       // 요소 고정
      },
    })
    // 첫 번째 애니메이션
    .to(imgBoxRef.current, {
      scale: scaleValue,
      z: zValue,
      transformOrigin: "center center",
      ease: "power1.inOut",
    })
    // 두 번째 애니메이션
    .fromTo(titleBoxRef.current, 
      {opacity: 0, y: 20},
      {opacity: 1, y: -20, duration: 1}
    );
  }, [wrapRef.current, imgBoxRef.current, titleBoxRef.current ]);

  const basePath = process.env.NODE_ENV === "production" ? "/image-zoom" : "";

  return (
      <div className={styles.container} ref={wrapRef}>
        <div className={styles.img_box}>
          <div className={styles.animate_inner} ref={imgBoxRef}>
            <div className={styles.title_box}>
              <p className={styles.in_title}>Beyond</p>
              <p className={styles.in_title}>
                One&apos;s
              </p> 
              <p className={styles.in_title}>Limits</p>
            </div>
            <Image 
              src="./main/bg.png" 
              alt="bg img" 
              width={1920}
              height={1080}
              className={styles.front_img}
            />
          
            <span className={styles.mouse_icon}>
              <Image 
                src="./icon-circle-down.svg"
                alt="down icon"
                width={58}
                height={58}
                className={styles.in_icon}
              />
            </span>
          </div>
        </div>

        <div className={styles.content}>
          <section className={`${styles.section} ${styles.first}`} ref={firstSecRef} style={{backgroundImage:`url("${basePath}/main/inner_bg.png")`}}>
            <div className={styles.first_title_box} ref={titleBoxRef}>
              <p className={styles.in_title}>Toward</p>
              <p className={styles.in_title}>infinite</p>
              <p className={styles.in_title}>possibilities</p>
            </div>
          </section>

          <Introduce />
          <Works />
          <Experience />
          <Skills />
          <Contacts />
        </div>
      </div>
  );
}

