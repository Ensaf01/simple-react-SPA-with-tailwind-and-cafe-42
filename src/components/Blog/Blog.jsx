

const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div className="left-side-div flex  gap-3">
            <div className="border-2 border-blue-600 p-5" >
                <img className="w-full" src={blog.cover} alt="" />
                <div className="flex items-center justify-between gap-4 mt-5">
                    <div className="flex items-center gap-4">
                        <img className="w-20 rounded-full" src={blog.author_img} alt="" />
                        <div>
                            <p className="font-bold text-2xl">{blog.author}</p>
                            <p>{blog.posted_date}</p>
                        </div>
                    </div>

                    <div>
                        <p>{blog.reading_time}</p>
                    </div>

                </div>
                <div className="flex flex-col gap-3 mt-5">
                    <p className="text-4xl font-extrabold">{blog.title}</p>
                    <p>{blog.hashtag}</p>
                    <p>mark as Read</p>
                </div>


            </div>
            <div className="right-side-div">
                <div>
                    <h2 className="bg-blue-100 text-blue-900 text-3xl font-semibold border-2 border-blue-950 rounded-lg p-2">Spent Tine on read {}</h2>
                </div>
                <div className="bg-gray-400 flex flex-col p-4">
                    <h1 className="flex items-center justify-center mb-5 font-bold">Bookmarked Blogs : 8</h1>

                    <div className="flex flex-col gap-5  ">
                        <p className="bg-white rounded-lg p-3">Master Microsoft Power Platform and Become an In-Demand!</p>
                        <p className="bg-white rounded-lg p-3">Master Microsoft Power Platform and Become an In-Demand!</p>


                    </div>

                </div>


            </div>

        </div>
    );
};

export default Blog;