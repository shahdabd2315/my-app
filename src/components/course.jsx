function Course() {
    const course = {
        name: "Full Stack Development",
        parts: [
            { name: "Fundamentals of React", exercises: 10 },
            { name: "Using props to pass data", exercises: 7 },
            { name: "State of a component", exercises: 14 }
        ]
    };

    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <div>
            <h2>{course.name}</h2>
            <ul>
                {course.parts.map((part, index) => (
                    <li key={index}>
                        {part.name} - {part.exercises} تمرين
                    </li>
                ))}
            </ul>
            <p>المجموع: {total} تمرين</p>
        </div>
    );
}

export default Course;
