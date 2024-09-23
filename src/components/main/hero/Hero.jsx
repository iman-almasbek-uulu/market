// import React from "react";


function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="left">
                    <h1>Discover digital art & Collect NFTs</h1>
                    <p className="hero-descr">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                    
                </div>
                <div className="right">
                    <div className="hero-back"></div>
                    <div className="hero-info">
                        <h6>Space Walking</h6>
                        <div className="user">
                            <img src="./images/use.png" alt="" />
                            <span>Animakid</span>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <button className="hero-btn"><img src="./images/rocket.png" alt="" /> <span>Get Started</span></button>
                    <ul className="hero-list">
                        <li className="hero__item">
                            <h4>240k+ </h4>
                            <p>Total Sale</p>
                        </li>
                        <li className="hero__item">
                            <h4>100k+</h4>
                            <p>Auctions</p>
                        </li>
                        <li className="hero__item">
                            <h4>240k+</h4>
                            <p>Artists</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );

}

export default Hero;