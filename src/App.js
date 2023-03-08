import './App.css';
import { Network, Alchemy } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import CardComponent from './components/CardComponent';
import blankHead from './images/blankhead.jpg'
function App() {
  const [search, setSearch] = useState(false);
  const [ownerAddress, setOwnerAddress] = useState("");
  const [ownerCollection, setOwnerCollection] = useState([]);


  const config = {
    apiKey: "Lc65gGXOYJ1LANkb3m83-uZ2_AhJUxXn",
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(config);

  const main = async (address) => {
    // Get all NFTs
    const nfts = await alchemy.nft.getNftsForOwner(address);
    const userCollection = nfts.ownedNfts
    // Print NFTs
    console.log(userCollection);
    setOwnerCollection(userCollection)
  };
  const runMain = async (address) => {
    try {
      await main(address);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {


  }, [search])

  const handleSubmit = (e) => {
    e.preventDefault()
    runMain(ownerAddress)
  };

  const handleChange = (e) => {
    setOwnerAddress(e.target.value)
  };

  return (
    <div >
      <div style={{ margin: "3rem", display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <label>
            NFT Owner Name
            <input type="text" value={ownerAddress} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        {ownerCollection.map((nft, index) => (
          <div>
            <CardComponent key={index} img={nft.contract.openSea.imageUrl || blankHead} description={nft.contract.openSea.description} name={nft.contract.openSea.collectionName} />

          </div>
        ))}
      </Grid>
    </div >


  );
}

export default App;
