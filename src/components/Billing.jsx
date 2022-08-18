import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient "></div>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient "></div>
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden" /> billing & invoice.</h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`} > adipisicing temporibus distinctio recusandae accusamus, adipisci veniam omnis voluptatem, dolore corrupti deserunt eum cum excepturi.</p>
    <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <img src={apple} alt="apple store" className="w-[128px] h-[42px] object-contain cursor-pointer mr-5" />
      <img src={google} alt="google store" className="w-[128px] h-[42px] object-contain cursor-pointer " />
    </div>
    </div>
  </section>
);

export default Billing;
