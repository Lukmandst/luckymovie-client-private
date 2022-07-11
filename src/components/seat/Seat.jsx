import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "./Seat.module.css";
<<<<<<< HEAD
=======
// import { type1 } from "../../helper/seatType";
>>>>>>> 1aec9f3335d0bdb40575b599708e2292539cb7a4

const Seat = () => {
  const [seatPick, setSeatPick] = useState([]);
  const [soldSeat, setSoldSeat] = useState(["3B", "2A", "5C", "4B"]);
  const [newAvail, setNewAvail] = useState([]);

  const listColumn = (number, alphabet) => {
    let length = 14;
    let seat = [];
    for (number > 0; number <= length; number++) {
      seat.push(number + alphabet);
    }
    return seat;
  };
  console.log(seatPick);
  const availSeat = (alpha) => {
    const variable = listColumn(1, [alpha]).filter((item, i) => {
      return !soldSeat.includes(item);
    });
    return variable;
  };
//   console.log(availSeat("A"));
 
  return (
    <>
      <div className={styles.seatContainer}>
        <div className={styles.key}>
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>G</span>
        </div>
        <div className={styles.seat}>
          <label htmlFor="mark">
            {listColumn(1, "A").map((data, i) => (
              <>
                <input
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={() => {
                    setSeatPick([...seatPick, data]);
                  }}
                //   checked={availSeat("A").includes(data) ? false : true}
                  value={data}
                  disabled={availSeat("A").includes(data) ? false : true}
                />
              </>
            ))}
          </label>
          <label htmlFor="mark">
            {listColumn(1, "B").map((data, i) => (
              <>
                <input
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setSeatPick([...seatPick, data]);
                  }}
                  // checked={availSeat("B").includes(data) ? false : true}
                  value={data}
                  disabled={availSeat("B").includes(data) ? false : true}
                />
              </>
            ))}
          </label>
          <label htmlFor="mark">
            {listColumn(1, "C").map((data, i) => (
              <>
                <input
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setSeatPick([...seatPick, data]);
                  }}
                  // checked={availSeat("B").includes(data) ? false : true}
                  value={data}
                  disabled={availSeat("C").includes(data) ? false : true}
                />
              </>
            ))}
          </label>
          <label htmlFor="mark">
            {listColumn(1, "D").map((data, i) => (
              <>
                <input
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setSeatPick([...seatPick, data]);
                  }}
                  // checked={availSeat("B").includes(data) ? false : true}
                  value={data}
                  disabled={availSeat("D").includes(data) ? false : true}
                />
              </>
            ))}
          </label>
          <label htmlFor="mark">
            {listColumn(1, "E").map((data, i) => (
              <>
                <input
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setSeatPick([...seatPick, data]);
                  }}
                  // checked={availSeat("B").includes(data) ? false : true}
                  value={data}
                  disabled={availSeat("E").includes(data) ? false : true}
                />
              </>
            ))}
          </label>
          <label htmlFor="mark">
            {listColumn(1, "F").map((data, i) => (
              <>
                <input
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setSeatPick([...seatPick, data]);
                  }}
                  // checked={availSeat("B").includes(data) ? false : true}
                  value={data}
                  disabled={availSeat("F").includes(data) ? false : true}
                />
              </>
            ))}
          </label>
          <label htmlFor="mark">
            {listColumn(1, "G").map((data, i) => (
              <>
                <input
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setSeatPick([...seatPick, data]);
                  }}
                  // checked={availSeat("B").includes(data) ? false : true}
                  value={data}
                  disabled={availSeat("G").includes(data) ? false : true}
                />
              </>
            ))}
          </label>

          <div className="d-flex">
            <div className={styles.seatNumber}>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
            </div>
            <div className={styles.seatNumber}>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.seatContainer}>
        <div className={styles.tableSeat}>
          <label htmlFor="mark">
            {listColumn(1, "A").map((data, i) => (
              <>
                <input
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={() => {
                    setSeatPick([...seatPick, data]);
                  }}
                  // checked={availSeat("A").includes(data) ? false : true}
                  value={data + "A"}
                  disabled={availSeat("A").includes(data) ? false : true}
                />
              </>
            ))}
          </label>
          <label htmlFor="mark">
            {listColumn(1, "B").map((data, i) => (
              <>
                <input
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setSeatPick([...seatPick, data]);
                  }}
                  // checked={availSeat("B").includes(data) ? false : true}
                  value={data + "B"}
                  disabled={availSeat("B").includes(data) ? false : true}
                />
              </>
            ))}
          </label>
        </div>
      </div> */}
    </>
  );
};

export default Seat;
