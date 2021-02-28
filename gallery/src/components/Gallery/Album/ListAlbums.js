import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import useStyles from "./albumStyles";
import { Link } from "react-router-dom";

const ListAlbums = ({ albums, handleDeleteCard }) => {
  const classes = useStyles();
  return (
    <>
      {albums.map((album) => (
        <Grid item lg={3} key={album.id} className={classes.positionRelative}>
          <Link to={`/album/${album.id}`} className={classes.customLink}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={album.album_title}
                  height="140"
                  image={album.thumbnail}
                  title={album.album_title}
                  className={classes.instaHeight}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h6"
                    className={classes.albumTitle}
                  >
                    {album.album_title}
                  </Typography>
                  <Typography
                    className={classes.albumFootText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Posted on: {album.posted_on}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <IconButton
            id={album.id}
            title="Delete"
            className={classes.cardDelete}
            size="small"
            onClick={() => handleDeleteCard(album.id)}
          >
            <Delete />
          </IconButton>
        </Grid>
      ))}
    </>
  );
};

export default ListAlbums;
