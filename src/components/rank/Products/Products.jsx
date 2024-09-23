import { NavLink, Route, Routes } from "react-router-dom";
import Today from "./today/today";


function Products() {

    return (
        <div className="my-products">
        <div className="container">
          <nav className="nav">
            <NavLink to="today" className={({ isActive }) => (isActive ? "active" : "") + " link"}>
              <span>today</span>
              <span>1d</span>
            </NavLink>
            <NavLink to="collection" className={({ isActive }) => (isActive ? "active" : "") + " link"}>
              <span>this week</span>
              <span>7d</span>
            </NavLink>
            <NavLink to="nft" className={({ isActive }) => (isActive ? "active" : "") + " link"}>
              <span>this week</span>
              <span>30d</span>
            </NavLink>
            <NavLink to="collection" className={({ isActive }) => (isActive ? "active" : "") + " link"}>
              <span>all time</span>
              <span>all time</span>
            </NavLink>
          </nav>
        </div>
        <div className="block">
          <div className="container">
            <Routes>
              <Route path="today" element={<Today />} />
            </Routes>
          </div>
        </div>
      </div>       
    )
}

export default Products;