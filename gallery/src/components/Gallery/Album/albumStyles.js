import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    root: {
      maxWidth: 345,
    },
    albumTitle: {
      textTransform: 'uppercase',
      margin: 0,
      fontSize: '1rem',
    },    
    albumFootText: {
        textTransform: 'uppercase',
        fontSize: '0.65rem',
        color: '#afafaf',
      },
      cardDelete:{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          color: '#757575',
          '&:hover': {
            color: '#d50000'
          }
      },
      positionRelative:{
          position: 'relative',
      },
      customLink:{
        textDecoration: 'none',
      },
      centeredComp:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      formCard:{
        padding: '1rem',
      },
      customForm:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        height: '350px',
        width: '400px'
      },
      loadingSpinner:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'traslate(-50%, -50%)',
        color: '#00695f',
    },
    instaHeight:{
        height: '250px',
    }
  })