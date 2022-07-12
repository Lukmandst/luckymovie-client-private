import styles from "./ticket.module.css";
import Image from "next/image";
import Header from "components/header/Header";
import Footer from "components/Footer";
import { Download, Printer } from "react-bootstrap-icons";
import Head from "next/head";
import { GetUser, GetUserTicket } from "modules/axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { currencyFormatter } from "helper/formatter";
import jsPdf from "jspdf";
import html2canvas from "html2canvas";
import React, { useRef } from 'react'

const Ticket = () => {
  const { token } = useSelector((state) => state.auth);
  const {
    query: { id },
  } = useRouter();
  const { user } = GetUser(token);
  const { ticket, isLoading, isError } = GetUserTicket(id, token);
  console.log(ticket);
  console.log(user);

 

  const downloadPDF = () => {
    const exportElement = document.getElementById("ticket");
    html2canvas(exportElement, {
      onclone: (document) => {
        document.getElementById("download-btn")
        .style.visibility = "hidden";
        document.getElementById("download-btn-2")
        .style.visibility = "hidden";
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPdf({ orientation: "landscape" });
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`luckymovie-${id}.pdf`);
    });
  };

  const printPDF = () => {
    const exportElement = document.getElementById("ticket");
    html2canvas(exportElement, {
      onclone: (document) => {
        document.getElementById("download-btn")
        .style.visibility = "hidden";
        document.getElementById("download-btn-2")
        .style.visibility = "hidden";
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0); 
      const pdf = new jsPdf({ orientation: "landscape" });
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      window.open(pdf.output("bloburl"));
    });
  }

  const canvasRef = useRef()

  return (
    <>
      <Head>
        <title>Ticket Result</title>
      </Head>
      <Header />
      <div className={styles.container} id="ticket">
        <div className={styles.main}>
          <div className={styles.title}>Proof of Payment</div>
          <div className={styles.ticket}>
            <div className={styles.tickethead}>
              <div className={styles.lefthead}>
                <Image
                  src={require("../../assets/tickitz.png")}
                  alt="logo"
                  height="60%"
                  objectFit="scale-down"
                />
              </div>
              <div className={styles.midhead}>
                {user && user.first_name ? user.first_name : user && user.email}
              </div>
              <div className={styles.righthead}>
                <Image
                  src={require("../../assets/tickitz.png")}
                  alt="logo"
                  height="60%"
                  objectFit="scale-down"
                />
                <div className={styles.round1}></div>
              </div>
            </div>
            <div className={styles.body}>
              {ticket && Array.isArray(ticket) ? (
                ticket.map((data) => (
                  <div key={data.id} className={styles.details}>
                    <div className={styles.mainrow}>
                      <div className={styles.key}>Movie</div>
                      <div>{data.detail[0].movie}</div>
                    </div>
                    <div className={styles.row}>
                      <div>
                        <div className={styles.key}>Date</div>
                        <div className={styles.value}>
                          {data.detail[0].movie_date}
                        </div>
                      </div>
                      <div>
                        <div className={styles.key}>Time</div>
                        <div className={styles.value}>
                          {data.detail[0].movie_time}
                        </div>
                      </div>
                      <div>
                        <div className={styles.key}>Ticket ID</div>
                        <div className={styles.seatValue}>
                          {data.detail.map((ticket) => (
                            <>
                              <div className={styles.value}>
                                {ticket.ticket_id}
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div>
                        <div className={styles.key}>Count</div>
                        <div className={styles.value}>
                          {data.detail[0].count}
                        </div>
                      </div>
                      <div>
                        <div className={styles.key}>Seats</div>
                        <div className={styles.seatValue}>
                          {data.detail.map((ticket) => (
                            <>
                              <div className={styles.value}>{ticket.seat}</div>
                            </>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className={styles.key}>Price</div>
                        <div className={styles.value}>
                          {currencyFormatter.format(data.detail[0].total_price)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
              <div className={styles.barcode}>
                <Image
                  src={require("../../assets/qrc.png")}
                  alt="logo"
                  height="200%"
                  objectFit="cover"
                />
                <div className={styles.round2}></div>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div
              className={styles.button}
              onClick={downloadPDF}
              id="download-btn"
            >
              <Download />
              Download
            </div>
            <div
              className={styles.button}
              onClick={printPDF}
              // onClick={()=>printPDF(canvasRef.current)}
              id="download-btn-2"
            >
              <Printer />
              Print
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ticket;
