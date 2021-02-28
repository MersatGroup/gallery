import * as api from '../api';

export const getGallery = () => async (dispatch) => {

    try {
        const { data } = await api.fetchAlbums();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.mesaage);
    }

        
}