function Countries() {
    const countries = ["Syria", "Lebanon", "Jordan", "Egypt"];

    return (
        <div>
            <h2>قائمة الدول</h2>
            <ul>
                {countries.map((c, index) => (
                    <li key={index}>{c}</li>
                ))}
            </ul>
        </div>
    );
}

export default Countries;
