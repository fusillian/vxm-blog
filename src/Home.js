const Home = () => {
    const handleClick = (e) => {
        console.log("Hello Ninjas", e);
    };

    const handleClickAgain = (name, e) => {
        console.log(`hello ${name}`, e);
    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button
                onClick={(e) => {
                    handleClickAgain("Mario", e);
                }}
            >
                Click me again
            </button>
        </div>
    );
};

export default Home;
