import './App.css';
import { Network, Alchemy } from 'alchemy-sdk';
import { useState } from 'react';
import { Grid, Typography, Button, TextField, Box } from '@mui/material';
import CardComponent from './components/CardComponent';
import blankHead from './images/blankhead.jpg'
import ModalComponent from './components/ModalComponent';



function App() {
  const [ownerAddress, setOwnerAddress] = useState("");
  const [ownerCollection, setOwnerCollection] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedNFT, setClickedNFT] = useState({});
  const ethereumAddressPattern = /^(0x)?[0-9a-fA-F]{40}$/;


  const config = {
    apiKey: process.env.REACT_APP_API_KEY,
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


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!ethereumAddressPattern.test(ownerAddress)) {
      alert("Invalid Ethereum address");
      return;
    }
    runMain(ownerAddress)
  };

  const handleChange = (e) => {
    setOwnerAddress(e.target.value)
  };

  const openModalAction = (nft) => {
    setModalOpen(true)
    setClickedNFT(nft)
    console.log(nft)
  };

  const closeModalAction = (e) => {
    setModalOpen(false)
  };




  return (
    <Box class="container">
      <Box sx={{ margin: "1rem", display: "flex", justifyContent: "center", mb: 5, }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#58D0EA',
              textAlign: 'center',
            }}>AINGKARAN'S</Typography>
            <Typography sx={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#F65AE2',
              textAlign: 'center',
            }}>NFT BROWSER</Typography>
            <Typography sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#E2E8F6',
              textAlign: 'center',
              marginBottom: '1rem',
              border: '2px solid white'
            }}>Enter Your Wallet Address</Typography>
            <TextField id="standard-error-helper-text"
              label="Address" variant="filled" value={ownerAddress} onChange={handleChange}
              sx={{
                backgroundColor: '#fff',
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#58D0EA',
                  },
                  '&:hover fieldset': {
                    borderColor: '#F65AE2',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#58D0EA',
                  },
                },
              }} />
            <Button sx={{
              mt: 2,
              fontWeight: "bold",
              bgcolor: '#58D0EA',
              '&:hover': {
                bgcolor: '#F65AE2',
              },
            }}
              variant='contained'
              type="submit">
              SUBMIT</Button>
          </Box>
        </form>
      </Box >

      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        {ownerCollection.map((nft, index) => (
          <div>
            <CardComponent
              openModalAction={openModalAction}
              key={index}
              img={nft?.media[0]?.gateway || nft?.contract?.openSea?.imageUrl || blankHead}
              description={nft.contract.openSea.description}
              name={nft.contract.openSea.collectionName}
              index={index}
              nft={nft}
            />
          </div>
        ))}
        {clickedNFT.contract ? (<ModalComponent
          open={modalOpen}
          onClose={closeModalAction}
          clickedNFT={clickedNFT}

        />) : null}
      </Grid>
    </Box >


  );
}

export default App;
