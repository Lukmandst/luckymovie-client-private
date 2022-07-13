import LayoutOrder from "../../components/layout/LayoutOrder";
import Image from "next/image";
import cineOne21 from "../../assets/images/cinemas/cineOne21.png";
import hiflix from "../../assets/images/cinemas/hiflix.png";
import ibv from "../../assets/images/cinemas/ebv.id.png";
import styles from "../../styles/Order.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";
import Seat from "components/seat/Seat";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { currencyFormatter } from "helper/formatter";
import { useSelector } from "react-redux";

export default function Order() {
  const [seatPick, setSeatPick] = useState([]);
  const [reset, setReset] = useState(false);
  const [errmsg, seterrMsg] = useState(false);

  const router = useRouter();
  const { token } = useSelector((state) => state.auth);

  const {
    query: { title, price, movie_id, cinema_id, cinema_name, time, date },
  } = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <LayoutOrder title="Order Page">
        <Container className="py-5">
          <Row>
            <Col xs={12} md={8}>
              <div className={`mb-5`}>
                <h5>Movie Selected</h5>
                <div
                  className={`${styles.selectedMovies} d-flex flex-wrap justify-content-between my-4 align-items-center`}
                >
                  <h5>{title}</h5>
                  <div
                    onClick={() => router.back()}
                    className={`${styles.btnChange} btn btn-secondary`}
                  >
                    Change movie
                  </div>
                </div>
              </div>

              <div className={`styles.seatCinemas`}>
                <h5 className={styles.chooseTitle}>Choose Your Seat</h5>
                <Row
                  className={`${styles.selectedSeat} d-flex justify-content-center`}
                >
                  <Row className={`${styles.screen} justify-content-center`}>
                    <p
                      className="text-center"
                      style={{ fontWeight: "600", fontSize: "20px" }}
                    >
                      Screen
                    </p>
                    <div className={styles.screenCinema}></div>
                    <Seat
                      setSeatPick={setSeatPick}
                      seatPick={seatPick}
                      reset={reset}
                      setReset={setReset}
                    />
                  </Row>
                  <div className="my-5">
                    <Row>
                      <Col>
                        <h6>Seating key</h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={12}
                        className={`d-flex flex-row flex-wrap justify-content-evenly ${styles.setSeat}`}
                      >
                        <div className="d-flex flex-row align-items-center m-1">
                          <span className={styles.seatAvailable} />
                          Available
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <span className={styles.seatSelected} />
                          Selected
                        </div>

                        <div className="d-flex flex-row align-items-center">
                          <span className={styles.seatSold} />
                          Sold
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Row>
              </div>
              <div className="d-flex justify-content-center w-100">
                {errmsg && (
                  <div style={{ textAlign: "center", color: "#FF5B37" }}>
                    {errmsg}
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-between flex-wrap my-4">
                <div
                  className={styles.btnChangeMovies}
                  onClick={() => router.back()}
                >
                  Change your movie
                </div>
                <div
                  className={styles.btnCheckout}
                  onClick={() => {
                    if (seatPick.length > 0) {
                      router.push({
                        pathname: "/payment",
                        query: {
                          title,
                          price,
                          movie_id,
                          cinema_id,
                          cinema_name,
                          time,
                          date,
                          total_ticket: seatPick.length,
                          seats: seatPick,
                        },
                      });
                    } else {
                      seterrMsg("Choose Your Seat!");
                      setTimeout(() => {
                        seterrMsg("");
                        window.scrollTo(0, screen.height / 2);
                      }, 1000);
                    }
                  }}
                >
                  Checkout Now
                </div>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <h5>Order Info</h5>
              <div className={`${styles.orderInfo} px-4`}>
                <div className="text-center">
                  {cinema_name === "hiflix" ? (
                    <Image src={hiflix} alt="" />
                  ) : (
                    ""
                  )}
                  {cinema_name === "ebv.id" ? <Image src={ibv} alt="" /> : ""}
                  {cinema_name === "CineOne21" ? (
                    <Image src={cineOne21} alt="" />
                  ) : (
                    ""
                  )}
                  <h5>{cinema_name}</h5>
                </div>
                <Row className="d-flex justify-content-between mt-4">
                  <p className="col-md-6">Movie selected</p>
                  <h6 className={`${styles.textInfo} col-md-6`}>{title}</h6>
                </Row>
                <Row className="d-flex justify-content-between">
                  <p className="col-md-6">{date}</p>
                  <h6 className={`${styles.textInfo} col-md-6`}>{time}</h6>
                </Row>
                <Row className="d-flex justify-content-between">
                  <p className="col-md-6">One ticket price</p>
                  <h6 className={`${styles.textInfo} col-md-6`}>
                    {currencyFormatter.format(price)}
                  </h6>
                </Row>
                <Row className="r-flex justify-content-between">
                  <p className="col-md-6">Seat choosed</p>
                  <h6 className={`${styles.textInfo} col-md-6`}>
                    {seatPick.length === 1
                      ? seatPick
                      : seatPick.length > 1
                      ? seatPick.map((seat) => `${seat}, `)
                      : null}
                  </h6>
                </Row>
                <Row className="r-flex justify-content-center text-center">
                  <p
                    style={{
                      color: "red",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                    className="col-md-6 "
                    onClick={() => {
                      setSeatPick([]);
                      setReset(!reset);
                      setTimeout(() => {
                        setReset(false);
                      }, 50);
                    }}
                  >
                    Reset Seat
                  </p>
                </Row>
                <hr />
                <Row className="d-flex justify-content-between total align-items-center">
                  <h6 className="col-md-6">Total Payment</h6>
                  <p className={`${styles.textInfo} col-md-6`}>
                    <b>{currencyFormatter.format(price * seatPick.length)}</b>
                  </p>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </LayoutOrder>
      <Footer />
    </>
  );
}
