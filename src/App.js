import "./App.css";

function App() {
    const title = "Welcome to the new blog";
    const likes = 50;
const link = "http://10.0.0.22:3000"

    return (
        <div className="App">
            <div className="content">
                <h1>{title}</h1>
                <p>Liked {likes} times</p>

                <p>{10}</p>
                <p>{"Hello, ninja"}</p>
                <p>{[1, 2, 3]}</p>
                <a href={link}>Vidly Genres</a>
            </div>
        </div>
    );
}

export default App;
