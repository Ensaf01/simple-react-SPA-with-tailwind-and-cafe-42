
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog,handleBookMarks,handleSpentTime }) => {
    // console.log(blog)
    const {cover,author_img,author,posted_date,reading_time,title,hashtag}=blog;
    return (
        <div className="left-side-div flex  gap-3">
            <div className="border-2 border-blue-600 p-5" >
                <img className="w-full" src={cover} alt="" />
                <div className="flex items-center justify-between gap-4 mt-5">
                    <div className="flex items-center gap-4">
                        <img className="w-20 rounded-full" src={author_img} alt="" />
                        <div>
                            <p className="font-bold text-2xl">{author}</p>
                            <p>{posted_date}</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <p>{reading_time} min read</p>
                        {/* use react icon and something install in bash and import */}
                        <button onClick={() => handleBookMarks(blog)}>
                            <FaBookmark></FaBookmark>
                        </button>
                    </div>

                </div>
                <div className="flex flex-col gap-3 mt-5">
                    <p className="text-4xl font-extrabold">{title}</p>
                    <p>
                        {/* hash tag gula array modhe ache */}
                        {
                        hashtag.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                        }
                    </p>
                    <div>
                        <button className="underline text-blue-500" onClick={()=>handleSpentTime(reading_time)}>Mark As read</button>

                    </div>
                    
                    
                </div>


            </div>
            

        </div>
    );
};

export default Blog;