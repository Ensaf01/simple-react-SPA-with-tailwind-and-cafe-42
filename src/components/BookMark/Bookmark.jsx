

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className= "flex bg-gray-500 rounded-lg p-4  gap-2" >
            <h2>{title}</h2>
        </div>
    );
};

export default Bookmark;