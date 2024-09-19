

function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <div className="content">
                    <div className="box">   
                        <img className="footer-logo" src="/images/logo.png" alt="" />
                        <ul className="list">
                            <li>NFT marketplace UI created with Anima for Figma.</li>
                            <li>Join our community</li>
                            <li>
                                <img src="/images/i.png" alt="" />
                                <img src="/images/i2.png" alt="" />
                                <img src="/images/i3.png" alt="" />
                                <img src="/images/i4.png" alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="box">   
                        <h3>Explore</h3>
                        <ul className="list">
                            <li>Marketplace</li>
                            <li>Rankings</li>
                            <li>Connect a wallet</li>
                        </ul>
                    </div>
                    <div className="box active">   
                        <h3>Join our weekly digest</h3>
                        <ul className="list">
                            <li>Get exclusive promotions & updates straight to your inbox.</li>
                            <li><div><input placeholder="Enter your email here" type="text" /><button>
                            
                            <span>Subscribe</span></button></div></li>
                        </ul>
                    </div>
                </div>
                <div className="end">
                    <span>Ⓒ NFT Market. Use this template freely.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;