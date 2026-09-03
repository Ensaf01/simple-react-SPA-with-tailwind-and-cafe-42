import Blogs from "../Blogs/Blogs";
import profile from "../../assets/images/profile.png";
const Header = () => {
    return (
        <div className="p-3" >
            <div className="flex justify-between">
                <h2 className="text-4xl font-semibold rounded-lg">React SPA knowledge Cafes</h2>
                <img src={profile} alt="" />
            </div>

            <Blogs></Blogs>
        </div>
    );
};

export default Header;