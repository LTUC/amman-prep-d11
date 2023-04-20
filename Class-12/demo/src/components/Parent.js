import Child from "./Child";
import boyImg from '../assets/boy.JPG';
import girlImg from '../assets/girl.JPG';
import { useState } from "react";
function Parent(props) {
    const [totalToys, setTotalToys] = useState(20);
    const [childMood, setChildMood] = useState(false);
    const decrementTotalToys = (boolVal) => {
        setTotalToys(totalToys - 1);
        setChildMood(boolVal);
    }
    return (
        <>
            <h2>Parent</h2>
            <p>Total Number of Toys: {totalToys} </p>
            <Child name="ahmad" age="10" image={boyImg} decrementFun={decrementTotalToys} />
            <Child name="laila" age="15" image={girlImg} decrementFun={decrementTotalToys} />

            {childMood && <button> Happy :) </button>}
            {!childMood && <button> Sad :( </button>}
        </>
    )
}

export default Parent;