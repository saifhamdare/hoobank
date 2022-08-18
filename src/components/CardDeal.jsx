import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";
import { card } from "../assets";
const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5 `}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus totam, ullam voluptatem esse fugit eveniet fugiat. Aperiam fugiat voluptates eum.</p>
      <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
