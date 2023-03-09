import './style.css'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardHeader, Avatar, IconButton } from '@mui/material';

const CardComponent = (props) => {
    const { img, description, name, index, openModalAction, nft } = props;

    return (
        <>
            <Grid >
                <Card sx={{ maxWidth: 200, height: 400, margin: "1rem", borderRadius: '20px', borderColor: 'red' }} >
                    <CardHeader
                        sx={{ maxHeight: 50, margin: "1rem" }}
                        avatar={
                            <Avatar sx={{ bgcolor: '#F65AE2' }} aria-label="recipe">
                                {`#${index}`}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">

                            </IconButton>
                        }
                        title={name}
                        subheader="from Collection"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={img}
                            alt=""
                            onClick={() => openModalAction(nft)}

                        />
                        <CardContent sx={{ backgroundColor: "black" }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#58D0EA", fontWeight: "bold" }}>
                                {name}
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                This is an nft description that i'll be using to describe the nft
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

        </>
    )
}

export default CardComponent