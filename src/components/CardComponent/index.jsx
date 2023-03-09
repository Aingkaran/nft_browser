import './style.css'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardHeader } from '@mui/material';

const CardComponent = (props) => {
    const { img, name, openModalAction, nft } = props;

    return (
        <>
            <Grid >
                <Card sx={{
                    maxWidth: 200, height: 400, margin: "1rem", borderRadius: '20px', border: '4px solid #F65AE2', backgroundColor: ' black', wordWrap: 'break-word',

                }} >
                    <CardHeader
                        sx={{
                            margin: "1rem",
                            wordWrap: 'break-word',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: "#58D0EA",
                            display: 'flex',
                            justifyContent: 'center'

                        }}
                        title={`#${nft.tokenId}`}
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={img}
                            alt=""
                            onClick={() => openModalAction(nft)}
                            sx={{
                                border: '1px solid #F65AE2',
                                minHeight: '200px'
                            }}
                        />
                        <CardContent >
                            <Typography gutterBottom component="div" sx={{
                                color: "#58D0EA", fontWeight: "bold", textAlign: 'center', wordWrap: 'break-word', fontSize: '20px'
                            }}>
                                {name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

        </>
    )
}

export default CardComponent