// react
import { useState, useEffect } from "react";
// style
import './clock.css'

const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => setDate(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);

          
    const Day = new Intl.DateTimeFormat(navigator.language, {weekday: "long"}).format(date);

    const clock = new Intl.DateTimeFormat(navigator.language, {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
    }).format(date);

    const History = new Intl.DateTimeFormat(navigator.language, {month: "long",day: "numeric"}).format(date);

    return (
        <div className="history">
            <span className="day">
                {Day}
            </span>

            <div className="now">
                <span>
                    {History},
                </span>
                <span className="time">
                    {clock}
                </span>
            </div>
        </div>
    )

}

export default Clock