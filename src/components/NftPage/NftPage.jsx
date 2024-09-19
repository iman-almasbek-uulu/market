import Nft from "../main/nft/nft";

function NftPages() {
  return (
    <div className="nftpage">
      <div className="bg"></div>
      <div className="container">
        <div className="top">
          <div className="left">
            <h2>The Orbitians</h2>
            <p>Minted on Sep 30, 2022</p>
          </div>
          <div className="right">
            <p>Auction ends in:</p>
            <div className="times">
              <div>
                <p className="hour">20 :</p>
                <p>hours</p>
              </div>
              <div>
                <p className="hour">20 :</p>
                <p>hours</p>
              </div>
              <div>
                <p className="hour">20</p>
                <p>hours</p>
              </div>
            </div>
            <button className="btn secondary">Place Bid</button>
          </div>
        </div>
        <div className="bottom">
          <p className="title">Created By</p>
          <div className="user">
            <img src="/images/Avatar.jpg" alt="" />
            <span>Orbitian</span>
          </div>
          <p className="title">Description</p>
          <p className="descr">
            The Orbitians <br />
            is a collection of 10,000 unique NFTs on the Ethereum blockchain,
          </p>
          <p className="descr">
            There are all sorts of beings in the NFT Universe. The most advanced
            and friendly of the bunch are Orbitians
          </p>
          <p className="descr">
            They live in a metal space machines, high up in the sky and only
            have one foot on Earth. <br /> These Orbitians are a peaceful race, but
            they have been at war with a group of invaders for many generations.
            The invaders are called Upside-Downs, because of their inverted
            bodies that live on the ground, yet do not know any other way to be.
            Upside-Downs believe that they will be able to win this war if they
            could only get an eye into Orbitian territory, so they've taken to
            make human beings their target.
          </p>

          <p className="title">Details</p>
          <ul className="views">
            <li>
              <img src="/images/globe.png" alt="" />
              <span>View on Etherscan</span>
            </li>
            <li>
              <img src="/images/globe.png" alt="" />
              <span>View Original</span>
            </li>
          </ul>

          <p className="title">Tags</p>

          <ul className="list">
            <button>Animation</button>
            <button>illustration</button>
            <button>moon</button>
            <button>moon</button>
          </ul>
        </div>
      </div>
      <Nft />

    </div>
  );
}

export default NftPages;
