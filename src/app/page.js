"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const wrapRef = useRef();
  const firstSecRef = useRef();
  console.clear();


  useEffect(() => {
    gsap
    .timeline({
      scrollTrigger: {
        trigger:wrapRef.current,
        start:'top top',
        end:'+=300%',
        pin:true,
        markers:true,
        scrub:true
      }
    })
    .to('img', {
      scale:2.5,
      z:450,
      transformOrigin:'center center',
      ease:'power1.inOut'
    })
    .to(
      firstSecRef.current,
      {
        scale:1.1,
        transformOrigin:'center center',
        ease:'power1.inOut'
      },
      '<'
    );

  }, []);

  return (
      <div className={styles.wrapper} ref={wrapRef}>
        <div className={styles.content}>
          <section className={`${styles.section} ${styles.first}`} ref={firstSecRef}>?</section>
          <section className={`${styles.section} ${styles.second}`}></section>
          <section className={`${styles.section} ${styles.third}`}></section>
        </div>
        <div className={styles.img_box}>
          <Image 
            src="/main/bg_new.png" 
            alt="bg img" 
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
  );
}
