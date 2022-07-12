import { GetSoldSeat, getSoldSeat } from "modules/axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "./Seat.module.css";

const Seat = (props) => {
  const [soldSeat, setSoldSeat] = useState([]);
  const { setSeatPick, seatPick, reset, setReset } = props;
  const {
    query: { movie_id, cinema_id },
  } = useRouter();
  // console.log(movie_id, cinema_id);

  const { soldSeatRaw } = GetSoldSeat(cinema_id, movie_id);
  // console.log(soldSeatRaw)
  useEffect(() => {
    // const getSeatReserved = async () => {
    //   try {
    //     const res = await GetSoldSeat(cinema_id, movie_id);
    //     let seater = res && res.data.data.map((data) => data.seat);
    //     setSoldSeat(seater);
    //     console.log(soldSeat);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getSeatReserved();
    if (soldSeatRaw) {
      let seater = soldSeatRaw && soldSeatRaw.map((data) => data.seat);
      setSoldSeat(seater);
    }
  }, [soldSeatRaw]);
  const listColumn = (number, alphabet) => {
    let length = 14;
    let seat = [];
    for (number > 0; number <= length; number++) {
      seat.push(number + alphabet);
    }
    return seat;
  };
  const availSeat = (alpha) => {
    const variable = listColumn(1, [alpha]).filter((item, i) => {
      return !soldSeat.includes(item);
    });
    return variable;
  };
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
                  // disabled
                  checked={reset ? false : reset[i]}
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    if (!seatPick.includes(e.target.value)) {
                      setReset(false);
                      setSeatPick([...seatPick, data]);
                    }
                  }}
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
                  checked={reset ? false : reset[i]}
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setReset(false);
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
                  checked={reset ? false : reset[i]}
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setReset(false);
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
                  checked={reset ? false : reset[i]}
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setReset(false);
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
                  checked={reset ? false : reset[i]}
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setReset(false);
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
                  checked={reset ? false : reset[i]}
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setReset(false);
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
                  checked={reset ? false : reset[i]}
                  type="checkbox"
                  key={i}
                  id="mark"
                  onClick={(e) => {
                    setReset(false);
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
              {/* </div>
            <div className={styles.seatNumber}> */}
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
