import './style.css'
import { Button, Modal, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import blankHead from '../../images/blankhead.jpg'

const ModalComponent = (props) => {
    const { open, onClose, clickedNFT } = props

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '25%',
        height: '70%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textAlign: "center"
    };
    const mediumScreenStyle = {
        width: "50%",
        height: "70%",
        overflow: "auto"
    };
    const smallScreenStyle = {
        width: "80%",
        height: "70%",
        overflow: "auto"
    };
    console.log(clickedNFT)
    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    ...style,
                    '@media (max-width: 1200px)': mediumScreenStyle,
                    '@media (max-width: 768px)': smallScreenStyle,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {clickedNFT.contract.name}
                    </Typography>
                    <Box

                        component="img"
                        sx={{
                            width: "70%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        src={clickedNFT.contract.openSea.imageUrl || blankHead}
                    />
                    <Typography id="modal-modal-description" sx={{ mt: 2, wordWrap: 'break-word', fontWeight: "bold" }}>
                        Contract Address
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ wordWrap: 'break-word' }}>
                        {clickedNFT.contract.address}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, wordWrap: 'break-word', fontWeight: "bold" }}>
                        Description
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ wordWrap: 'break-word' }}>
                        {clickedNFT.contract.openSea.description}
                    </Typography>
                    <Button
                        sx={{ mt: 2, fontWeight: "bold" }}
                        component="a"
                        href={`https://opensea.io/assets/ethereum/${clickedNFT.contract.address}/${clickedNFT.tokenId}`}
                        variant="contained"
                        size="large"
                        endIcon={<ShoppingCartIcon />}
                        target="_blank"
                        rel="noopener noreferrer">
                        BUY NOW
                    </Button>
                </Box>
            </Modal>


        </>
    )

}

export default ModalComponent