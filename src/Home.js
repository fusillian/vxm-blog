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

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title="The best BLOOOOOGGG!"
                handleDelete={handleDelete}
            />
            <BlogList
                blogs={blogs.filter((blog) => blog.author === "mew")}
                title="Mew's Blogs!"
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default Home;
