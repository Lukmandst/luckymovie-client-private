import styles from './Payment.module.css'
import Header from 'components/header/Header'
import Footer from 'components/Footer'
import Image from 'next/image'
import gpay from '../../assets/img/gpay.png'
import visa from '../../assets/img/visa.png'
import gopay from '../../assets/img/gopay.png'
import paypal from '../../assets/img/paypal.png'
import dana from '../../assets/img/dana.png'
import bca from '../../assets/img/bca.png'
import bri from '../../assets/img/bri.png'
import ovo from '../../assets/img/ovo.png'
import { Modal } from 'react-bootstrap'

import { useRouter } from 'next/router'
import { useState } from 'react'

const Payment = () => {
    const [show, setShow] = useState(false)

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
                        <Image src={gpay} alt="card_payment" onClick={()=>setShow(true)}/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={visa} alt="card_payment" onClick={()=>setShow(true)}/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={gopay} alt="card_payment" onClick={()=>setShow(true)}/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={paypal} alt="card_payment"onClick={()=>setShow(true)}/>
                    </div>
                </div>
                <div className={styles.topImg}>
                    <div className={styles.imgCard}>
                        <Image src={dana} alt="card_payment" onClick={()=>setShow(true)}/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={bca} alt="card_payment"/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={bri} alt="card_payment" onClick={()=>setShow(true)}/>
                    </div>
                    <div className={styles.imgCard}>
                        <Image src={ovo} alt="card_payment" onClick={()=>setShow(true)}/>
                    </div>
                </div>
                <div className={styles.line}>
                    <span></span>
                    <span>or</span>
                    <span></span>
                </div>
                <span>Pay via cash. , <b>See how it work</b></span>
            </div>
            <div className={styles.button}>
                <div className={styles.back}>Previous Step</div>
                <div className={styles.pay}>Pay Your Order</div>
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
    <Modal show={show} onHide={()=>{
        setShow(false)
    }} className={styles.logoutModal}>
        <Modal.Header>
          <Modal.Title className={styles.modalHeader}>Sorry</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>This payment method will come soon </Modal.Body>
        <Modal.Footer>
            <div className={styles.backModal} onClick={()=>setShow(false)}>OK</div>
        </Modal.Footer>
      </Modal>
    <Footer/>
    </>
  )
}

export default Payment