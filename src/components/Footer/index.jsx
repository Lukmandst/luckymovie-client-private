import Image from 'next/image'

import { Container, Col, Row } from 'react-bootstrap'
import logoPurple from '../../assets/images/logo/tickitz-purple.png'
import cineOne21 from '../../assets/images/cinemas/cineOne21.png'
import ebvid from '../../assets/images/cinemas/ebv.id.png'
import hiflix from '../../assets/images/cinemas/hiflix.png'
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi'

//assets 
import styles from '../../styles/Home.module.css'

import { useRouter } from "next/router";

export default function Footer() {
    const router = useRouter();
    return (
        <footer>
            <Container>
                <Row className={`${styles.footerTitle} d-flex justify-content-between my-5 mb-3`}>
                    <Col xs={12} md={4} className={`${styles.footerInfo} col-md-3 col-sm-12`}>
                        <a>
                            <Image
                                onClick={() => {
                                    router.push("/");
                                }}
                                className={styles.footerInfo}
                                src={logoPurple}
                                alt='Tickitz'
                            />
                        </a>
                        <p>
                            Stop waiting in line. Buy tickets conveniently, watch movies
                            quietly.
                        </p>
                    </Col>
                    <Col xs={12} md={2} className={`${styles.footerExplore} my-5 mb-3`}>
                        <h5><b>Explore</b></h5>
                        <div className='d-flex flex-md-column gap-2 justify-content-center flex-row flex-wrap pt-4'>
                            <div>
                                <p href='#'>Cinemps</p>
                            </div>
                            <div>
                                <p href=''>Movie List</p>
                            </div>
                            <div>
                                <p href=''>My Ticket</p>
                            </div>
                            <div>
                                <p href=''>Notification</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className={`my-5 mb-3`}>
                        <h5><b>Our Sponsor</b></h5>
                        <div className={`${styles.footerSponsor} d-flex flex-md-column flex-row flex-wrap mt-3 mb-3 `}>
                            <a href='#'>
                                <Image src={cineOne21}
                                    alt='ebv.id' />
                            </a>
                            <a href='#'>
                                <Image src={ebvid}
                                    alt='CineOne21' />
                            </a>
                            <a href='#'>
                                <Image src={hiflix}
                                    alt='hiflix' />
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className='col-12 col-md-3 mb-3 my-5'>
                        <h5><b>Follow us</b></h5>
                        <div className={`${styles.footerFollow} d-flex justify-content-center gap-2 flex-md-column flex-row flex-wrap pt-4`}>
                            <div>
                                <p href='#'>
                                    <FiFacebook />
                                    <span className=''> Tickitz Cinema id</span>
                                </p>
                            </div>
                            <div>
                                <p href='#'>
                                    <FiInstagram />
                                    <span className=''> tickitz.id</span>
                                </p>
                            </div>
                            <div>
                                <p href='#'>
                                    <FiTwitter />
                                    <span className=''> tickitz.id</span>
                                </p>
                            </div>
                            <div>
                                <p href='#'>
                                    <FiYoutube />
                                    <span className=''> Tickitz Cinema id</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3 mb-2 text-center'>
                    <div className='col-12'>
                        <p>© 2022 Tickitz. All Rights Reserved.</p>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}