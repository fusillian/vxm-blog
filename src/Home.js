import { useState } from "react";
import BlogList from "./components/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "My new website",
            body: "lorem ipsum...",
            author: "mew",
            id: 1,
        },
        {
            title: "Welcome party!",
            body: "lorem ipsum...",
            author: "mewtwo",
            id: 2,
        },
        {
            title: "Web dev tops tips",
            body: "lorem ipsum...",
            author: "mew3",
            id: 3,
        },
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="The best BLOOOOOGGG!" />
            <BlogList
                blogs={blogs.filter((blog) => blog.author === "mew")}
                title="Mew's Blogs!"
            />
        </div>
    );
};

export default Home;
