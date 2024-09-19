

function Profile() {

    return <>
        <div className="bg"></div>
        <div className="container">
            <div className="profile">
                <img src="../../../../public/images/avatar2.jpg" alt="" className="avatar" />
                <div className="shares">
                    <h2 className="name">Animakid</h2>
                    <div className="btns">
                        <button className="btn btn-primary"><img src="../../../../public/images/Copy.png" alt="" />0xc0E3...B79C</button>
                        <button className="btn btn-secondary"><img src="../../../../public/images/Plus.png" alt="" />Follow</button>
                    </div>
                </div>
                <div className="block">
                    <ul className="block-list">
                        <li>
                            <p>250k+</p>
                            <p>Volume</p>
                        </li>
                        <li>
                            <p>50+</p>
                            <p>NFTs Sold</p>
                        </li>
                        <li>
                            <p>3000+</p>
                            <p>Followers</p>
                        </li>
                    </ul>
                    <div className="bio">
                        <p>Bio</p>
                        <p>The internet's friendliest designer kid.</p>
                    </div>
                    <div className="links">
                        <p>Links</p>
                        <ul className="list">
                            <li><a href=""><img src="../../../../public/images/i.png" alt="" /></a></li>
                            <li><a href=""><img src="../../../../public/images/i2.png" alt="" /></a></li>
                            <li><a href=""><img src="../../../../public/images/i3.png" alt="" /></a></li>
                            <li><a href=""><img src="../../../../public/images/i4.png" alt="" /></a></li>
                            <li><a href=""><img src="../../../../public/images/i2.png" alt="" /></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </>

    
}

export default Profile;