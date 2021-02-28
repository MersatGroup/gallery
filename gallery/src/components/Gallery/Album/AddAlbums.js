import {
  Grid,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  Icon,
  Input,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import React, { useState } from "react";
import useStyles from "./albumStyles";
import moment from "moment";
import { useHistory } from "react-router-dom";

export default function AddAlbums() {
  const classes = useStyles();

  const [album_title, setTitle] = useState("");
  const [thumbnail, setImage] = useState();
  const [images, setImages] = useState([]);
  const history = useHistory();
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e) => {
    setIsAdding(true);
    e.preventDefault();
    const posted_on = moment().format("DD/MM/YYYY");
    const album = { album_title, posted_on, thumbnail };
    fetch("http://localhost:3001/album/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(album),
    }).then(() => {
      setTimeout(() => {
        setIsAdding(false);
        history.push("/");
      }, 1000);
    });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const onImagesChange = (e) => {
    let selectedImages = e.target.files;
    if (selectedImages) {
      for (let i = 0; i < selectedImages.length; i++) {
        setImages((images) => [
          ...images,
          URL.createObjectURL(e.target.files[i]),
        ]);
      }
    }
  };

  const deletePic = (index) => {
    images.splice(index, 1)
    setImages([...images])
    console.log(images)
    
      };

   const handleFormClose = () => {
    history.push("/");
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ADD NEW ALBUM
          </Typography>
          <IconButton
            className={classes.customCloseRight}
            onClick={handleFormClose}
          >
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.pt4}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {!isAdding && (
            <form className={classes.customForm} onSubmit={handleSubmit}>
              <FormControl>
                <InputLabel htmlFor="albumTitle">Album Title</InputLabel>
                <Input id="albumTitle" fullWidth />
              </FormControl>

              <FormControl>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  className={classes.uploadButton}
                >
                  {!thumbnail && (
                    <div className={classes.Hcentered}>
                      <Icon className="material-icons">upload</Icon>
                      <p>Album Thumbnail</p>
                    </div>
                  )}
                  {thumbnail && (
                    <img className={classes.thumbnail} src={thumbnail} alt="" />
                  )}

                  <input
                    type="file"
                    hidden
                    required
                    margin="dense"
                    id="albumThumb"
                    onChange={onImageChange}
                  />
                </Button>
              </FormControl>

              <FormControl>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  className={classes.uploadButton}
                >
                  <div className={classes.Hcentered}>
                    <Icon className="material-icons">upload</Icon>
                    <p>Album Images</p>
                  </div>

                  <input
                    type="file"
                    hidden
                    required
                    margin="dense"
                    id="albumImages"
                    onChange={onImagesChange}
                    multiple
                  />
                </Button>
              </FormControl>
              <Button
                className={`${classes.selfEnd}, ${classes.fixedBtn}`}
                type="submit"
                margin="dense"
                variant="contained"
                color="secondary"
              >
                Confirm
              </Button>
            </form>
          )}
          {images && (
            <Grid container className={classes.imageList} spacing={1}>
              {images.map((image, index) => (
                <Grid
                  item
                  lg={2}
                  md={4}
                  sm={6}
                  xs={12}
                  className={classes.positionRelative}
                  key={image}
                >
                  <img id={`image${index}`} className={classes.thumbnail} src={image} alt="" />
                  <div className={classes.deletePic}>
                    <IconButton size="small" onClick={(e)=>deletePic(index)}>
                      <Delete />
                    </IconButton>
                  </div>
                </Grid>
              ))}
            </Grid>
          )}
          {isAdding && (
            <form className={classes.customForm}>
              <CircularProgress className={classes.loadingSpinner} />
            </form>
          )}
        </Grid>
      </Grid>
    </>
  );
}
