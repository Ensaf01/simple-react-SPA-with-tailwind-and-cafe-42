
import profile from "../../assets/images/profile.png";
const Header = () => {
    return (
        <div className="p-3" >
            <div className="flex justify-between border-b-2">
                <h2 className="text-4xl font-semibold rounded-lg">React SPA knowledge Cafes</h2>
                <img src={profile} alt="" />
            </div>

            
        </div>
    );
};

export default Header;