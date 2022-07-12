import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
import dummy from "../../assets/img/defaultProfile.png";
import searchIcon from "../../assets/img/searchIcon.png";
import { useEffect, useState } from "react";
import {
  NavDropdown,
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Modal,
  Button,
} from "react-bootstrap";
import { useRouter } from "next/router";
import { GetUser } from "modules/axios";

import dynamic from "next/dynamic";
import Link from "next/link";
import { logoutAction } from "redux/actionCreators/auth";
import axios from "axios";
import HeaderAfterLoginResponsive from "./HeaderAfterLoginResponsive";
import HeaderAfterLogin from "./HeaderAfterLoginNormal";

const Header = () => {
  const [showToggle, setShowToggle] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleShowLogout = () => setShow(true);
  const handleCloseLogout = () => setShow(false);

  const handlerSignOut = async () => {
    try {
      const config = { headers: { "x-access-token": `${token}` } };
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_HOST}/auth/signout`,
        config
      );
      console.log(response);
      dispatch(logoutAction());
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  // if (isError) {
  //   dispatch(logoutAction());
  // }


  return (
    <>
      <Navbar expand="lg">
        <div className="container-fluid mx-5">
          <Navbar.Brand
            className={styles.brandLogo}
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              src={logo}
              alt="logo tickitz"
              className="dflex col-md-2"
              style={{ cursor: "pointer" }}
            />
          </Navbar.Brand>
          <Navbar className="row navbar-collapse collapse">
            <Nav className="mr-auto">
              <Nav.Link href="/">Movie</Nav.Link>
              <Nav.Link href="/profil">Profil</Nav.Link>
              <Nav.Link href="/profil">My Ticket</Nav.Link>
            </Nav>
            <div className="d-flex flex-row justify-content-end navbar-nav-right align-items-center">
              <ul className="navbar-nav d-flex align-items-center">
                <li className="nav-item dropdown text-center">
                  <NavDropdown
                    title="Location"
                    id="basic-nav-dropdown"
                    className="nav-link"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Jakarta
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Karawang
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Bandung
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <div className="d-md-flex ">
                  <li className="mx-2 my-auto nav-item d-flex align-items-center ">
                    <Image src={searchIcon} alt="icon search" />
                  </li>
                  {!token ? (
                    <>
                      <li className="mx-2 nav-item">
                        <div>
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => {
                              router.push("/signup");
                            }}
                          >
                            Sign Up
                          </button>
                        </div>
                      </li>
                      <li className="mx-2 nav-item">
                        <div>
                          <button
                            className="btn"
                            onClick={() => {
                              router.push("/signin");
                            }}
                          >
                            Sign In
                          </button>
                        </div>
                      </li>
                    </>
                  ) : (
                    <HeaderAfterLogin
                      showToggle={showToggle}
                      setShowToggle={setShowToggle}
                      handleShowLogout={handleShowLogout}
                    />
                  )}
                </div>
              </ul>
            </div>
          </Navbar>

          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1C16 1.26522 15.8946 1.51957 15.7071 1.70711C15.5196 1.89464 15.2652 2 15 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1Z"
                fill="black"
              />
              <path
                d="M0 13C0 12.7348 0.105357 12.4804 0.292893 12.2929C0.48043 12.1054 0.734784 12 1 12H15C15.2652 12 15.5196 12.1054 15.7071 12.2929C15.8946 12.4804 16 12.7348 16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H1C0.734784 14 0.48043 13.8946 0.292893 13.7071C0.105357 13.5196 0 13.2652 0 13Z"
                fill="black"
              />
              <path
                d="M7 6C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8H15C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7C16 6.73478 15.8946 6.48043 15.7071 6.29289C15.5196 6.10536 15.2652 6 15 6H7Z"
                fill="black"
              />
            </svg>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="d-flex flex-column align-items-center d-lg-none">
              <div className="p-2 mt-4 container nav-mobile-content-search">
                <input
                  className="form-control "
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="hr"></div>
              <div className="p-2 py-3">
                <NavDropdown
                  title="Location"
                  id="basic-nav-dropdown"
                  className="nav-link"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Jakarta
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Karawang
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Bandung
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="hr"></div>
              <div className="p-2 py-3">
                <a href="#"> Movies</a>
              </div>
              <div className="hr"></div>
              <div className="p-2 py-3">
                <a href="#"> Cinema</a>
              </div>
              <div className="hr"></div>
              <div className="p-2 py-3">
                <a href="#"> Buy Ticket</a>
              </div>

              <div className="hr"></div>
              {!token ? (
                <>
                  <div className="p-2 py-3">
                    <div>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => {
                          router.push("/signup");
                        }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                  <div className="p-2 py-3">
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          router.push("/signin");
                        }}
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <HeaderAfterLoginResponsive
                  showToggle={showToggle}

                  handleShowLogout={handleShowLogout}
                />
              )}
              <div className="hr"></div>
              <div className="mt-5 p-2 copyrigth">
                © 2022 Tickitz. All Rights Reserved.
              </div>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Modal
        show={show}
        onHide={handleCloseLogout}
        className={styles.logoutModal}
      >
        <Modal.Header>
          <Modal.Title className={styles.modalHeader}>Warning !</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          Do you want to logout?
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.modalYesButton} onClick={handlerSignOut}>
            Yes
          </div>
          <div className={styles.modalNoButton} onClick={handleCloseLogout}>
            No
          </div>
        </Modal.Footer>
      </Modal>
    </>
    // <>
    //   <div className={styles.container}>
    //     <div className={styles.left}>
    //       <Image src={logo} alt="logo" />
    //       <ul>
    //         <li>Movies</li>
    //         <li>Cinema</li>
    //         <li>Buy Ticket</li>
    //       </ul>
    //     </div>
    //     <div className={styles.right}>
    //       <div className={`${styles.item} ${showToggle ? styles.show : ""}`}>
    //         <span>Location</span>
    //         <Image src={searchIcon} alt="search" />
    //         <Image src={dummy} alt="profile" />
    //       </div>
    //       <div
    //         className={styles.toggle}
    //         onClick={() => {
    //           if (!showToggle) {
    //             setShowToggle(true);
    //           }
    //           if (showToggle) {
    //             setShowToggle(false);
    //           }
    //         }}
    //       >

    //         <span></span>
    //          <span></span>
    //          <span></span>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
