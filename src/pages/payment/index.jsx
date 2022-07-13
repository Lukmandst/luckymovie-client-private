import styles from "./Payment.module.css";
import Header from "components/header/Header";
import Footer from "components/Footer";
import Image from "next/image";
import gpay from "../../assets/img/gpay.png";
import visa from "../../assets/img/visa.png";
import gopay from "../../assets/img/gopay.png";
import paypal from "../../assets/img/paypal.png";
import dana from "../../assets/img/dana.png";
import bca from "../../assets/img/bca.png";
import bri from "../../assets/img/bri.png";
import ovo from "../../assets/img/ovo.png";
import { Modal } from "react-bootstrap";
import { createTransaction, GetUser } from "modules/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import { currencyFormatter } from "helper/formatter";

const Payment = () => {
  const [show, setShow] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [payment_method, setPayment_method] = useState("");
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [msg, setMsg] = useState(false);
  const [errmsg, seterrMsg] = useState(false);
  const {
    query: {
      title,
      price,
      movie_id,
      cinema_id,
      cinema_name,
      time,
      date,
      total_ticket,
      seats,
    },
  } = useRouter();
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);
  const { user } = GetUser(token);
  const body = {
    cinema_id,
    movie_id,
    ticket_qty: total_ticket,
    date,
    time,
    total_payment: price * total_ticket,
    seats: !Array.isArray(seats) ? new Array(seats) : seats,
    payment_method,
  };
  console.log(body);
  const payOrder = async () => {
    setMsg(false);
    seterrMsg(false);
    setLoadingPayment(false);
    try {
      setLoadingPayment(true);
      if (!payment_method) {
        setShowPayment(false);
        setLoadingPayment(false);
        seterrMsg("Please choose a payment method");
        setTimeout(() => {
          seterrMsg("");
        }, 1000);
      } else {
        setLoadingPayment(true);
        const res = await createTransaction(body, token);
        // console.log(res);
        setLoadingPayment(false);
        setMsg("Transaction sucessfully created,please make a payment");
        setTimeout(() => {
          // setMsg(false);
          window.open(res.data.url);
          router.push("/profile");
        }, 1000);
      }
      setShowPayment(false);
    } catch (error) {
      setLoadingPayment(false);
      setShowPayment(false);
      // seterrMsg(error.response ? error.response.data.err.msg : error.response);
      console.log(error);
      setTimeout(() => {
        seterrMsg(false);
      }, 2000);
    }
  };

  const handleShowPayment = () => setShowPayment(true);
  const handleClosePayment = () => setShowPayment(false);
  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token]);
  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
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
              <span>{currencyFormatter.format(price * total_ticket)}</span>
            </div>
          </div>
          <span>Choose A Payment Methode</span>
          <div className={styles.cardPaymentMethod}>
            <div className={styles.topImg}>
              <div className={styles.imgCardDisabled}>
                <Image
                  className={styles.imgDisable}
                  src={gpay}
                  alt="card_payment"
                  onClick={() => setShow(true)}
                />
              </div>
              <div className={styles.imgCardDisabled}>
                <Image
                  className={styles.imgDisable}
                  src={visa}
                  alt="card_payment"
                  onClick={() => setShow(true)}
                />
              </div>
              <div className={styles.imgCardDisabled}>
                <Image
                  className={styles.imgDisable}
                  src={gopay}
                  alt="card_payment"
                  onClick={() => setShow(true)}
                />
              </div>
              <div className={styles.imgCardDisabled}>
                <Image
                  className={styles.imgDisable}
                  src={paypal}
                  alt="card_payment"
                  onClick={() => setShow(true)}
                />
              </div>
            </div>
            <div className={styles.topImg}>
              <div className={styles.imgCardDisabled}>
                <Image
                  className={styles.imgDisable}
                  src={dana}
                  alt="card_payment"
                  onClick={() => setShow(true)}
                />
              </div>
              <div
                className={
                  payment_method ? styles.imgCardAvtive : styles.imgCard
                }
              >
                <Image
                  src={bca}
                  alt="card_payment"
                  onClick={() => {
                    setPayment_method("klikBca");
                  }}
                />
              </div>
              <div className={styles.imgCardDisabled}>
                <Image
                  className={styles.imgDisable}
                  src={bri}
                  alt="card_payment"
                  onClick={() => setShow(true)}
                />
              </div>
              <div className={styles.imgCardDisabled}>
                <Image
                  className={styles.imgDisable}
                  src={ovo}
                  alt="card_payment"
                  onClick={() => setShow(true)}
                />
              </div>
            </div>
            <div className={styles.line}>
              <span></span>
              <span>or</span>
              <span></span>
            </div>
            <span>
              Pay via cash. , <b>See how it work</b>
            </span>
          </div>
          <div className="d-flex justify-content-center w-100">
            {msg ? (
              <div style={{ textAlign: "center", color: "#1EC15F" }}>{msg}</div>
            ) : Array.isArray(errmsg) ? (
              errmsg.map((result, i) => (
                <div key={i} style={{ textAlign: "center", color: "#FF5B37" }}>
                  {result.msg}
                </div>
              ))
            ) : (
              <div style={{ textAlign: "center", color: "#FF5B37" }}>
                {errmsg}
              </div>
            )}
          </div>
          <div className={styles.button}>
            <div className={styles.back} onClick={() => router.back()}>
              Previous Step
            </div>
            <div className={styles.pay} onClick={handleShowPayment}>
              {loadingPayment ? (
                <>
                  <div className="spinner-border text-light" role="status" />
                </>
              ) : (
                "Pay Your Order"
              )}
            </div>
          </div>
        </div>
        <div className={styles.personalInfo}>
          <span>Personal Info</span>
          <div className={styles.cardPersonalInfo}>
            <label>Full Name</label>
            <input
              type="text"
              disabled
              defaultValue={`${
                user && user.first_name ? user.first_name : user && user.email
              } ${user && user.last_name ? user.last_name : null}`}
            />
            <label>E-Mail</label>
            <input disabled type="text" defaultValue={user && user.email} />
            <label>Phone Number</label>
            <input
              defaultValue={user && user.phone_number}
              type="text"
              placeholder="Input your phone number"
            />
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        className={styles.logoutModal}
      >
        <Modal.Header>
          <Modal.Title className={styles.modalHeader}>Sorry</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          This payment method will come soon{" "}
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.backModal} onClick={() => setShow(false)}>
            OK
          </div>
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
  );
};

export default Payment;
