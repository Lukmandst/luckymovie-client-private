import styles from "./ticket.module.css";
import Image from "next/image";
import Header from "components/header/Header";
import Footer from "components/Footer";
import { Download, Printer } from "react-bootstrap-icons";

const Ticket = () => {

  return (
    <>
    <Header/>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.title}>Proof of Payment</div>
          <div className={styles.ticket}>
            <div className={styles.tickethead}>
              <div className={styles.lefthead}>
                <Image src={require("../../assets/tickitz.png")} alt="logo" height="60%" objectFit="scale-down" />
              </div>
              <div className={styles.midhead}>Admit One</div>
              <div className={styles.righthead}>
                <Image src={require("../../assets/tickitz.png")} alt="logo" height="60%" objectFit="scale-down" />
                <div className={styles.round1}></div>
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.details}>
                <div className={styles.mainrow}>
                  <div className={styles.key}>Movie</div>
                  <div>Spider-Man: Homecoming</div>
                </div>
                <div className={styles.row}>
                  <div>
                    <div className={styles.key}>Date</div>
                    <div className={styles.value}>07 July</div>
                  </div>
                  <div>
                    <div className={styles.key}>Time</div>
                    <div className={styles.value}>02:00pm</div>
                  </div>
                  <div>
                    <div className={styles.key}>Category</div>
                    <div className={styles.value}>PG-13</div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div>
                    <div className={styles.key}>Count</div>
                    <div className={styles.value}>3 pieces</div>
                  </div>
                  <div>
                    <div className={styles.key}>Seats</div>
                    <div className={styles.value}>C4, C5, C6</div>
                  </div>
                  <div>
                    <div className={styles.key}>Price</div>
                    <div className={styles.value}>$30.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.barcode}>
                <Image src={require("../../assets/qrc.png")} alt="logo" height="150%" objectFit="contain" />
                <div className={styles.round2}></div>
              </div>
            </div>
          </div>
          <div  className={styles.buttons}>
            <div className={styles.button}><Download/>Download</div>
            <div className={styles.button}><Printer/>Print</div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default Ticket;