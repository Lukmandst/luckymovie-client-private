import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "./Seat.module.css";

const Seat = () => {
    const [seatPick, setSeatPick] = useState([])
    const [soldSeat, setSoldSeat] = useState(['3B', '2A', '5C', '4B'])
    const [newAvail, setNewAvail] = useState([])

    
    const listColumn = (number, alphabet)=>{
        let length = 14
        let seat = []
        for(number>0;number<=length;number++){
            seat.push(number+alphabet)
        }
        return seat
    }
    console.log(seatPick);
    const availSeat = (alpha)=>{
        const variable =  listColumn(1, [alpha]).filter((item, i)=>{
            return  !soldSeat.includes(item)
        })
        return variable
    }
    console.log(availSeat("A"));

  return (
    <>
    <div className={styles.seatContainer}>
        <div className={styles.tableSeat}>
        <label htmlFor="mark">
        {listColumn(1, "A").map((data, i)=>
            <>
            <input type="checkbox" key={i} id="mark" onClick={()=>{
                setSeatPick([...seatPick, data])
            }} 
            // checked={availSeat("A").includes(data) ? false : true}
            value={data+"A"} 
            disabled={availSeat("A").includes(data) ? false : true}
            />
        </>)}
        </label>
        <label htmlFor="mark">
        {listColumn(1, "B").map((data, i)=>
            <>
            <input type="checkbox" key={i} id="mark" onClick={(e)=>{
                setSeatPick([...seatPick, data])
            }} checked={availSeat("B").includes(data) ? false : true}
            value={data} 
            disabled={availSeat("B").includes(data) ? false : true}
            />
        </>)}
        </label>       
        </div>
    </div>
    </>
  )
}

export default Seat