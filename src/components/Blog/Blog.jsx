

const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            <img src={blog.cover} alt="" />
            <p>author:{blog.author}</p>
            {/* <p>authot-img: <img src={blog.author-img} alt="" /> </p> */}
            <p>title:{blog.title}</p>
            
        </div>
    );
};

export default Blog;