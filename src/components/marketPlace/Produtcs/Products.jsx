import { NavLink, Route, Routes } from "react-router-dom";
import MarketNft from "./marketNft/marketNft";
import MarketCollection from "./marketCollection/marketColllection";


function Products() {

    return (
        <div className="my-products">
        <div className="container">
          <nav className="nav">
            <NavLink to="nft" className={({ isActive }) => (isActive ? "active" : "") + " link"}>
              <span>created</span><span>301</span>
            </NavLink>
            <NavLink to="collection" className={({ isActive }) => (isActive ? "active" : "") + " link"}>
              <span>collection</span><span>14</span>
            </NavLink>
          </nav>
        </div>
        <div className="block">
          <div className="container">
            <Routes>
              <Route path="nft" element={<MarketNft />} />
              <Route path="collection" element={<MarketCollection/>} />
            </Routes>
          </div>
        </div>
      </div>       
    )
}

export default Products;