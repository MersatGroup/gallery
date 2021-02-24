import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    loadingSpinner:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'traslate(-50%, -50%)',
        color: '#00695f',
    },
    error: {
        color: '#d50000',
        textAlign: 'center',
    },
    customLink:{
      textDecoration: 'none',
    },
    marginY1: {
        margin: '16px 0',
    },
    paddingX1: {
        padding: '0 16px',
    },
    instaHeight:{
        height: '250px',
    }
})