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
import { createTransaction } from 'modules/axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Payment = () => {
    const [show, setShow] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    const [payment_method, setPayment_method] = useState('')
    const { query: {
        title,
        price,
        movie_id,
        cinema_id,
        cinema_name,
        time,
        date,
        total_ticket,
        seats
    } } = useRouter()
    const token = useSelector(state => state.auth.token)
    const body = {
        cinema_id,
        movie_id,
        ticket_qty: total_ticket,
        date,
        time,
        total_payment: price * total_ticket,
        seats,
        payment_method
    }
    console.log(body);
    const payOrder = async () => {
        try {
            const res = await createTransaction(body, token)
            console.log(res);
            alert(res.data.msg)
            setShowPayment(false);
        } catch (error) {
            console.log(error);
        }
    }

    const handleShowPayment = () => setShowPayment(true);
    const handleClosePayment = () => setShowPayment(false);
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.paymentInfo}>
                    <span>Payment Info</span>
                    <div className={styles.cardPayment}>
                        <div className={styles.cardPaymentItem}>
                            <span>Date & Time</span>
                            <span>{`${date} & ${time}`}</span>
                        </div>
                        <div className={styles.cardPaymentItem}>
                            <span>Movie Title</span>
                            <span>{title}</span>
                        </div>
                        <div className={styles.cardPaymentItem}>
                            <span>Cinema Name</span>
                            <span>{cinema_name}</span>
                        </div>
                        <div className={styles.cardPaymentItem}>
                            <span>Number Of Tickets</span>
                            <span>{total_ticket}</span>
                        </div>
                        <div className={styles.cardPaymentItem}>
                            <span>Number Of Seats</span>
                            <span>{`${seats}   `}</span>
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
                                <Image src={gpay} alt="card_payment" onClick={() => setShow(true)} />
                            </div>
                            <div className={styles.imgCard}>
                                <Image src={visa} alt="card_payment" onClick={() => setShow(true)} />
                            </div>
                            <div className={styles.imgCard}>
                                <Image src={gopay} alt="card_payment" onClick={() => setShow(true)} />
                            </div>
                            <div className={styles.imgCard}>
                                <Image src={paypal} alt="card_payment" onClick={() => setShow(true)} />
                            </div>
                        </div>
                        <div className={styles.topImg}>
                            <div className={styles.imgCard}>
                                <Image src={dana} alt="card_payment" onClick={() => setShow(true)} />
                            </div>
                            <div className={styles.imgCard}>
                                <Image src={bca} alt="card_payment" onClick={() => {
                                    setPayment_method('klikBca')
                                }} />
                            </div>
                            <div className={styles.imgCard}>
                                <Image src={bri} alt="card_payment" onClick={() => setShow(true)} />
                            </div>
                            <div className={styles.imgCard}>
                                <Image src={ovo} alt="card_payment" onClick={() => setShow(true)} />
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
                        <div className={styles.pay} onClick={handleShowPayment}>Pay Your Order</div>
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
            <Modal show={show} onHide={() => {
                setShow(false)
            }} className={styles.logoutModal}>
                <Modal.Header>
                    <Modal.Title className={styles.modalHeader}>Sorry</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>This payment method will come soon </Modal.Body>
                <Modal.Footer>
                    <div className={styles.backModal} onClick={() => setShow(false)}>OK</div>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showPayment}
                onHide={handleClosePayment}
                className={styles.PaymentModal}
            >
                <Modal.Header>
                    <Modal.Title className={styles.modalHeader}>Warning !</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    Do you want to pay this order?
                </Modal.Body>
                <Modal.Footer>
                    <div className={styles.modalYesButton} onClick={payOrder}>
                        Yes
                    </div>
                    <div className={styles.modalNoButton} onClick={handleClosePayment}>
                        No
                    </div>
                </Modal.Footer>
            </Modal>
            <Footer />
        </>
    )
}

export default Payment