import './App.css';
import { Network, Alchemy } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

function App() {
  const [search, setSearch] = useState(false);
  const [ownerAddress, setOwnerAddress] = useState("");

  const config = {
    apiKey: "Lc65gGXOYJ1LANkb3m83-uZ2_AhJUxXn",
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(config);

  const main = async (address) => {
    // Get all NFTs
    const nfts = await alchemy.nft.getNftsForOwner(address);
    // Print NFTs
    console.log(nfts);
  };
  const runMain = async (address) => {
    try {
      await main(address);
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };


  useEffect(() => {


  }, [search])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ownerAddress)
    runMain(ownerAddress)
  };

  const handleChange = (e) => {
    console.log(e.target.value)
    setOwnerAddress(e.target.value)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        NFT Owner Name
        <input type="text" value={ownerAddress} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
