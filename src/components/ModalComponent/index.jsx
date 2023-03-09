import './style.css'
import { Button, Modal, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import blankHead from '../../images/blankhead.jpg'
import CloseIcon from '@mui/icons-material/Close';

const ModalComponent = (props) => {
    const { open, onClose, clickedNFT } = props

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '25%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        textAlign: "center",
        borderRadius: "20px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
        border: '4px solid #F65AE2',
        maxWidth: '100%',



    };
    const mediumScreenStyle = {
        width: "50%",
    };
    const smallScreenStyle = {
        width: "80%",
        maxHeight: '90%'
    };
    console.log(clickedNFT)
    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{ sx: { backgroundColor: 'rgba(255, 255, 255, 0.5)' } }}

            >
                <Box sx={{
                    ...style,
                    '@media (max-width: 1200px)': mediumScreenStyle,
                    '@media (max-width: 768px)': smallScreenStyle
                }}>
                    <Button
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            m: 1,
                            color: '#58D0EA',
                            '&:hover': {
                                color: '#F65AE2',
                            },
                        }}
                    >
                        <CloseIcon />
                    </Button>
                    <Typography id="modal-modal-title" variant="h8" component="h2" mb={2} sx={{ mt: 2, wordWrap: 'break-word', fontWeight: "bold", color: "#58D0EA" }}>
                        {clickedNFT.contract.name}
                    </Typography>
                    <Box

                        component="img"
                        sx={{
                            width: "70%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: '4px solid #F65AE2'

                        }}
                        src={clickedNFT.contract.openSea.imageUrl || blankHead}
                    />
                    <Typography id="modal-modal-description" sx={{ mt: 2, wordWrap: 'break-word', fontWeight: "bold", color: "#58D0EA" }}>
                        Contract Address
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ wordWrap: 'break-word', color: "white" }}>
                        {clickedNFT.contract.address}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, wordWrap: 'break-word', fontWeight: "bold", color: "#58D0EA" }}>
                        Description
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ wordWrap: 'break-word', color: "white" }}>
                        {clickedNFT.contract.openSea.description || "Not Available"}
                    </Typography>
                    <Button
                        sx={{
                            mt: 2,
                            fontWeight: "bold",
                            bgcolor: '#58D0EA',
                            '&:hover': {
                                bgcolor: '#F65AE2',
                            },
                        }}
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