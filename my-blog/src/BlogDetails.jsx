import { useParams , useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = (props) => {
    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch(`http://localhost:7000/blogs/${id}`)
    const navigate = useNavigate()
    const handleDelete = () => {
        fetch('http://localhost:7000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate("/")
        })
    }

    return (
        <div className="blog-details">
            {/* <h2>Blog details - {id}</h2> */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
};

export default BlogDetails;
