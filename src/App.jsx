import "./App.scss";
import "./media.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import { Route, Routes } from "react-router-dom";
import Create from "./components/create/create";
import Artist from "./components/artist/artist";
import NftPages from "./components/NftPage/NftPage";
import Market from "./components/marketPlace/marketPlace";

function App() {
  return (
    <div id="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/artist/*" element={<Artist />} />
          <Route path="/create" element={<Create />} />
          <Route path="/nft/*" element={<NftPages />} />
          <Route path="/market/*" element={<Market />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
