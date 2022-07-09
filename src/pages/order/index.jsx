import LayoutOrder from "../../components/layout/LayoutOrder";
import Image from "next/image";
import cineOne21 from "../../assets/images/cinemas/cineOne21.png";
import styles from "../../styles/Order.module.css";
import { Container, Row, Col } from "react-bootstrap";
import rupiah from "../../helper/formatter";
import Footer from "../../components/Footer"
import Seat from 'components/seat/Seat'

export default function Order() {
  return (
    <>
      <LayoutOrder title="Order Page">
          <Container className="py-5">
            <Row>
              <Col xs={12} md={8}>
                <div className={`mb-5`}>
                  <h5>Movie Selected</h5>
                  <div
                    className={`${styles.selectedMovies} d-flex flex-row justify-content-between my-4 align-items-center`}
                  >
                    <h5>Spider-Man: Homecoming</h5>
                    <div className={`${styles.btnChange} btn btn-secondary`}>
                      Change movie
                    </div>
                  </div>
                </div>

                <div className={`styles.seatCinemas`}>
                  <h5 className={styles.chooseTitle}>Choose Your Seat</h5>
                  <Row
                    className={`${styles.selectedMovies} d-flex justify-content-center`}
                  >
                    <Row className={`${styles.screen} justify-content-center`}>
                      <p className="text-center">Screen</p>
                      <hr className={styles.sreenCinema} />
                    <Seat />
                      
                    </Row>
                    <div className="my-5">
                      <Row>
                        <Col>
                          <h6>Seating key</h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} className={`d-flex flex-row flex-wrap justify-content-evenly`}>
                          <div className="d-flex flex-row align-items-center m-1">
                          <span className={styles.seatAvailable} />Available
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <span className={styles.seatSelected} />Selected
                          </div>
                          <div className="d-flex flex-row align-items-center">
                          <span className={styles.seatLove} />Love nest
                          </div>
                          <div className="d-flex flex-row align-items-center">
                          <span className={styles.seatSold} />Sold
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Row>
                </div>

                <div className="d-flex justify-content-between flex-wrap my-4">
                  <div className={styles.btnChangeMovies}>Change your movie</div>
                  <div className={styles.btnCheckout}>Checkout Now</div>
                </div>
              </Col>

              <Col xs={12} md={4}>
                <h5>Order Info</h5>
                <div className={`${styles.orderInfo} px-4`}>
                  <div className="text-center">
                    <Image src={cineOne21} alt="" />
                    <h5>CineOne21 Cinema</h5>
                  </div>
                  <Row className="d-flex justify-content-between mt-4">
                    <p className="col-md-6">Movie selected</p>
                    <h6 className={`${styles.textInfo} col-md-6`}>Spider-Man: Homecoming</h6>
                  </Row>
                  <Row className="d-flex justify-content-between">
                    <p className="col-md-6">Tuesday, 02 July 2022</p>
                    <h6 className={`${styles.textInfo} col-md-6`}>02.00 pm</h6>
                  </Row>
                  <Row className="d-flex justify-content-between">
                    <p className="col-md-6">One ticket price</p>
                    <h6 className={`${styles.textInfo} col-md-6`}>Rp 45000</h6>
                  </Row>
                  <Row className="r-flex justify-content-between">
                    <p className="col-md-6">Seat choosed</p>
                    <h6 className={`${styles.textInfo} col-md-6`}>C4, C5, C6</h6>
                  </Row>
                  <hr />
                  <Row className="d-flex justify-content-between total align-items-center">
                    <h6 className="col-md-6">Total Payment</h6>
                    <p className={`${styles.textInfo} col-md-6`}><b>Rp 45000</b></p>
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
