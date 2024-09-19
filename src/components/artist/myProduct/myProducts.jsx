import { NavLink, Route, Routes } from "react-router-dom";
import Created from "./created/created";
import Owned from "./owned/owned";
import CollectionList from "./collectionlist/colllectionlist";


function MyProducts() {

    return (
        <div className="my-products">
        <div className="container">
          <nav className="nav">
            <NavLink to="/artist/created" className={({ isActive }) => (isActive ? "active" : "") + " link"}>
              <span>created</span><span>301</span>
            </NavLink>
            <NavLink to="/artist/owned" className={({ isActive }) => (isActive ? "active" : "") + " link"}>
              <span>owned</span><span>3</span>
            </NavLink>
            <NavLink to="/artist/collection" className={({ isActive }) => (isActive ? "active" : "") + " link"}>
              <span>collection</span><span>14</span>
            </NavLink>
          </nav>
        </div>
        <div className="block">
          <div className="container">
            <Routes>
              <Route path="created" element={<Created />} />
              <Route path="owned" element={<Owned />} />
              <Route path="collection" element={<CollectionList />} />
            </Routes>
          </div>
        </div>
      </div>       
    )
}

export default MyProducts;