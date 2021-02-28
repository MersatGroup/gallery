import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
let theme = createMuiTheme();
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
        display: 'flex',
        justifyContent: 'center',
      },
      customForm:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem',
        flexDirection: 'column',
        width: '33.33%',
        margin: 'auto',
        '& div': {
          margin: '.5rem 0',
          width: '100%'
        },
        [theme.breakpoints.down('sm')]: {
          width: '80%',
        },
        [theme.breakpoints.between('sm', 'md')]:{
          width: '50%',
        }
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
    },
    selfEnd:{
        alignSelf: 'flex-end',
    },
    albumThumb:{
      visibility: 'hidden',
    },
    inputIcon:{
      position: 'absolute',
      top: '20px',
      right: 0
    },
    thumbnail: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    uploadButton:{
      borderStyle: 'dotted',
      width: '100%',
      '&:hover': {
        backgroundColor: 'transparent'
      },
      '& p':{
        margin: 0
      }
    },
    Hcentered:{
      textAlign: 'center',
    },
    customCloseRight: {
      position: 'absolute',
      right: '1rem',
      color: '#fff',
      transition: '.25s ease-in-out',
      '&:hover':{
        color: '#d50000',
      }
    },
    deletePic:{
      position: 'absolute',
      top: '.5rem',
      right: '.5rem',
      background: '#7575758c',
      borderRadius: '100%',
      backdropFilter: 'blur(4px)',
      '& button':{
        color: '#fff',
        transition: '.25s ease-in-out',
        '&:hover':{
          color: '#d50000',
        }
      }
    },
    imageList:{
      padding: '1rem',
    },
    pt4:{
      paddingTop: '4rem',
    },
    fixedBtn:{
      position: 'fixed',
      top: '1rem',
      right: '5rem',
      zIndex: '9999',
        [theme.breakpoints.down('sm')]: {
          top: '.75rem',
          right: '3.5rem',
          padding: '3px 8px'
      },
    }
  })