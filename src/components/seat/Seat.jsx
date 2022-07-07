import { useState } from "react";
import styles from "./Seat.module.css";

const Seat = () => {
    const [seatPick, setSeatPick] = useState("")

    const listSeat = ['1A', '2A', '3A']
  return (
    <>
    <div className={styles.seatContainer}>
        <label htmlFor="">
            <input type="checkbox" onClick={(e)=>{
            setSeatPick(e.target.value)
        }}/>
        </label>
        {/* <div className={styles.seat}></div> */}
    </div>
    </>
  )
}

export default Seat