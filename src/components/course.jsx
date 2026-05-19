function Course() {

    const course = {
        name: "Half Stack Development",
        id: 1,

        parts: [
            { id: 1, name: "أساسيات React", exercises: 10 },
            { id: 2, name: "Using props", exercises: 7 },
            { id: 3, name: "State of component", exercises: 14 },
            { id: 4, name: "Debugging React", exercises: 11 }
        ]
    }

    const total = course.parts.reduce(
        (sum, part) => sum + part.exercises, 0
    )

    return (

        <div>

            <h2>{course.name}</h2>

            <ul>

                {course.parts.map(part => (

                    <li key={part.id}>
                        {part.name} : {part.exercises}
                    </li>

                ))}

            </ul>

            <p><strong>المجموع: {total}</strong></p>

        </div>

    )

}

export default Course;