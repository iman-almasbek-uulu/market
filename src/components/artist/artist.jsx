import MyProducts from "./myProduct/myProducts";
import Profile from "./profile/profile";

function Artist() {

    return (

        <div className="artist">
            <Profile />
            <MyProducts />
        </div>

    )
}

export default Artist;