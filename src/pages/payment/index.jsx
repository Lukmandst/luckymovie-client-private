import styles from './Payment.module.css'
import Header from 'components/header/Header'
import Footer from 'components/Footer'
import Image from 'next/image'
import gpay from '../../assets/img/gpay.png'
import { useRouter } from 'next/router'

const Payment = () => {

    const {query : {
        date,
        title,
        cinema,
        total_ticket,
        price
    }} = useRouter()
  return (
    <>
    <Header/>
    <div className={styles.container}>
        <div className={styles.paymentInfo}>
            <span>Payment Info</span>
            <div className={styles.cardPayment}>
                <div className={styles.cardPaymentItem}>
                    <span>Date & Time</span>
                    <span>{date}</span>
                </div>
                <div className={styles.cardPaymentItem}>
                    <span>Movie Title</span>
                    <span>{title}</span>
                </div>
                <div className={styles.cardPaymentItem}>
                    <span>Cinema Name</span>
                    <span>{cinema}</span>
                </div>
                <div className={styles.cardPaymentItem}>
                    <span>Number Of Tickets</span>
                    <span>{total_ticket}</span>
                </div>
                <div className={styles.cardPaymentItem}>
                    <span>Total Payment</span>
                    <span>{price * total_ticket}</span>
                </div>
            </div>
            <span>Choose A Payment Methode</span>
            <div className={styles.cardPaymentMethod}>
                <div className={styles.topImg}>
                    <div className={styles.imgCard}>
                        <Image src={gpay} alt="card_payment"/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={gpay} alt="card_payment"/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={gpay} alt="card_payment"/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={gpay} alt="card_payment"/>
                    </div>
                </div>
                <div className={styles.topImg}>
                    <div className={styles.imgCard}>
                        <Image src={gpay} alt="card_payment"/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={gpay} alt="card_payment"/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={gpay} alt="card_payment"/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={gpay} alt="card_payment"/>
                    </div>
                </div>
                <div className={styles.line}>
                    <span></span>
                    <span>or</span>
                    <span></span>
                </div>
                <span>Pay via cash. , <b>See how it work</b></span>
            </div>
        </div>
        <div className={styles.personalInfo}>
            <span>Personal Info</span>
            <div className={styles.cardPersonalInfo}>
                <label>Full Name</label>
                <input type="text" />
                <label>E-Mail</label>
                <input type="text" />
                <label>Phone Number</label>
                <input type="text" />
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Payment