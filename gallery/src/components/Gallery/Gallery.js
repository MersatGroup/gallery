import React from "react";
import CreateButton from "../CreateButton/CreateButton";

import { useSelector } from "react-redux";
import Collections from "@material-ui/icons/Collections";
import { Grid, CircularProgress } from "@material-ui/core";
import ListAlbums from "../Gallery/Album/ListAlbums";
import useStyles from "./Styles";
import useFetch from "../../services/useFetch";
import { Link } from "react-router-dom";

const Gallery = () => {
  const { data: albums, isLoading, error } = useFetch(
    "http://localhost:3001/album/"
  );
  const classes = useStyles();
  const gallery = useSelector((state) => state.gallery);

  console.log(gallery);

  return (
    <>
      <Grid
        container
        display="flex"
        justify="flex-end"
        className={classes.marginY1}
      >
        <Grid item lg={2} md={2} xs={6}>
          <Link to="/addAlbum/" className={classes.customLink}>
            <CreateButton
              label="Add new album"
              color="secondary"
              startIcon={<Collections />}
            ></CreateButton>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={3} display="flex" className={classes.paddingX1}>
        {error && (
          <Grid item lg={12} className={classes.error}>
            {" "}
            {error}
          </Grid>
        )}
        {isLoading && <CircularProgress className={classes.loadingSpinner} />}
        {albums && (
          <ListAlbums albums={albums} albumId={albums.id}></ListAlbums>
        )}
      </Grid>
    </>
  );
};

export default Gallery;
