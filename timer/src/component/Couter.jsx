import { useEffect, useState } from "react";
import "../App.css"
export const Counter = () => {

    const [min, setMin] = useState(1);
    const [sec, setSec] = useState(1);

    useEffect(() => {
        let myId = setInterval(() => {
            if (sec > 0) {
                if (sec <= 59) {
                    setSec(sec + 1);
                }
                else {
                    setMin(min + 1);

                    setSec(sec * 0)

                }
            }
            if (sec === 0) {
                if (min === 0) {

                    clearInterval(myId)

                }
                else {

                    setMin(min + 1);
                    setSec(sec + 1);
                }
            }
        }, 1000);
        return () => {

            clearInterval(myId);

        }
    })
    return (
        <div>

            <h1 className="titel">Timer</h1>

            <h1 className="count">{min}:{sec}</h1>

        </div>
    )
}