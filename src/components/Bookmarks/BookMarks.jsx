import Bookmark from "../BookMark/Bookmark";


const BookMark = ({ bookmarks }) => {
    const { cover, author_img, author, posted_date, reading_time, title, hashtag } = bookmarks;
    return (

        <div className=" flex flex-col gap-2 p-4">
            <h1 className=" font-bold text-2xl">Bookmarked Blogs :{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,indx) => <Bookmark key={indx} bookmark={bookmark}></Bookmark>)
            }
        </div>



    );
};

export default BookMark;