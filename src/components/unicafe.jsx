import { useState } from "react";

function Unicafe() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const total = good + neutral + bad;
    const average = total ? (good - bad) / total : 0;
    const positive = total ? (good / total) * 100 : 0;

    return (
        <div>
            <h3>أعطنا تقييمك</h3>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>

            <h4>الإحصائيات</h4>
            {total === 0 ? (
                <p>لا يوجد تقييمات بعد</p>
            ) : (
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Average: {average.toFixed(2)}</li>
                    <li>Positive: {positive.toFixed(1)}%</li>
                </ul>
            )}
        </div>
    );
}

export default Unicafe;
