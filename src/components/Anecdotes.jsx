import { useState } from "react";

function Anecdotes() {
    const anecdotes = [
        "React makes it painless to create UIs.",
        "State management is key to dynamic apps.",
        "Props help pass data between components.",
        "Hooks simplify logic reuse."
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

    const vote = () => {
        const newVotes = [...votes];
        newVotes[selected] += 1;
        setVotes(newVotes);
    };

    const mostVotedIndex = votes.indexOf(Math.max(...votes));

    return (
        <div>
            <h3>الحكمة الحالية</h3>
            <p>{anecdotes[selected]}</p>
            <p>عدد الأصوات: {votes[selected]}</p>
            <button onClick={vote}>صوّت</button>
            <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
                حكمة جديدة
            </button>

            <h4>الأكثر شعبية</h4>
            <p>{anecdotes[mostVotedIndex]} (أصوات: {votes[mostVotedIndex]})</p>
        </div>
    );
}

export default Anecdotes;
