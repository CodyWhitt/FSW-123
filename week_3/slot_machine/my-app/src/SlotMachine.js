import {useState} from "react";
import Wheel from "./Wheel";

// slot machine app
function SlotMachine() {

    //set all wheels at random image
    const [wheel1, setWheel1] = useState(<img src= {Wheel(7)} />);
    const [wheel2, setWheel2] = useState(<img src= {Wheel(7)} />);
    const [wheel3, setWheel3] = useState(<img src= {Wheel(7)} />);

    //function resets wheels at another random setting
    function pullHandle(){
        setWheel1(<img src= {Wheel(7)} />);
        setWheel2(<img src= {Wheel(7)} />);
        setWheel3(<img src= {Wheel(7)} />);
    }

    //displays button and 3 images
    return (
        <>
            <div>
                {wheel1}
                {wheel2}
                {wheel3}
            </div>
            <button onClick={pullHandle}>Pull Handle</button>
        </>
    )
}

export default SlotMachine

//I would have attempted some CSS but ran out of time. My apologies poor time management. 