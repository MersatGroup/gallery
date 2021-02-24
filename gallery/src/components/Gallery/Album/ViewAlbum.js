import { useParams } from 'react-router-dom';
import { Grid, CircularProgress, GridList, GridListTile } from '@material-ui/core';
import useFetch from '../../../services/useFetch';
import useStyles from '../Styles';

const ViewAlbum = () => {

    const classes = useStyles();

    const { id } = useParams();

    const { data: album } = useFetch('http://localhost:3001/album/' + id);
    console.log(album)
    const { data: pics, error, isLoading } = useFetch('http://localhost:3001/pics/');
    
    return (
        <div>
            {error && <Grid item lg={12} className={classes.error}> { error }</Grid>}
            {isLoading && <CircularProgress className={classes.loadingSpinner} />}
            {album && pics && (
                <GridList pics={pics} cellHeight={250} className={classes.gridList} cols={3}> 
                {pics.filter(pic => pic.album_id === album.id).map(newpics => (
                    <GridListTile key={newpics.id} cols={newpics.cols || 1}>
                    <img src={newpics.img} alt={album.album_title}/>
                    </GridListTile>
                ))}
                </GridList>
            )}
        </div>
    )
}

export default ViewAlbum;