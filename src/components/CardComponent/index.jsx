import './style.css'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const CardComponent = (props) => {
    const { img, description, name } = props;

    return (
        <>
            <Grid >
                <Card sx={{ maxWidth: 200, margin: "1rem" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={img}
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
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