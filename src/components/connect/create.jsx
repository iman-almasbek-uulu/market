import "../../App"

function Connect() {

    return <>
        <div className="create">
            <div className="bg"></div>
            <div className="box">
                <h1>Connect wallet</h1>
                <p>Choose a wallet you want to connect. There are several wallet providers.</p>
                <div className="inputs">
                    <div className="item">
                        <img src="/public/images/Metamask.png" alt="" />
                        <span>Metamask</span>
                    </div>    
                    <div className="item">
                        <img src="/public/images/Metamask2.png" alt="" />
                        <span>Wallet Connect</span>
                    </div>    
                    <div className="item">
                        <img src="/public/images/Metamask3.png" alt="" />
                        <span>Coinbase</span>
                    </div>    
                </div>
            </div>
        </div>
    </>
}

export default Connect;