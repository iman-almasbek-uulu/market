import "../../App"

function Create() {

    return <>
        <div className="create">
            <div className="bg"></div>
            <div className="box">
                <h1>Create account</h1>
                <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                <div className="inputs">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

                    <button className="create">Create account</button>
                </div>
            </div>
        </div>
    </>
}

export default Create;