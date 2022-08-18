import React from "react";
import styles from "../styles";
import { stats } from "../constants";
const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div className={`flex-1 flex justify-start items-center flex-row m-3`} key={stat.id}>
        <h4 className="font-poppin font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppin font-normal xs:text-[20px] text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
