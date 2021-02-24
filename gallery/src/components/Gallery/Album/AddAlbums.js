import { Grid, TextField, Button, Card, CircularProgress } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './albumStyles';
import moment from 'moment';
import { useHistory } from 'react-router-dom';


export default function AddAlbums() {
    const classes = useStyles();

    const [album_title, setTitle] = useState('');
    const [thumbnail, setImage] = useState('');
    const history = useHistory();
    const [isAdding, setIsAdding] = useState(false);

    const handleSubmit = (e) =>{
        setIsAdding(true);
        e.preventDefault();
        const posted_on = moment().format('DD/MM/YYYY');
        const album = { album_title, posted_on, thumbnail};
        fetch('http://localhost:3001/album/', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(album)
        }).then(() => {
            setTimeout(() => {
                setIsAdding(false);
                history.push('/')
            }, 1000);
        })
    }
    return (
        <Grid container>
            <Grid item lg={6} md={6} sm={12} className={classes.centeredComp}>
            <Card className={classes.formCard}>
                {!isAdding &&                
                <form className={classes.customForm} onSubmit={handleSubmit}>
                    <TextField 
                    id="standard-basic" 
                    label="Album title" required fullWidth margin="dense"
                    onChange={(e) => setTitle(e.target.value)}
                    >
                    </TextField>
                    <TextField 
                    type="text" 
                    label="Album image" required fullWidth margin="dense"
                    onChange={(e) => setImage(e.target.value)}>
                    </TextField>  
                    <Button type="submit" margin="dense" fullWidth variant="contained" color="primary">Add album</Button>
                </form>
                }
                {
                    isAdding &&                
                    <form className={classes.customForm}>
                        <CircularProgress className={classes.loadingSpinner} />
                    </form>
                    
                }
            </Card>
            </Grid>
        </Grid>
    )
}
