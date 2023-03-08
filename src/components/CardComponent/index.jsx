import './style.css'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardHeader, Avatar, IconButton } from '@mui/material';

const CardComponent = (props) => {
    const { img, description, name, index, openModalAction } = props;

    return (
        <>
            <Grid >
                <Card sx={{ maxWidth: 200, height: 400, margin: "1rem" }} >
                    <CardHeader
                        sx={{ maxHeight: 50, margin: "1rem" }}
                        avatar={
                            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
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
                            onClick={openModalAction}
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