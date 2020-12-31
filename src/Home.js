import { useState } from "react";

const Home = () => {
    // let name = "mew";

    const [name, setName] = useState("mew");

    const [age, setAge] = useState(26);

    const handleClick = () => {
        setName("mewtwo");
        setAge(27);
    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>
                {name} is {age} years young
            </p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default Home;
