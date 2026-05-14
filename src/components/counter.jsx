import { useState } from "react";

function Display({ value }) {
    return <h3>القيمة الحالية: {value}</h3>;
}

function Button({ handleClick, text }) {
    return <button onClick={handleClick}>{text}</button>;
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Display value={count} />
            <Button handleClick={() => setCount(count + 1)} text="زيادة" />
            <Button handleClick={() => setCount(count - 1)} text="إنقاص" />
            <Button handleClick={() => setCount(0)} text="إعادة التعيين" />
        </div>
    );
}

export default Counter;
