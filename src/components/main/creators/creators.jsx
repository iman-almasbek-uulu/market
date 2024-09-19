import { NavLink } from "react-router-dom";




function Creators() {


    return (
        <div className="creators">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h2>Top creators</h2>
                        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
                    </div>
                    <button className="btn"><img src="./images/rocket.png" alt="" /> <span>View Rankings</span></button>

                </div>
                <ul className="creators-list">
                    <NavLink to='/artist' className="creators-item">
                        <span className="count">1</span>
                        <img src="./images/Avatar.jpg" alt="" />
                        <div className="block">
                            <h4 className="title">Keepitreal</h4>
                            <span className="key">Total Sales:</span>
                            <span className="value">34.53 ETH</span>
                        </div>
                    </NavLink>
                    
                    
                        
                </ul>
            </div>
        </div>
    )
}

export default Creators;