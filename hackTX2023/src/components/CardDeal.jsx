import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a smarter solution <br className="sm:block hidden" /> at your
        fingertips.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Engage in surveys tailored to reflect your emotional landscape and
        provide insights. With a tap, unlock a world where understanding your
        mind becomes as natural as breathing.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100]" />
          
    </div>
  </section>
);

export default CardDeal;
