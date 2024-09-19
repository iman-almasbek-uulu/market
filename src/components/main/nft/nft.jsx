import { NavLink } from "react-router-dom";



function Nft() {


    return (
        <div className="nft">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h2>Discover More NFTs</h2>
                        <p>Explore new trending NFTs</p>
                    </div>
                    <NavLink to='/nft' className="btn"><img src="./images/Eye.png" alt="" /> <span>See All</span></NavLink>

                </div>
                <ul className="nft-list">
                    <li>
                        <img src="/public/images/gorilla.jpg" className="img"></img>
                        <div className="end">
                            <h4>Distant Galaxy</h4>
                            <div className="block">
                                <img src="/images/Avatar.jpg" alt="" />
                                <span>MoonDancer</span>
                            </div>
                            <div className="info">
                                <div className="price">
                                    <p className="first">Price</p>
                                    <p className="last">1.63 ETH</p>
                                </div>
                                <div className="price">
                                    <p className="first">Highest Bid</p>
                                    <p className="last">0.33 wETH</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="/public/images/fox.jpg" className="img"></img>
                        <div className="end">
                            <h4>Distant Galaxy</h4>
                            <div className="block">
                                <img src="/images/Avatar.jpg" alt="" />
                                <span>MoonDancer</span>
                            </div>
                            <div className="info">
                                <div className="price">
                                    <p className="first">Price</p>
                                    <p className="last">1.63 ETH</p>
                                </div>
                                <div className="price">
                                    <p className="first">Highest Bid</p>
                                    <p className="last">0.33 wETH</p>
                                </div>
                            </div>
                        </div>
                    </li>
                        <li>
                            <img src="/public/images/gorilla.jpg" className="img"></img>
                            <div className="end">
                                <h4>Distant Galaxy</h4>
                                <div className="block">
                                    <img src="/public/images/Avatar.jpg" alt="" />
                                    <span>MoonDancer</span>
                                </div>
                                <div className="info">
                                    <div className="price">
                                        <p className="first">Price</p>
                                        <p className="last">1.63 ETH</p>
                                    </div>
                                    <div className="price">
                                        <p className="first">Highest Bid</p>
                                        <p className="last">0.33 wETH</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Nft;