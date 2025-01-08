"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from '@gsap/react'; 

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const wrapRef = useRef(null);
  const firstSecRef = useRef(null);
  const imgBoxRef = useRef(null)
  console.clear();

  useGSAP(() => {
    const wrapEl = wrapRef.current;
    const firstSecEl = firstSecRef.current;

    gsap
    .timeline({
      defaults: {
        duration: 1,
      },
      scrollTrigger: {
        trigger:wrapEl,
        scrub:1,
        start:'top top',
        end:'+=200%',
        pin:true,
        
      }
    })
    .to(imgBoxRef.current, {
      scale:2.5,
      z:450,
      transformOrigin:'center center',
      ease:'power1.inOut'
    })
    .to(
      firstSecEl,
      {
        scale:1,
        transformOrigin:'center center',
        ease:'power1.inOut',
      },
      '<'
    );
  }, { scope: wrapRef.current });

  return (
      <div className={styles.container} ref={wrapRef}>
        <div className={styles.img_box}>
          <div className={styles.animate_inner} ref={imgBoxRef}>
            <div className={styles.title_box}>
              <p>Beyond</p>
              <p>One&apos;s</p> 
              <p>Limits</p>
            </div>
            <Image 
              src="/main/bg.png" 
              alt="bg img" 
              width={1920}
              height={1080}
            />
          
            <span className={styles.mouse_icon}>
              <Image 
                src="/icon-circle-down.svg"
                alt="down icon"
                width={58}
                height={58}
              />
            </span>
          </div>
        </div>

        <div className={styles.content}>
          <section className={`${styles.section} ${styles.first}`} ref={firstSecRef}></section>
          <section className={`${styles.section} ${styles.second}`}></section>
          <section className={`${styles.section} ${styles.third}`}></section>
        </div>
      </div>
  );
}
