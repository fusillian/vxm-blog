import { useState } from "react";

let initAge = 0;

const Home = () => {
    // let name = "mew";

    const [name, setName] = useState("mew");

    const [age, setAge] = useState(initAge);

    const handleClick = () => {
        setName("mewtwo");
        setAge(age+1);
    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>
                {name} is {age} years young 
                <br></br>
                Number of clicks: {age}
            </p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default Home;
