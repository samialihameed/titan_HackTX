// src/App.js or src/App.jsx
import React, { useEffect } from "react"; // Import useEffect
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => {
  // Place this code inside the react component
  useEffect(() => {
    window.plugSDK.init({
      // Please ensure you replace the app_id with your unique app id
      app_id: "don:core:dvrv-us-1:devo/IrXDLBAD:plug_setting/1",
    });
  }, []); // Empty dependency array means this useEffect runs once, similar to componentDidMount

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingx} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
